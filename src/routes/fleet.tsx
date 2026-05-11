import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Wrench, Cog, Ship, Anchor, Droplet, GitBranch } from "lucide-react";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "Equipment & Fleet — Fox Marine Nigeria Limited" },
      {
        name: "description",
        content:
          "Cutter suction dredgers, excavator-mounted dredgers, barges, tugboats, hydraulic pumps and floating pipelines.",
      },
      { property: "og:title", content: "Equipment & Fleet — Fox Marine Nigeria Limited" },
      {
        property: "og:description",
        content: "Modern, well-maintained dredging equipment and marine craft.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/fleet` },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/fleet` }],
  }),
  component: FleetPage,
});

const equipment = [
  {
    icon: Cog,
    name: "Cutter Suction Dredgers",
    spec: "Precision dredging in compact soil — simultaneous cut and suction for efficiency and accuracy.",
  },
  {
    icon: Wrench,
    name: "Excavator-Mounted Dredgers",
    spec: "Ideal for shallow water and near-shore operations — flexible control in confined or sensitive environments.",
  },
  {
    icon: Droplet,
    name: "Hydraulic Pumps",
    spec: "High-capacity pumps engineered for sustained dredging output.",
  },
  {
    icon: GitBranch,
    name: "Floating Pipelines",
    spec: "Modular floating discharge lines for long-haul material transport.",
  },
  {
    icon: Ship,
    name: "Barges",
    spec: "Cargo and material barges for marine logistics and dredged-material handling.",
  },
  {
    icon: Anchor,
    name: "Tugboats",
    spec: "Tow and assist craft for swamp and coastal operations.",
  },
];

function FleetPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Equipment & Fleet"
        subtitle="Modern, well-maintained dredging equipment and marine craft — continuously upgraded for efficiency, safety and environmental compliance."
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipment.map((f) => (
            <article
              key={f.name}
              className="group rounded-lg bg-card border border-border p-7 hover:border-accent transition-colors"
            >
              <div className="h-12 w-12 rounded-md bg-primary text-white group-hover:bg-accent group-hover:text-deep-ocean flex items-center justify-center transition-colors">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-display font-semibold text-primary">{f.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.spec}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary">
            Skilled professionals behind every project.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Our team includes marine engineers, dredging operators, technicians and project managers
            — supported by continuous training in modern dredging practices.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
