import { Award, Heart, Target, Users } from 'lucide-react'
import CTABanner from '../components/CTABanner'
import useReveal from '../hooks/useReveal'
import aboutImg from '../assets/images/about_tailor.png'
import './About.css'

const values = [
  { icon: Heart, title: 'Passion', desc: 'Every garment is sewn with love for the craft and dedication to making you look your absolute best.' },
  { icon: Award, title: 'Excellence', desc: 'We hold ourselves to the highest standards of quality — from fabric selection to the final stitch.' },
  { icon: Target, title: 'Precision', desc: 'Measurements matter. We ensure every garment fits perfectly, tailored to your unique body and style.' },
  { icon: Users, title: 'Community', desc: 'We are proud to serve the people of Tamale and contribute to the growth of the local fashion industry.' },
]

const team = [
  { name: 'The Master Tailor', role: 'Founder & Lead Designer', initial: 'A' },
  { name: 'Cutting Specialist', role: 'Pattern & Cutting Expert', initial: 'F' },
  { name: 'Embroidery Artist', role: 'Embroidery & Finishing', initial: 'M' },
]

export default function About() {
  useReveal()

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero" aria-label="About page header">
        <div className="container page-hero__inner">
          <span className="section-label">Our Story</span>
          <h1>Where African Fashion<br /><span className="text-gold">Comes to Life</span></h1>
          <p className="page-hero__sub">
            AfriPashion Ltd — Fashion Home. Tamale, Ghana's premier bespoke tailoring house.
          </p>
        </div>
      </section>

      <div className="pattern-border" aria-hidden="true" />

      {/* Story Section */}
      <section className="section" aria-labelledby="story-heading">
        <div className="container about-story">
          <div className="about-story__img reveal-left">
            <img src={aboutImg} alt="AfriPashion tailor crafting a garment" loading="lazy" />
            <div className="about-story__quote">
              <span>"A Style For Every Story"</span>
            </div>
          </div>
          <div className="about-story__text reveal-right">
            <span className="section-label">Our Journey</span>
            <h2 id="story-heading" className="section-title">
              Born from a love of fabric<br />and African identity.
            </h2>
            <p>
              AfriPashion Ltd was founded with a simple yet powerful vision: to celebrate African identity
              through fashion. Based in Choggu Yelpasi, Tamale, we started as a small tailoring workshop
              driven by a deep passion for craftsmanship and style.
            </p>
            <p style={{ marginTop: '16px' }}>
              Over the years, we've grown into Tamale's most trusted fashion house, serving clients from
              all walks of life — from students getting their first suit to brides wanting the perfect gown,
              and businesses seeking sharp corporate uniforms.
            </p>
            <p style={{ marginTop: '16px' }}>
              Our roots are in the rich textile traditions of Northern Ghana — the Fugu smock, hand-woven
              kente, and intricate embroidery. We honor that heritage while embracing modern design to
              create garments that are both timeless and contemporary.
            </p>
            <div className="about-story__stats">
              <div className="about-story__stat">
                <span className="about-story__stat-num">500+</span>
                <span>Clients Served</span>
              </div>
              <div className="about-story__stat">
                <span className="about-story__stat-num">10+</span>
                <span>Years Active</span>
              </div>
              <div className="about-story__stat">
                <span className="about-story__stat-num">100%</span>
                <span>Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pattern-border" aria-hidden="true" />

      {/* Values */}
      <section className="section section--alt" aria-labelledby="values-heading">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Our Values</span>
            <h2 id="values-heading" className="section-title">What Drives Us</h2>
            <p className="section-subtitle">The principles that guide every thread, every cut, every garment we create.</p>
          </div>
          <div className="values-grid">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="value-card reveal" style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="value-card__icon">
                  <Icon size={24} />
                </div>
                <h3 className="value-card__title">{title}</h3>
                <p className="value-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pattern-border" aria-hidden="true" />

      {/* Team */}
      <section className="section" aria-labelledby="team-heading">
        <div className="container">
          <div className="text-center">
            <span className="section-label">The People</span>
            <h2 id="team-heading" className="section-title">Meet the Artisans</h2>
            <p className="section-subtitle">Skilled hands and creative minds behind every garment.</p>
          </div>
          <div className="team-grid">
            {team.map(({ name, role, initial }, i) => (
              <div key={name} className="team-card card reveal" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="team-card__avatar">
                  <span>{initial}</span>
                </div>
                <h3 className="team-card__name">{name}</h3>
                <p className="team-card__role">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
