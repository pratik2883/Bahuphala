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

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Bahuphala Ventures" },
      {
        name: "description",
        content:
          "Bahuphala Ventures services: Structural 2D/3D Drafting, FEA, CFD, Steel Detailing, and Technical Manpower Sourcing — precise engineering execution, delivered on time.",
      },
      { property: "og:title", content: "Services — Bahuphala Ventures" },
      {
        property: "og:description",
        content:
          "Structural 2D/3D Drafting, FEA, CFD, Steel Detailing, and Technical Manpower Sourcing.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: DraftingCompass,
    title: "Structural 2D & 3D CAD Drafting",
    overview:
      "Converting concepts, sketches, or legacy data into accurate 2D manufacturing drawings and precise 3D parametric models tailored to strict regional and industry standards.",
    tools: ["AutoCAD", "SolidWorks", "Tekla Structures", "Autodesk Inventor"],
    deliverables: [
      "Fabrication Drawings",
      "Detailed Assembly Drawings",
      "Bill of Materials (BOM)",
      "3D Renderings",
    ],
  },
  {
    icon: Boxes,
    title: "Finite Element Analysis (FEA)",
    overview:
      "Rigorous computational testing to validate designs before physical prototyping. We identify potential structural failures, stress concentrations, and fatigue limits to optimize product lifespan and safety.",
    tools: ["ANSYS", "Abaqus", "HyperMesh"],
    deliverables: [
      "Stress/Strain Distribution Reports",
      "Fatigue Life Estimation",
      "Structural Optimization Recommendations",
    ],
  },
  {
    icon: Wind,
    title: "Computational Fluid Dynamics (CFD)",
    overview:
      "Advanced numerical analysis of fluid flow, heat transfer, and aerodynamic behavior. We provide actionable data to resolve thermal bottlenecks and improve fluid dynamics efficiency.",
    tools: ["ANSYS Fluent", "OpenFOAM", "CFX"],
    deliverables: [
      "Flow Trajectory Mapping",
      "Thermal Analysis Reports",
      "Pressure Drop Evaluations",
    ],
  },
  {
    icon: Building2,
    title: "Structural Steel Detailing",
    overview:
      "Comprehensive detailing for commercial and industrial structures. We ensure absolute accuracy in fabrication and erection drawings to facilitate seamless site assembly and eliminate material rework.",
    tools: ["Tekla Structures", "SDS/2", "Advance Steel"],
    deliverables: [
      "Erection Drawings",
      "Shop/Fabrication Drawings",
      "CNC Data Files",
      "Anchor Bolt Plans",
    ],
  },
  {
    icon: Users,
    title: "Technical Manpower Sourcing",
    overview:
      "Scalable engineering talent solutions to bridge your in-house resource gaps. We provide pre-vetted, highly skilled professionals who integrate directly into your workflows.",
    tools: [
      "CAD Draftsmen",
      "CAE/FEA Analysts",
      "Structural Design Engineers",
      "Project Managers",
    ],
    deliverables: [
      "Flexible deployment — remote or on-site",
      "Short-term project-based or long-term contracts",
    ],
  },
] as const;

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Scope & Requirements",
    description:
      "We review your inputs, standards, and milestones, then agree on a documented scope, deliverables list, and timeline.",
  },
  {
    step: "02",
    title: "Execution & Reviews",
    description:
      "Work proceeds with structured check-ins at agreed milestones, so there are no surprises at handover.",
  },
  {
    step: "03",
    title: "Quality Check",
    description:
      "Every deliverable passes an internal review against your standards before it is released to you.",
  },
  {
    step: "04",
    title: "Delivery & Support",
    description:
      "Documented handover with native files, plus revision support to close out comments cleanly.",
  },
] as const;

function ServicesPage() {
  return (
    <div className="bg-background">
      {/* ===== Page Hero ===== */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="hero-grid-overlay absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-leaf/40 bg-leaf-subtle px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
            <span className="h-1.5 w-1.5 rounded-full bg-leaf"></span>
            Our Services
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl">
            Engineering Services Built for Precision.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel">
            From drafting to simulation, we cover the technical execution so
            your team can focus on design and delivery — with accuracy on time,
            every time.
          </p>
        </div>
      </section>

      {/* ===== Service Details ===== */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              const isLastOdd =
                SERVICES.length % 2 === 1 && index === SERVICES.length - 1;
              return (
                <article
                  key={service.title}
                  className={`flex flex-col rounded-lg border border-border bg-card p-8 transition-colors hover:border-navy/40 lg:p-10 ${
                    isLastOdd ? "md:col-span-2 md:mx-auto md:max-w-2xl" : ""
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-navy/10 text-navy">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 font-display text-xl font-semibold tracking-tight text-navy">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-steel">
                    {service.overview}
                  </p>
                  <div className="mt-6 border-t border-border pt-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy">
                      {index === SERVICES.length - 1
                        ? "Roles Provided"
                        : "Tools & Expertise"}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {service.tools.map((tool) => (
                        <li
                          key={tool}
                          className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground"
                        >
                          {tool}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 border-t border-border pt-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy">
                      {index === SERVICES.length - 1
                        ? "Engagement Model"
                        : "Key Deliverables"}
                    </p>
                    <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-foreground"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-leaf" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Process ===== */}
      <section className="border-b border-border bg-steel-surface">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-navy/20 bg-navy/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-navy">
              Our Process
            </span>
            <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              A Structured Path from Scope to Handover
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((item) => (
              <div
                key={item.step}
                className="flex flex-col rounded-lg border border-border bg-card p-6"
              >
                <span className="font-display text-3xl font-bold text-navy/20">
                  {item.step}
                </span>
                <h3 className="mt-4 font-display text-base font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
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
