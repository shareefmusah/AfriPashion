import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection.jsx";
import { FASHION_IMAGES } from "../components/GarmentArt.jsx";

const steps = [
  { n: "01", t: "Consultation", d: "We talk through the occasion, the fit, and the story the piece needs to carry." },
  { n: "02", t: "Fabric Selection", d: "Cotton, brocade or velvet — chosen for the season and the silhouette." },
  { n: "03", t: "Cut & Stitch", d: "Hand-measured, hand-cut, and stitched in-house at Choggu Yelpasi." },
  { n: "04", t: "Fitting & Finish", d: "A final fitting, small adjustments, and the last press before it's yours." },
];

const connDetails = [
  { label: "Duration", value: "10–14 days" },
  { label: "Fittings", value: "2–3 sessions" },
  { label: "Location", value: "Choggu Yelpasi, Tamale" },
];

export default function Process() {
  return (
    <section className="pt-28 sm:pt-32 pb-28 px-6 sm:px-8 bg-stone min-h-screen">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection variant="fadeLeft">
          <span className="font-mono text-xs uppercase tracking-widest text-wine">How a garment is made</span>
          <h1 className="font-display text-3xl sm:text-4xl mt-3 mb-6 max-w-xl text-ink">
            From measure to finish.
          </h1>
          <p className="text-wineDeep/70 max-w-lg mb-16">
            Every piece follows the same careful path — from first conversation to final fitting.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[calc(100%+8px)] w-[calc(100%-32px)] h-px bg-brass/30" />
              )}

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-12 h-12 rounded-full flex items-center justify-center mb-5 border-2 border-wine text-wine font-mono text-sm font-bold"
              >
                {s.n}
              </motion.div>
              <h2 className="font-display text-xl mb-2 text-ink">{s.t}</h2>
              <p className="text-sm text-wineDeep/70 leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <AnimatedSection variant="fadeUp">
            <div className="p-8 sm:p-10 rounded-2xl bg-ink text-cream">
              <h3 className="font-display text-xl mb-6">What to expect</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                {connDetails.map((cd) => (
                  <div key={cd.label}>
                    <div className="font-mono text-[11px] uppercase tracking-widest text-brassSoft mb-1">{cd.label}</div>
                    <div className="font-display text-lg text-cream">{cd.value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 h-px bg-gradient-to-r from-brass/30 via-brass/10 to-transparent" />
              <p className="mt-6 text-sm text-stone/70 leading-relaxed">
                All measurements, consultations and fittings take place at our fashion home in Choggu Yelpasi.
                Walk-ins welcome between 9am and 5pm, Monday through Saturday.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="scaleIn" delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={FASHION_IMAGES.fabric}
                alt="Fabric selection at our atelier"
                className="w-full h-72 sm:h-80 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-ink/10" />
              <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-widest text-cream/90 bg-ink/70 px-3 py-1.5 rounded-full backdrop-blur-sm">
                Premium fabrics sourced globally
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}