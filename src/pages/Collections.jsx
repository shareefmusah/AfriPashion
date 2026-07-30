import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection.jsx";
import { FASHION_IMAGES } from "../components/GarmentArt.jsx";
import { Link } from "react-router-dom";

export default function Collections() {
  return (
    <section className="pt-28 sm:pt-32 pb-24 px-6 sm:px-8 bg-cream min-h-screen">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection variant="fadeLeft">
          <span className="font-mono text-xs uppercase tracking-widest text-wine">Two silhouettes</span>
          <h1 className="font-display text-3xl sm:text-4xl mt-3 mb-14 max-w-xl text-ink">
            One craft, cut two ways.
          </h1>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="rounded-2xl overflow-hidden card-elevate bg-sky"
          >
            <div className="h-64 relative overflow-hidden">
              <img
                src={FASHION_IMAGES.kaftan}
                alt="The Kaftan - traditional African garment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </div>
            <div className="p-7 bg-ink text-cream">
              <h2 className="font-display text-2xl mb-2">The Kaftan</h2>
              <p className="text-sm text-stone leading-relaxed">
                Loose-woven and light for the climate, embroidered at the
                collar, built for durbars, Friday prayers and everyday
                presence.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
            className="rounded-2xl overflow-hidden card-elevate bg-wine"
          >
            <div className="h-64 relative overflow-hidden">
              <img
                src={FASHION_IMAGES.jacket}
                alt="The Mandarin Jacket - modern African fashion"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </div>
            <div className="p-7 bg-ink text-cream">
              <h2 className="font-display text-2xl mb-2">The Mandarin Jacket</h2>
              <p className="text-sm text-stone leading-relaxed">
                Velvet-weight, standing collar, close through the waist — cut
                for weddings, offices and the moments that call for a sharper
                line.
              </p>
            </div>
          </motion.div>
        </div>

        <AnimatedSection variant="fadeUp" delay={0.25} className="mt-16">
          <div className="mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-wine">Heritage & Custom Wear</span>
            <h2 className="font-display text-2xl sm:text-3xl text-ink mt-2">African Wear Collection</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: "/african wear.jpg", title: "Heritage Ensemble", desc: "Richly woven African fabric with bespoke tailoring details." },
              { src: "/african wear1.jpg", title: "Modern Kaftan", desc: "Clean silhouette with precise collar and cuff embroidery." },
              { src: "/african wear3.jpg", title: "Traditional Elegance", desc: "Handcrafted traditional attire tailored for special occasions." },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="rounded-2xl overflow-hidden bg-white shadow-md border border-ink/5 group"
              >
                <div className="h-72 relative overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-brassSoft bg-ink/80 px-2.5 py-1 rounded backdrop-blur-sm">
                      Bespoke Fit
                    </span>
                  </div>
                </div>
                <div className="p-6 bg-ink text-cream">
                  <h3 className="font-display text-xl mb-2">{item.title}</h3>
                  <p className="text-xs text-stone/80 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.3}>
          <div className="mt-16 p-8 rounded-2xl bg-inkSoft border border-brass/20">
            <p className="max-w-2xl text-stone leading-relaxed">
              Every piece is made to order — fabric, colour and fit are chosen
              together at your consultation.{" "}
              <Link to="/contact" className="text-brassSoft hover:text-brass transition-colors underline decoration-brass/40 underline-offset-4">
                Book a fitting
              </Link>{" "}
              to start yours.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}