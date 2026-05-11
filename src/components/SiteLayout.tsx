import { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="relative pt-40 pb-20 bg-deep-ocean text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_50%,oklch(0.74_0.14_70/0.4),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Fox Marine</div>
        <h1 className="text-4xl md:text-6xl font-display font-semibold">{title}</h1>
        {subtitle && <p className="mt-5 text-lg text-white/70 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
