import { Link } from "react-router-dom";
import Monogram from "./Monogram.jsx";

const footerLinks = [
  { label: "Collections", to: "/collections" },
  { label: "Our Craft", to: "/craft" },
  { label: "Process", to: "/process" },
  { label: "Visit Us", to: "/contact" },
];

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 px-6 sm:px-8 bg-ink border-t border-brass/15">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Monogram size={28} />
              <span className="font-display text-base text-cream">AfriPashion Ltd</span>
            </div>
            <p className="text-sm text-stone/60 leading-relaxed max-w-xs">
              Bespoke tailoring, handcrafted in Tamale. A style for every story since 2012.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-brassSoft mb-4">Navigate</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((fl) => (
                <li key={fl.label}>
                  <Link
                    to={fl.to}
                    className="text-sm text-stone/70 hover:text-cream transition-colors"
                  >
                    {fl.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-brassSoft mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="tel:+233504000344" className="text-sm text-stone/70 hover:text-cream transition-colors">
                  +233 (0) 504 000 344
                </a>
              </li>
              <li>
                <a href="mailto:afripashion@gmail.com" className="text-sm text-stone/70 hover:text-cream transition-colors break-all">
                  afripashion@gmail.com
                </a>
              </li>
              <li className="text-sm text-stone/50">
                Choggu Yelpasi, Tamale
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-brassSoft mb-4">Hours</h4>
            <ul className="space-y-2.5">
              <li className="text-sm text-stone/70">Mon–Fri: 9AM – 5PM</li>
              <li className="text-sm text-stone/70">Sat: 10AM – 3PM</li>
              <li className="text-sm text-stone/50">Sun: Closed</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-brass/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[11px] text-stone/50">
            © {new Date().getFullYear()} AfriPashion Ltd, Tamale. All rights reserved.
          </span>
          <span className="font-mono text-[11px] uppercase tracking-widest text-stone/40">
            A style for every story
          </span>
        </div>
      </div>
    </footer>
  );
}