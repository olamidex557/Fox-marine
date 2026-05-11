import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Target, Eye, Heart, ShieldCheck, Leaf, CheckCircle2 } from "lucide-react";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Fox Marine Nigeria Limited" },
      {
        name: "description",
        content:
          "Niger Delta dredging and marine services company incorporated in 2009 (RC 504645).",
      },
      { property: "og:title", content: "About — Fox Marine Nigeria Limited" },
      {
        property: "og:description",
        content:
          "A professionally structured dredging and marine services company in the Niger Delta.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/about` },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        title="About Fox Marine"
        subtitle="A professionally structured dredging and marine services company, proudly Nigerian, operationally based in the Niger Delta."
      />

      {/* Introduction */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 space-y-6">
          <div className="text-[10px] uppercase tracking-[0.4em] text-accent">Introduction</div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Foxmarine Nigeria Limited is a professionally structured and forward-thinking dredging
            company specializing in comprehensive sand dredging services across marine and inland
            environments. The company is committed to delivering high-quality, efficient, and
            environmentally responsible dredging solutions tailored to meet the needs of both public
            and private sector clients.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With a strong operational base in the Niger Delta region of Nigeria, Fox Marine has
            built a reputation as a dependable, results-driven partner in dredging and marine
            engineering projects — integrating technical expertise, modern equipment, and a highly
            skilled workforce to execute projects of varying sizes and complexities.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Incorporated under the Companies and Allied Matters Act on 2nd March 2009 (RC 504645),
            Fox Marine continues to play a significant role in supporting infrastructure
            development, shoreline protection, land reclamation, and sustainable resource
            utilisation within Nigeria and beyond.
          </p>
        </div>
      </section>

      {/* Vision / Mission / Values */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Eye,
              t: "Our Vision",
              d: "To become a leading dredging company in Africa, recognized for innovation, operational excellence, and environmental responsibility.",
            },
            {
              icon: Target,
              t: "Our Mission",
              d: "Deliver reliable, cost-effective dredging solutions; uphold the highest safety and environmental standards; invest in advanced technology and skilled manpower; and build lasting partnerships through exceptional service.",
            },
            {
              icon: Heart,
              t: "Core Values",
              d: "Integrity · Safety · Excellence · Sustainability · Customer Satisfaction.",
            },
          ].map((v) => (
            <div key={v.t} className="bg-card border border-border rounded-lg p-8">
              <div className="h-12 w-12 rounded-md bg-accent/10 flex items-center justify-center">
                <v.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-6 text-2xl font-display font-semibold text-primary">{v.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HSE & Environment */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12">
          <div className="bg-card border border-border rounded-lg p-10">
            <ShieldCheck className="h-10 w-10 text-accent" />
            <h3 className="mt-5 text-2xl font-display font-semibold text-primary">
              Health, Safety & Environment
            </h3>
            <ul className="mt-5 space-y-3 text-muted-foreground">
              {[
                "Zero accident policy",
                "Regular safety drills and training",
                "Use of protective equipment",
                "Commitment to quality",
              ].map((i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-10">
            <Leaf className="h-10 w-10 text-accent" />
            <h3 className="mt-5 text-2xl font-display font-semibold text-primary">
              Environmental Responsibility
            </h3>
            <ul className="mt-5 space-y-3 text-muted-foreground">
              {[
                "Minimizing ecological disruption",
                "Preventing water pollution",
                "Restoring dredged environments",
                "Complying with environmental regulations",
              ].map((i) => (
                <li key={i} className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Previous Jobs */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="text-[10px] uppercase tracking-[0.4em] text-accent mb-4">
            Selected Track Record
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-10">
            Previous projects.
          </h2>
          <ol className="space-y-4">
            {[
              "Reclamation of land at Binikurukuru Community, Delta State",
              "Provision of tugboat for Swamp Asset operations",
              "Maintenance of community generator at Amabulu Community",
              "Supply of AGO for Swamp West Asset",
              "Wastewater treatment plant — design, manufacture, supply and installation for Mobil Producing Nigeria Limited at the Qua Iboe Terminal (QIT), Akwa Ibom",
            ].map((p, i) => (
              <li key={p} className="flex gap-4 bg-card border border-border rounded-md p-5">
                <span className="font-display text-2xl text-gold font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-muted-foreground">{p}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </SiteLayout>
  );
}
