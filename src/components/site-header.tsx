import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
] as const;

function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="6" className="fill-navy" />
      <path
        d="M9 23V9h5.2c2.6 0 4.3 1.6 4.3 4 0 1.8-1 3.1-2.5 3.6L19.4 23h-3l-3-5.7h-1.6V23H9Zm3-8.2h2c1 0 1.6-.5 1.6-1.3 0-.9-.6-1.3-1.6-1.3h-2v2.6Z"
        className="fill-white"
      />
      <path d="M22 9h3v14h-3z" className="fill-steel-light" />
    </svg>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Bahuphala home">
          <LogoMark className="h-8 w-8" />
          <span className="font-display text-lg font-bold tracking-tight text-navy">
            Bahuphala
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.to === "/"
                ? pathname === "/"
                : pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "text-navy"
                    : "text-steel hover:text-navy",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="lg" className="bg-navy text-white hover:bg-navy-deep">
            <Link to="/contact">
              <Phone className="h-4 w-4" />
              Talk to an Engineer
            </Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5 text-navy" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 border-border">
            <div className="flex h-full flex-col gap-6 pt-8">
              <div className="flex items-center gap-2.5">
                <LogoMark className="h-8 w-8" />
                <span className="font-display text-lg font-bold text-navy">
                  Bahuphala
                </span>
              </div>
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.to}>
                    <Link
                      to={link.to}
                      className="rounded-md px-3 py-2.5 text-sm font-medium text-steel transition-colors hover:bg-secondary hover:text-navy"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <SheetClose asChild>
                <Button asChild size="lg" className="mt-auto bg-navy text-white hover:bg-navy-deep">
                  <Link to="/contact">
                    <Phone className="h-4 w-4" />
                    Talk to an Engineer
                  </Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
