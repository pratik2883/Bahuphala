import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Bahuphala" },
      {
        name: "description",
        content:
          "Contact Bahuphala for structural engineering, CAD drafting, FEA, and CFD services. Email skd@bahuphala.com or call +91 97561 31050. Pune & Nashik, Maharashtra.",
      },
      { property: "og:title", content: "Contact Us — Bahuphala" },
      {
        property: "og:description",
        content:
          "Contact Bahuphala for structural engineering, CAD drafting, FEA, and CFD services.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const SERVICE_OPTIONS = [
  "Structural 2D & 3D Drafting",
  "Finite Element Analysis (FEA)",
  "Computational Fluid Dynamics (CFD)",
  "Structural Steel Detailing",
  "Technical Manpower Sourcing",
  "Other / Not Sure Yet",
] as const;

const CONTACT_METHODS = [
  {
    icon: Mail,
    label: "Email",
    value: "skd@bahuphala.com",
    href: "mailto:skd@bahuphala.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 97561 31050",
    href: "tel:+919756131050",
  },
  {
    icon: MapPin,
    label: "Locations",
    value: "Pune & Nashik, Maharashtra",
    href: undefined,
  },
] as const;

const inputClass =
  "w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const service = String(data.get("service") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(
      `Project Inquiry — ${service} (${name}${company ? `, ${company}` : ""})`,
    );
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`,
    );
    window.location.href = `mailto:skd@bahuphala.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <div className="bg-background">
      {/* ===== Page Hero ===== */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="hero-grid-overlay absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <span className="inline-flex items-center rounded-full border border-navy/20 bg-navy/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-navy">
            Contact Us
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl">
            Let's Discuss Your Project.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-steel">
            Tell us what you're working on and we'll respond with a clear
            scope, plan, and timeline — typically within one business day.
          </p>
        </div>
      </section>

      {/* ===== Contact Grid ===== */}
      <section className="bg-steel-surface">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:gap-16 lg:px-8 lg:py-20">
          {/* Contact methods */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold tracking-tight text-navy">
              Get in Touch
            </h2>
            <p className="mt-3 text-base leading-relaxed text-steel">
              Reach us directly, or send the form and we'll get back to you.
            </p>

            <div className="mt-8 grid gap-4">
              {CONTACT_METHODS.map((method) => {
                const Icon = method.icon;
                const content = (
                  <>
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy/10 text-navy">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">
                        {method.label}
                      </p>
                      <p className="mt-0.5 text-sm text-steel">
                        {method.value}
                      </p>
                    </div>
                  </>
                );
                return method.href ? (
                  <a
                    key={method.label}
                    href={method.href}
                    className="flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-navy/40"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={method.label}
                    className="flex items-center gap-4 rounded-lg border border-border bg-card p-5"
                  >
                    {content}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-lg border border-border bg-card p-6">
              <h3 className="font-display text-base font-semibold text-navy">
                What to Include in Your Inquiry
              </h3>
              <ul className="mt-4 space-y-2.5">
                {[
                  "Project scope and key deliverables",
                  "Applicable standards or templates",
                  "Target timeline and milestones",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-foreground"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Inquiry form */}
          <div className="lg:col-span-3">
            <div className="rounded-lg border border-border bg-card p-8 lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy/10 text-navy">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h2 className="mt-6 font-display text-2xl font-bold tracking-tight text-navy">
                    Your Email Draft Is Ready
                  </h2>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-steel">
                    We've opened your email client with the inquiry pre-filled
                    to <span className="font-medium text-navy">skd@bahuphala.com</span>.
                    Just hit send and we'll respond within one business day.
                  </p>
                  <Button
                    size="lg"
                    variant="outline"
                    className="mt-8 border-navy text-navy hover:bg-navy hover:text-white"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Inquiry
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-navy">
                    Request a Quote
                  </h2>
                  <p className="mt-2 text-sm text-steel">
                    Fields marked * are required.
                  </p>
                  <form onSubmit={handleSubmit} className="mt-8 grid gap-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-1.5 block text-sm font-medium text-navy"
                        >
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Your name"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-1.5 block text-sm font-medium text-navy"
                        >
                          Work Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@company.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="company"
                          className="mb-1.5 block text-sm font-medium text-navy"
                        >
                          Company
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Company name"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="service"
                          className="mb-1.5 block text-sm font-medium text-navy"
                        >
                          Service Required *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          defaultValue=""
                          className={inputClass}
                        >
                          <option value="" disabled>
                            Select a service
                          </option>
                          {SERVICE_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-sm font-medium text-navy"
                      >
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Describe your project scope, standards, and timeline..."
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <Button
                        type="submit"
                        size="lg"
                        className="bg-navy text-white hover:bg-navy-deep"
                      >
                        Send Inquiry
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
