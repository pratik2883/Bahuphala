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


export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" aria-label="Bahuphala Ventures home">
          <img
            src="/logo.png"
            alt="Bahuphala Ventures Pvt. Ltd."
            className="h-11 sm:h-12 w-auto object-contain"
          />
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
                    ? "font-semibold text-navy"
                    : "text-steel hover:text-navy",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-5">
          <a
            href="tel:+919657131050"
            className="flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:opacity-80"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-leaf/20 text-navy">
              <Phone className="h-3.5 w-3.5 fill-navy text-navy" />
            </div>
            <span>+91 96571 31050</span>
          </a>
          <Button asChild size="default" className="bg-navy text-white hover:bg-navy-deep shadow-sm">
            <Link to="/contact">
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
            <div className="flex h-full flex-col gap-6 pt-6">
              <div className="flex items-center">
                <img
                  src="/logo.png"
                  alt="Bahuphala Ventures Pvt. Ltd."
                  className="h-10 w-auto object-contain"
                />
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
              <div className="mt-auto flex flex-col gap-3">
                <a
                  href="tel:+919657131050"
                  className="flex items-center justify-center gap-2 rounded-md border border-border py-2.5 text-sm font-medium text-navy hover:bg-secondary"
                >
                  <Phone className="h-4 w-4 text-leaf" />
                  +91 96571 31050
                </a>
                <SheetClose asChild>
                  <Button asChild size="lg" className="bg-navy text-white hover:bg-navy-deep">
                    <Link to="/contact">
                      Talk to an Engineer
                    </Link>
                  </Button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
