import { Link } from "@tanstack/react-router";
import {
  Anchor,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  User,
} from "lucide-react";
import logo from "@/assets/fox-marine-logo.jpeg";

export function SiteFooter() {
  return (
    <footer className="bg-deep-ocean text-white relative overflow-hidden">
      {/* decorative gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-semibold">
              Ready to set sail with us?
            </h3>
            <p className="mt-2 text-white/70">
              Dredging, marine support and integrated logistics across the Niger Delta.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-md bg-gold text-deep-ocean font-semibold hover:bg-gold-glow transition-colors"
          >
            Request a Quote
          </Link>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Fox Marine Nigeria Limited logo"
              className="h-12 w-12 rounded-md object-cover bg-white"
            />
            <div>
              <div className="font-display text-lg font-semibold">Fox Marine</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
                Nigeria Limited
              </div>
            </div>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">
            A Niger Delta–based dredging and marine services company. Incorporated 2009 · RC 504645.
          </p>
          <div className="flex gap-3">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 flex items-center justify-center rounded-full border border-white/15 hover:bg-gold hover:text-deep-ocean hover:border-gold transition-colors"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-display text-base font-semibold mb-5 text-gold">Explore</h4>
          <ul className="space-y-3 text-sm text-white/70">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/fleet", label: "Equipment" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-base font-semibold mb-5 text-gold">Services</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2">
              <Anchor className="h-4 w-4 mt-0.5 text-gold" /> Sand Dredging
            </li>
            <li className="flex gap-2">
              <Anchor className="h-4 w-4 mt-0.5 text-gold" /> Land Reclamation
            </li>
            <li className="flex gap-2">
              <Anchor className="h-4 w-4 mt-0.5 text-gold" /> Vessel Hire & Leasing
            </li>
            <li className="flex gap-2">
              <Anchor className="h-4 w-4 mt-0.5 text-gold" /> Logistics & Procurement
            </li>
            <li className="flex gap-2">
              <Anchor className="h-4 w-4 mt-0.5 text-gold" /> Wastewater Treatment
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-base font-semibold mb-5 text-gold">Contact</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex gap-3">
              <User className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" />
              <span>
                Doubra Tufa <span className="block text-xs text-white/50">Contact Person</span>
              </span>
            </li>
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" />
              <span>No 4 Magbaja Street, Off Aka Avenue, Warri, Delta State, Nigeria</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" />
              <a href="tel:+2348032833693" className="hover:text-gold">
                0803 283 3693
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-gold flex-shrink-0" />
              <a href="mailto:pauldoubra@yahoo.com" className="hover:text-gold">
                pauldoubra@yahoo.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Fox Marine Nigeria Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
