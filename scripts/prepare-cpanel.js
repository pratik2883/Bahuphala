import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const rootDir = process.cwd();
const publicOutDir = path.join(rootDir, ".output", "public");

if (!fs.existsSync(publicOutDir)) {
  console.error("Error: .output/public directory not found. Please run build first.");
  process.exit(1);
}

// 1. Ensure index.html exists
const indexPath = path.join(publicOutDir, "index.html");
const shellPath = path.join(publicOutDir, "_shell.html");

if (fs.existsSync(indexPath)) {
  const stats = fs.statSync(indexPath);
  console.log(`✓ Using fully pre-rendered index.html (${Math.round(stats.size / 1024)} KB) with complete HTML, CSS & content`);
} else if (fs.existsSync(shellPath)) {
  fs.copyFileSync(shellPath, indexPath);
  console.log("✓ Copied _shell.html -> index.html for root route");
} else {
  console.warn("Warning: Neither _shell.html nor index.html found in .output/public.");
}

// 2. Ensure .htaccess is in .output/public
const htaccessSrc = path.join(rootDir, "public", ".htaccess");
const htaccessDest = path.join(publicOutDir, ".htaccess");
if (fs.existsSync(htaccessSrc)) {
  fs.copyFileSync(htaccessSrc, htaccessDest);
  console.log("? Added Apache .htaccess rewrite rules");
}

// 3. Create zip file for 1-click cPanel upload
const zipPath = path.join(rootDir, "cpanel-deploy.zip");
if (fs.existsSync(zipPath)) {
  fs.unlinkSync(zipPath);
}

try {
  console.log("Packaging cpanel-deploy.zip...");
  execSync(`tar -a -cf "${zipPath}" * .htaccess`, { cwd: publicOutDir, stdio: "inherit" });
  console.log("\n?? SUCCESS! Created ready-to-upload zip file:");
  console.log(`?? ${zipPath}`);
  console.log("\nJust upload and extract this zip into your cPanel public_html folder! No Node.js required.");
} catch (err) {
  console.log("Zip packaging note:", err.message);
}

