import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import StitchLine from "../components/StitchLine.jsx";
import AnimatedSection from "../components/AnimatedSection.jsx";
import { GarmentImage, FASHION_IMAGES } from "../components/GarmentArt.jsx";

const stats = [
  { label: "Years of Craft", value: "12+" },
  { label: "Garments Made", value: "2,400+" },
  { label: "Happy Clients", value: "1,800+" },
  { label: "Master Tailors", value: "8" },
];

const testimonials = [
  {
    quote: "The kaftan AfriPashion made for my wedding was absolutely stunning. The craftsmanship is unmatched.",
    author: "Aisha M.",
    role: "Bride, Tamale",
  },
  {
    quote: "I've never had a jacket fit so perfectly. The consultation process made all the difference.",
    author: "Kwame A.",
    role: "Business Executive, Accra",
  },
  {
    quote: "Three generations of my family now wear AfriPashion. That says everything about their quality.",
    author: "Hajia F.",
    role: "Long-time Client, Kumasi",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 bg-ink">
          <div className="absolute inset-0">
            <img
              src={FASHION_IMAGES.collectionHero}
              alt="Elegant fashion"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-ink/80" />
          </div>
        </div>

        <div className="relative w-full grid md:grid-cols-2 min-h-screen">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-20 md:py-0 order-2 md:order-1"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-mono text-xs uppercase tracking-[0.25em] mb-5 text-brassSoft"
            >
              AfriPashion Ltd — Bespoke Tailoring
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-4xl sm:text-5xl lg:text-7xl leading-[1.05] mb-6 text-cream"
            >
              A style for
              <br />
              <span className="text-gradient-gold">every story.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg max-w-md mb-8 text-stone/80 leading-relaxed"
            >
              Bespoke kaftans and mandarin-collar jackets, measured, cut and
              hand-finished in our Tamale atelier — tailored to the story
              you're telling next.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="tel:+233504000344"
                className="font-mono text-xs uppercase tracking-widest px-7 py-3.5 rounded-full bg-brass text-ink hover:bg-brassSoft transition-all duration-300 btn-glow"
              >
                Book a fitting
              </a>
              <Link
                to="/collections"
                className="font-mono text-xs uppercase tracking-widest px-7 py-3.5 rounded-full border border-cream/30 text-cream hover:bg-cream/10 transition-all duration-300"
              >
                View collections
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <StitchLine opacity={0.3} />
            </motion.div>
          </motion.div>

          {/* Right: Visual panel with real image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative overflow-hidden order-1 md:order-2 min-h-[50vh] md:min-h-screen"
          >
            <img
              src={FASHION_IMAGES.kaftan}
              alt="Elegant kaftan fashion"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute bottom-6 left-6 font-mono text-[11px] uppercase tracking-widest text-cream/80"
            >
              <span className="pulse-dot inline-block mr-2 align-middle" />
              Choggu Yelpasi · Tamale
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedSection className="py-16 px-6 sm:px-8 bg-ink border-t border-brass/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="font-display text-3xl sm:text-4xl text-brassSoft mb-1 counter-number">
                  {s.value}
                </div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-stone/60">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Images Strip */}
      <AnimatedSection className="py-0 bg-ink">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[FASHION_IMAGES.kaftan, FASHION_IMAGES.jacket, FASHION_IMAGES.fabric, FASHION_IMAGES.atelier].map(
            (img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative aspect-[3/4] overflow-hidden"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-ink/20 hover:bg-ink/10 transition-colors" />
              </motion.div>
            )
          )}
        </div>
      </AnimatedSection>

      {/* Quick teaser strip */}
      <AnimatedSection className="py-20 px-6 sm:px-8 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-wine">Explore</span>
            <h2 className="font-display text-2xl sm:text-3xl mt-2 text-ink">What we offer</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { t: "Collections", d: "The kaftan and the mandarin jacket, side by side.", to: "/collections", icon: "✦" },
              { t: "Our Craft", d: "Why every garment starts as a conversation.", to: "/craft", icon: "◈" },
              { t: "Process", d: "From first measurement to final press.", to: "/process", icon: "◇" },
            ].map((c, i) => (
              <motion.div
                key={c.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link
                  to={c.to}
                  className="block group p-8 rounded-2xl bg-white/50 hover:bg-white transition-all duration-300 card-elevate border border-ink/5"
                >
                  <div className="text-2xl mb-4 text-brass">{c.icon}</div>
                  <div className="font-display text-xl mb-2 text-ink group-hover:text-wine transition-colors">
                    {c.t}
                  </div>
                  <p className="text-sm text-wineDeep/70">{c.d}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials with background */}
      <AnimatedSection className="relative py-20 px-6 sm:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={FASHION_IMAGES.fabric}
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-inkSoft" />
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-brassSoft">Testimonials</span>
            <h2 className="font-display text-2xl sm:text-3xl mt-2 text-cream">What our clients say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl bg-ink/60 backdrop-blur-sm border border-brass/10"
              >
                <div className="text-brass text-lg mb-4">"</div>
                <p className="text-sm text-cream/80 leading-relaxed mb-6">{t.quote}</p>
                <div>
                  <div className="font-display text-sm text-brassSoft">{t.author}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-cream/40">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}