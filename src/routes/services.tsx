import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { SITE_URL } from "@/lib/site";
import {
  Waves,
  Ship,
  Anchor,
  Truck,
  Package,
  Briefcase,
  Warehouse,
  Droplets,
  Wrench,
  Compass,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Fox Marine Nigeria Limited" },
      {
        name: "description",
        content:
          "Sand & river dredging, land reclamation, logistics, vessel hire, leasing, chandeling, consultancy, warehousing and wastewater treatment.",
      },
      { property: "og:title", content: "Services — Fox Marine Nigeria Limited" },
      {
        property: "og:description",
        content: "Full-service dredging and marine operations across the Niger Delta.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/services` },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/services` }],
  }),
  component: ServicesPage,
});

const dredging = [
  {
    icon: Waves,
    t: "Sand Dredging",
    d: "Extraction and supply of high-quality sharp sand and filling sand for construction, industrial use and land-filling projects.",
  },
  {
    icon: Ship,
    t: "River Dredging",
    d: "Deepening and widening of waterways to enhance navigation and reduce flooding risks.",
  },
  {
    icon: Anchor,
    t: "Land Reclamation",
    d: "Provision of dredged materials for land development, urban expansion and shoreline protection.",
  },
  {
    icon: Compass,
    t: "Channel Maintenance",
    d: "Regular dredging to ensure navigable waterways for marine transportation.",
  },
];

const marine = [
  {
    icon: Truck,
    t: "Logistics",
    d: "Transport of goods and equipment to offshore platforms, vessels and coastal facilities.",
  },
  {
    icon: Package,
    t: "Procurement",
    d: "Sourcing and supply of marine equipment, spare parts, pumps, valves, vents and fittings.",
  },
  {
    icon: Ship,
    t: "Vessel Hire",
    d: "A diverse fleet for charter — crew boats, cargo ships and tankers — for business or recreation.",
  },
  {
    icon: Wrench,
    t: "Equipment Leasing",
    d: "Short and long-term lease of cranes, forklifts, excavators and marine equipment, with financing options.",
  },
  {
    icon: Anchor,
    t: "Chandeling",
    d: "Supply of provisions, stores and equipment to vessels and offshore platforms.",
  },
  {
    icon: Briefcase,
    t: "Consultancy",
    d: "Architectural and engineering consultancy, real estate, oil & gas services and energy solutions.",
  },
  {
    icon: Warehouse,
    t: "Warehousing",
    d: "Secure storage for equipment, spare parts and essentials — available on demand to your project sites.",
  },
  {
    icon: Droplets,
    t: "Wastewater Treatment",
    d: "Design, engineering, manufacture, supply and installation of wastewater treatment plants.",
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Our Services"
        subtitle="A full spectrum of dredging and marine support services — engineered for Nigeria's most demanding operations."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-[10px] uppercase tracking-[0.4em] text-accent mb-3">
            Core Dredging
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-10">
            Dredging Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dredging.map((s) => (
              <div
                key={s.t}
                className="group bg-card border border-border rounded-lg p-7 hover:border-accent transition-all"
              >
                <div className="h-12 w-12 rounded-md bg-primary text-white group-hover:bg-accent group-hover:text-deep-ocean flex items-center justify-center transition-colors">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-display font-semibold text-primary">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="text-[10px] uppercase tracking-[0.4em] text-accent mb-3">
            Marine Support
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-10">
            Marine & Allied Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marine.map((s) => (
              <div
                key={s.t}
                className="group bg-card border border-border rounded-lg p-7 hover:border-accent transition-all"
              >
                <div className="h-12 w-12 rounded-md bg-primary text-white group-hover:bg-accent group-hover:text-deep-ocean flex items-center justify-center transition-colors">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-display font-semibold text-primary">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <div className="text-[10px] uppercase tracking-[0.4em] text-accent mb-3">How We Work</div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-primary mb-10">
            Project Execution Methodology
          </h2>
          <ol className="space-y-3">
            {[
              "Site assessment and feasibility study",
              "Environmental impact evaluation",
              "Mobilization of equipment and workforce",
              "Dredging and material handling",
              "Monitoring and quality control",
              "Project completion and reporting",
            ].map((step, i) => (
              <li
                key={step}
                className="flex gap-4 items-center bg-card border border-border rounded-md p-4"
              >
                <span className="h-9 w-9 flex-shrink-0 rounded-full bg-gold text-deep-ocean font-semibold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </SiteLayout>
  );
}
