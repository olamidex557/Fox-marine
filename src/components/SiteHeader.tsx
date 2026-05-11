import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/fox-marine-logo.jpeg";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/fleet", label: "Equipment" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Fox Marine Nigeria Limited logo"
            className="h-12 w-12 rounded-md object-cover bg-white"
          />
          <div className="text-white">
            <div className="font-display text-lg leading-tight font-semibold">Fox Marine</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Nigeria Limited</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-4 py-2 text-sm font-medium text-white/80 hover:text-gold transition-colors"
              activeProps={{ className: "px-4 py-2 text-sm font-medium text-gold" }}
              activeOptions={{ exact: true }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 px-5 py-2.5 text-sm font-semibold rounded-md bg-gold text-deep-ocean hover:bg-gold-glow transition-colors"
          >
            Get a Quote
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute inset-x-0 top-full bg-deep-ocean/95 backdrop-blur-md border-t border-white/10">
          <nav className="flex flex-col p-6 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-white/80 hover:text-gold border-b border-white/5"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
