import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { Mail, Phone, MapPin, User } from "lucide-react";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Fox Marine Nigeria Limited" },
      {
        name: "description",
        content:
          "Get in touch with Fox Marine Nigeria Limited for marine services, quotes and partnerships.",
      },
      { property: "og:title", content: "Contact — Fox Marine Nigeria Limited" },
      {
        property: "og:description",
        content: "Reach our team in Warri, Delta State for project enquiries.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/contact` },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        title="Get in Touch"
        subtitle="We'd love to hear about your next project. Send us a message and our team will respond promptly."
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            {[
              { icon: User, t: "Contact Person", d: "Doubra Tufa" },
              {
                icon: MapPin,
                t: "Head Office",
                d: "No 4 Magbaja Street, Off Aka Avenue, Warri, Delta State, Nigeria",
              },
              { icon: Phone, t: "Phone", d: "0803 283 3693" },
              { icon: Mail, t: "Email", d: "pauldoubra@yahoo.com" },
            ].map((c) => (
              <div key={c.t} className="flex gap-5">
                <div className="h-12 w-12 rounded-md bg-primary text-white flex items-center justify-center flex-shrink-0">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-lg font-semibold text-primary">{c.t}</div>
                  <div className="text-muted-foreground">{c.d}</div>
                </div>
              </div>
            ))}
          </div>

          <form
            className="bg-card border border-border rounded-lg p-8 space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                className="w-full px-4 py-3 rounded-md border border-input bg-background text-sm"
                placeholder="Full Name"
              />
              <input
                className="w-full px-4 py-3 rounded-md border border-input bg-background text-sm"
                placeholder="Email"
                type="email"
              />
            </div>
            <input
              className="w-full px-4 py-3 rounded-md border border-input bg-background text-sm"
              placeholder="Subject"
            />
            <textarea
              rows={6}
              className="w-full px-4 py-3 rounded-md border border-input bg-background text-sm"
              placeholder="Tell us about your project..."
            />
            <button
              type="submit"
              className="w-full px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-ocean transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
