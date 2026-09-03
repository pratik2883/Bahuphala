import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
] as const;

const SERVICES = [
  "Structural 2D & 3D Drafting",
  "Finite Element Analysis (FEA)",
  "Computational Fluid Dynamics (CFD)",
  "Structural Steel Detailing",
  "Technical Manpower Sourcing",
] as const;

export function SiteFooter() {
  return (
    <footer className="navy-gradient text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="font-display text-xl font-bold tracking-tight">
                Bahuphala
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              Expert structural engineering & analysis services. Precision
              CAD drafting, FEA, and CFD solutions delivered on time, every time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/90">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/90">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service} className="text-sm text-white/70">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/90">
              Contact
            </h3>
            <ul className="mt-4 space-y-3.5">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />
                <a
                  href="mailto:skd@bahuphala.com"
                  className="transition-colors hover:text-white"
                >
                  skd@bahuphala.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />
                <a
                  href="tel:+919756131050"
                  className="transition-colors hover:text-white"
                >
                  +91 97561 31050
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/60" />
                <span>Pune & Nashik, Maharashtra</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-6 sm:flex-row">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} Bahuphala. All rights reserved.
          </p>
          <p className="text-xs text-white/60">
            Structural Engineering & Analysis Services
          </p>
        </div>
      </div>
    </footer>
  );
}
