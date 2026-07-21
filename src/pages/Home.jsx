import { Link } from 'react-router-dom'
import { Scissors, Shirt, Star, ArrowRight, Gem } from 'lucide-react'
import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'
import TestimonialSlider from '../components/TestimonialSlider'
import CTABanner from '../components/CTABanner'
import useReveal from '../hooks/useReveal'

import serviceMens from '../assets/images/service_mens.png'
import serviceWomens from '../assets/images/service_womens.png'
import serviceTraditional from '../assets/images/service_traditional.png'
import serviceAlterations from '../assets/images/service_alterations.png'
import aboutImg from '../assets/images/about_tailor.png'

import './Home.css'

const services = [
  { icon: Shirt, title: "Men's Custom Tailoring", description: "From sleek suits to traditional smocks — every garment is cut and sewn to your exact measurements.", image: serviceMens },
  { icon: Gem, title: "Women's Fashion & Gowns", description: "Elegant gowns, ankara dresses, and modern African couture that celebrates the African woman.", image: serviceWomens },
  { icon: Star, title: "Traditional African Wear", description: "Authentic Northern Ghanaian smocks, kente styles, and cultural wear made with pride and precision.", image: serviceTraditional },
  { icon: Scissors, title: "Alterations & Repairs", description: "Give your favourite clothes a second life with our expert alteration and repair services.", image: serviceAlterations },
]

export default function Home() {
  useReveal()

  return (
    <>
      <HeroSection />

      {/* About Snippet */}
      <section className="section about-snippet" aria-label="About AfriPashion">
        <div className="container about-snippet__grid">
          <div className="about-snippet__img-side reveal-left">
            <div className="about-snippet__img-wrap">
              <img src={aboutImg} alt="AfriPashion tailor at work" loading="lazy" />
              <div className="about-snippet__badge">
                <span className="about-snippet__badge-num">10+</span>
                <span>Years of<br />Excellence</span>
              </div>
            </div>
          </div>
          <div className="about-snippet__text-side reveal-right">
            <span className="section-label">Who We Are</span>
            <h2>Rooted in Tamale,<br /><span className="text-gold">Dressed for the World.</span></h2>
            <p>
              AfriPashion Ltd is Tamale's premier fashion house, dedicated to the art of bespoke tailoring.
              Founded with a passion for African fashion and craftsmanship, we blend traditional techniques
              with modern design sensibility to create garments that tell your story.
            </p>
            <p style={{ marginTop: '12px' }}>
              Based in Choggu Yelpasi, Tamale, we've proudly served hundreds of clients across Ghana —
              from individuals seeking the perfect outfit to businesses needing sharp corporate wear.
            </p>
            <div className="about-snippet__features">
              {['Bespoke measurements', 'Premium fabric selection', 'On-time delivery', 'Client satisfaction guarantee'].map(f => (
                <div key={f} className="about-snippet__feature">
                  <span className="about-snippet__check">✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn btn-gold-outline" id="home-about-link">
              Learn Our Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <div className="pattern-border" aria-hidden="true" />

      {/* Services */}
      <section className="section section--alt" aria-labelledby="services-heading">
        <div className="container">
          <div className="text-center">
            <span className="section-label">What We Do</span>
            <h2 id="services-heading" className="section-title">Our Services</h2>
            <p className="section-subtitle">
              From first consultation to final fitting, we deliver exceptional garments tailored to your vision.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 'var(--space-xl)' }}>
            <Link to="/services" className="btn btn-gold-outline" id="home-services-link">
              All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <div className="pattern-border" aria-hidden="true" />

      {/* Testimonials */}
      <section className="section" aria-labelledby="testimonials-heading">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Client Stories</span>
            <h2 id="testimonials-heading" className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Every stitch of fabric carries the trust our clients place in us.
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section>

      <CTABanner />
    </>
  )
}
