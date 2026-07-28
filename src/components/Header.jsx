import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Monogram from "./Monogram.jsx";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Collections", to: "/collections" },
  { label: "Our Craft", to: "/craft" },
  { label: "Process", to: "/process" },
  { label: "Visit", to: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-ink/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2.5 group">
          <Monogram size={30} />
          <span className="font-display text-lg tracking-wide text-cream group-hover:text-brassSoft transition-colors">
            AfriPashion
          </span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `font-mono text-xs uppercase tracking-widest transition-all duration-300 relative ${
                  isActive
                    ? "text-brassSoft"
                    : "text-stone hover:text-cream"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="navIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-brassSoft"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <a
          href="tel:+233504000344"
          className="hidden md:inline-block font-mono text-xs uppercase tracking-widest px-5 py-2.5 rounded-full bg-brass text-ink hover:bg-brassSoft transition-all duration-300 btn-glow"
        >
          +233 (0) 504 000 344
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 relative z-50"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 5.5, width: 24 } : { rotate: 0, y: 0, width: 24 }}
            className="w-6 h-px bg-cream block origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
            className="w-6 h-px bg-cream block"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -5.5, width: 24 } : { rotate: 0, y: 0, width: 24 }}
            className="w-6 h-px bg-cream block origin-center"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden overflow-hidden glass border-t border-brass/20"
          >
            <div className="px-5 py-6 flex flex-col gap-2">
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `font-mono text-sm uppercase tracking-widest py-3 block transition-colors ${
                        isActive ? "text-brassSoft" : "text-stone hover:text-cream"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mt-4"
              >
                <a
                  href="tel:+233504000344"
                  className="font-mono text-xs uppercase tracking-widest px-5 py-3 rounded-full bg-brass text-ink text-center block hover:bg-brassSoft transition-colors"
                >
                  Call the atelier
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}