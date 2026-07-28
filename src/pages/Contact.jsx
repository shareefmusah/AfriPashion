import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection.jsx";
import { FASHION_IMAGES } from "../components/GarmentArt.jsx";
import Monogram from "../components/Monogram.jsx";
import StitchLine from "../components/StitchLine.jsx";

const contactInfo = [
  {
    label: "Call",
    value: "+233 (0) 504 000 344",
    href: "tel:+233504000344",
    icon: "✦",
  },
  {
    label: "Email",
    value: "afripashion@gmail.com",
    href: "mailto:afripashion@gmail.com",
    icon: "◈",
  },
  {
    label: "Location",
    value: "Choggu Yelpasi, Tamale",
    href: null,
    icon: "◇",
  },
];

const hours = [
  { day: "Monday – Friday", time: "9:00 AM – 5:00 PM" },
  { day: "Saturday", time: "10:00 AM – 3:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export default function Contact() {
  return (
    <section className="pt-28 sm:pt-32 pb-28 px-6 sm:px-8 bg-ink min-h-screen">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection variant="fadeLeft">
          <div className="flex items-center gap-3 mb-4">
            <Monogram size={34} />
            <h1 className="font-display text-2xl sm:text-3xl text-cream">Visit the atelier</h1>
          </div>
          <p className="text-stone/60 max-w-md mb-12">
            We're based in Choggu Yelpasi, Tamale. Walk-ins are welcome, but a call ahead ensures we have time for you.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact details */}
          <AnimatedSection variant="fadeUp" delay={0.1}>
            <div className="rounded-2xl p-8 sm:p-10 bg-inkSoft border border-brass/20">
              <div className="space-y-8">
                {contactInfo.map((ci) => (
                  <motion.div
                    key={ci.label}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="font-mono text-[11px] uppercase tracking-widest mb-2 text-brassSoft flex items-center gap-2">
                      <span className="text-xs">{ci.icon}</span>
                      {ci.label}
                    </div>
                    {ci.href ? (
                      <a
                        href={ci.href}
                        className="text-lg sm:text-xl text-cream hover:text-brassSoft transition-colors"
                      >
                        {ci.value}
                      </a>
                    ) : (
                      <span className="text-lg sm:text-xl text-cream">{ci.value}</span>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-10">
                <StitchLine opacity={0.4} />
              </div>

              <motion.a
                href="tel:+233504000344"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block mt-8 font-mono text-xs uppercase tracking-widest px-8 py-4 rounded-full text-cream transition-all duration-300 btn-glow"
                style={{ background: "linear-gradient(135deg, #E8792A, #C0272B)" }}
              >
                Book a fitting today
              </motion.a>
            </div>
          </AnimatedSection>

          {/* Right column: Hours + Image */}
          <div className="flex flex-col gap-8">
            <AnimatedSection variant="fadeUp" delay={0.2}>
              <div className="rounded-2xl p-8 sm:p-10 bg-inkSoft border border-brass/20">
                <h2 className="font-display text-xl text-cream mb-6">Opening hours</h2>
                <div className="space-y-4">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between items-center py-3 border-b border-brass/10 last:border-0">
                      <span className="text-stone text-sm">{h.day}</span>
                      <span className={`text-sm font-medium ${h.time === "Closed" ? "text-emberB" : "text-cream"}`}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-5 rounded-xl bg-wine/20 border border-wine/30">
                  <p className="text-sm text-stone leading-relaxed">
                    <span className="text-brassSoft font-medium">Note:</span> Fittings are by appointment only.
                    Please call ahead to schedule your consultation.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="scaleIn" delay={0.3}>
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={FASHION_IMAGES.atelier}
                  alt="Our atelier in Choggu Yelpasi, Tamale"
                  className="w-full h-56 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-brass/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-widest text-cream/80">
                  Choggu Yelpasi · Tamale
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}