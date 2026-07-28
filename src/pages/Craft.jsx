import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection.jsx";
import { FASHION_IMAGES } from "../components/GarmentArt.jsx";

const craftPoints = [
  {
    title: "Conversation-led design",
    desc: "Every garment begins with a conversation — understanding who you are, the occasion, and the story you want your clothes to tell.",
  },
  {
    title: "Hand-measured precision",
    desc: "We measure by hand, not by size chart. Each body is different, and our cuts respect that.",
  },
  {
    title: "Generations of tradition",
    desc: "Our techniques are passed down through Northern Ghana's tailoring houses — refined over decades, never rushed.",
  },
];

export default function Craft() {
  return (
    <section className="relative pt-28 sm:pt-32 pb-28 px-6 sm:px-8 overflow-hidden min-h-screen">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={FASHION_IMAGES.craftDetail}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-wineDeep/95" />
      </div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(201, 162, 75, 0.8) 40px, rgba(201, 162, 75, 0.8) 41px)`,
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        <AnimatedSection variant="fadeLeft">
          <span className="font-mono text-xs uppercase tracking-widest text-brassSoft">Our craft</span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-snug mt-4 mb-8 text-cream">
            Every stitch tells a <span className="text-gradient-gold">story.</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.2}>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {craftPoints.map((cp, i) => (
              <motion.div
                key={cp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl bg-wine/40 backdrop-blur-sm border border-brass/10"
              >
                <div className="w-8 h-px bg-brass mb-4" />
                <h3 className="font-display text-lg text-cream mb-2">{cp.title}</h3>
                <p className="text-sm text-stone/80 leading-relaxed">{cp.desc}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <AnimatedSection variant="fadeUp" delay={0.3}>
            <div className="p-8 sm:p-10 rounded-2xl bg-ink/60 backdrop-blur-md border border-brass/15">
              <p className="text-stone text-base sm:text-lg leading-relaxed mb-6">
                At AfriPashion, tailoring is still a conversation — between
                fabric, measurement and the person who'll wear it — carried on
                the same way it has been passed down through Northern Ghana's
                tailoring houses, one garment at a time.
              </p>
              <p className="text-stone text-base sm:text-lg leading-relaxed mb-6">
                We work from our fashion home in Choggu Yelpasi, Tamale, where
                every kaftan and mandarin-collar jacket is measured by hand,
                cut by hand, and finished by people who know the difference a
                good seam makes.
              </p>
              <p className="text-cream font-display text-lg">
                "No two orders leave looking the same, because <br />
                <span className="text-brassSoft">no two stories are the same.</span>"
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="scaleIn" delay={0.4}>
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={FASHION_IMAGES.atelier}
                alt="Our atelier workspace"
                className="w-full h-80 sm:h-96 object-cover rounded-2xl"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-brass/20" />
              <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-widest text-cream/70 bg-ink/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
                Our fashion home, Tamale
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}