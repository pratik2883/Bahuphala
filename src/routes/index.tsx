import { createFileRoute, Link } from "@tanstack/react-router";
import {
  DraftingCompass,
  Boxes,
  Wind,
  Building2,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-engineering.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bahuphala — Structural Engineering & Analysis Services" },
      {
        name: "description",
        content:
          "Bahuphala supports product development with precise 2D/3D CAD drafting, FEA, and CFD solutions. Delivering accuracy on time, every time.",
      },
      {
        property: "og:title",
        content: "Bahuphala — Structural Engineering & Analysis Services",
      },
      {
        property: "og:description",
        content:
          "Expert structural engineering & analysis. Precise 2D/3D CAD drafting, FEA, and CFD solutions delivered on time, every time.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const SERVICES = [
  {
    icon: DraftingCompass,
    title: "Structural 2D & 3D Drafting",
    description:
      "Accurate 2D drawings and 3D models that translate design intent into fabrication-ready documentation.",
  },
  {
    icon: Boxes,
    title: "Finite Element Analysis (FEA)",
    description:
      "Stress, strain, and structural integrity analysis to validate performance before production.",
  },
  {
    icon: Wind,
    title: "Computational Fluid Dynamics (CFD)",
    description:
      "Flow, thermal, and pressure simulation that optimizes performance and de-risks design decisions.",
  },
  {
    icon: Building2,
    title: "Structural Steel Detailing",
    description:
      "Detailed steel connection drawings and BOMs engineered to international fabrication standards.",
  },
  {
    icon: Users,
    title: "Technical Manpower Sourcing",
    description:
      "Qualified engineering professionals placed on your project to extend your in-house capacity.",
  },
] as const;

const RELIABILITY_POINTS = [
  "Act as an extension of your in-house team",
  "Clear communication at every milestone",
  "Strict, non-negotiable deadlines",
] as const;

function Index() {
  return (
    <div className="bg-background">
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="hero-grid-overlay absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-leaf/40 bg-leaf-subtle px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf"></span>
              Structural Engineering & Analysis
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">
              Expert Structural Engineering & Analysis Services.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel">
              We support your product development with precise 2D/3D CAD
              drafting, FEA, and CFD solutions. Delivering accuracy on time,
              every time.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-navy text-white hover:bg-navy-deep shadow-md"
              >
                <Link to="/services">
                  View Our Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-navy text-navy hover:bg-navy hover:text-white"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-xl">
              <img
                src={heroImage}
                alt="3D CAD wireframe render of a steel structural framework"
                width={1024}
                height={1024}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Trust / Intro ===== */}
      <section className="border-b border-border bg-steel-surface">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Engineering Support You Can Rely On.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-steel">
              Outsourcing engineering work shouldn't be stressful. We act as an
              extension of your in-house team, handling technical execution
              with clear communication and strict deadlines.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
            {RELIABILITY_POINTS.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 rounded-lg border border-border bg-card p-5 shadow-sm"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-leaf" />
                <span className="text-sm font-medium text-foreground">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Services Grid ===== */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-leaf/40 bg-leaf-subtle px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf"></span>
              What We Do
            </span>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Engineering Services Built for Precision
            </h2>
            <p className="mt-4 text-base leading-relaxed text-steel">
              From drafting to simulation, we cover the technical execution so
              your team can focus on design and delivery.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              // Row 1: three cards (span 2 each). Row 2: two cards centered
              // by starting at columns 2 and 4 of the 6-col track.
              const placement =
                index < 3
                  ? "lg:col-span-2"
                  : index === 3
                    ? "lg:col-span-2 lg:col-start-2"
                    : "lg:col-span-2 lg:col-start-4";
              return (
                <article
                  key={service.title}
                  className={`group flex flex-col rounded-lg border border-border bg-card p-7 transition-colors hover:border-navy/40 ${placement}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-navy/10 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Bottom CTA ===== */}
      <section className="navy-gradient">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to optimize your engineering processes?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Let's discuss your project.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-white text-navy hover:bg-white/90"
            >
              <Link to="/contact">
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
