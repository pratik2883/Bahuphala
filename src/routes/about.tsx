import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Target,
  Eye,
  ShieldCheck,
  Clock,
  MessagesSquare,
  FileCheck,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Bahuphala" },
      {
        name: "description",
        content:
          "Bahuphala is an engineering extension team based in Pune & Nashik, Maharashtra — precise CAD drafting, FEA, and CFD with clear communication and strict deadlines.",
      },
      { property: "og:title", content: "About Us — Bahuphala" },
      {
        property: "og:description",
        content:
          "An engineering extension team delivering precise CAD drafting, FEA, and CFD with clear communication and strict deadlines.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Accuracy First",
    description:
      "Every drawing, model, and simulation is checked against engineering standards before it reaches your desk.",
  },
  {
    icon: Clock,
    title: "Deadlines Are Non-Negotiable",
    description:
      "We plan delivery schedules around your program milestones — and we hold to them.",
  },
  {
    icon: MessagesSquare,
    title: "Clear Communication",
    description:
      "Structured updates at every stage. You always know what is done, what is next, and what needs your input.",
  },
  {
    icon: FileCheck,
    title: "Fabrication-Ready Output",
    description:
      "Documentation that downstream teams can build from without rework, RFIs, or guesswork.",
  },
] as const;

const CAPABILITIES = [
  "Structural 2D & 3D CAD drafting",
  "Finite Element Analysis (FEA)",
  "Computational Fluid Dynamics (CFD)",
  "Structural steel detailing & BOMs",
  "Connection design documentation",
  "Technical manpower sourcing",
] as const;

function AboutPage() {
  return (
    <div className="bg-background">
      {/* ===== Page Hero ===== */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="hero-grid-overlay absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <span className="inline-flex items-center rounded-full border border-navy/20 bg-navy/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-navy">
            About Bahuphala
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl">
            An Engineering Extension Team You Can Build On.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel">
            Bahuphala supports product development and structural programs with
            precise CAD drafting, FEA, and CFD solutions — acting as a seamless
            extension of your in-house engineering team.
          </p>
        </div>
      </section>

      {/* ===== Mission / Vision ===== */}
      <section className="border-b border-border bg-steel-surface">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-20">
          <div className="rounded-lg border border-border bg-card p-8 lg:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-navy/10 text-navy">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold tracking-tight text-navy">
              Our Mission
            </h2>
            <p className="mt-3 text-base leading-relaxed text-steel">
              To make outsourced engineering execution feel like in-house work:
              accurate deliverables, transparent communication, and deadlines
              that hold — so our clients can scale their technical capacity
              without scaling their overhead.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-8 lg:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-navy/10 text-navy">
              <Eye className="h-6 w-6" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold tracking-tight text-navy">
              Our Vision
            </h2>
            <p className="mt-3 text-base leading-relaxed text-steel">
              To become the trusted engineering partner behind the products and
              structures our clients are proud to put their name on — known for
              precision, reliability, and professionalism in every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* ===== How We Work / Values ===== */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-navy/20 bg-navy/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-navy">
              How We Work
            </span>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Principles Behind Every Deliverable
            </h2>
            <p className="mt-4 text-base leading-relaxed text-steel">
              Outsourcing engineering work shouldn't be stressful. These are
              the standards we apply to every project, regardless of size.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="flex flex-col rounded-lg border border-border bg-card p-6 transition-colors hover:border-navy/40"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-navy/10 text-navy">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold text-navy">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Capabilities + Locations ===== */}
      <section className="bg-steel-surface">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Core Capabilities
            </h2>
            <p className="mt-4 text-base leading-relaxed text-steel">
              From drafting through simulation and detailing, our team covers
              the technical execution across the full engineering workflow.
            </p>
            <ul className="mt-8 grid gap-3">
              {CAPABILITIES.map((capability) => (
                <li
                  key={capability}
                  className="flex items-center gap-3 rounded-md border border-border bg-card px-4 py-3"
                >
                  <FileCheck className="h-4 w-4 shrink-0 text-navy" />
                  <span className="text-sm font-medium text-foreground">
                    {capability}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center rounded-lg border border-border bg-card p-8 lg:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-navy/10 text-navy">
              <MapPin className="h-6 w-6" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-bold tracking-tight text-navy">
              Based in Maharashtra, Working Worldwide
            </h2>
            <p className="mt-3 text-base leading-relaxed text-steel">
              With teams in Pune and Nashik, we serve engineering firms, OEMs,
              and fabricators across India and international markets. Our
              delivery model is built for remote collaboration — structured
              kickoffs, milestone reviews, and documented handover.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-navy/20 bg-navy/5 px-3 py-1 text-xs font-medium text-navy">
                Pune, Maharashtra
              </span>
              <span className="rounded-full border border-navy/20 bg-navy/5 px-3 py-1 text-xs font-medium text-navy">
                Nashik, Maharashtra
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="navy-gradient">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to work with a team you can rely on?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Tell us about your project and we'll respond with a clear plan and
            timeline.
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
