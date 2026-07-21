import { Link } from 'react-router-dom'
import { Shirt, Gem, Star, Scissors, Briefcase, ArrowRight } from 'lucide-react'
import CTABanner from '../components/CTABanner'
import useReveal from '../hooks/useReveal'

import serviceMens from '../assets/images/service_mens.png'
import serviceWomens from '../assets/images/service_womens.png'
import serviceTraditional from '../assets/images/service_traditional.png'
import serviceAlterations from '../assets/images/service_alterations.png'

import './Services.css'

const services = [
  {
    icon: Shirt,
    title: "Men's Custom Tailoring",
    desc: "Step into any room with confidence. Our master tailors craft bespoke suits, shirts, trousers, and traditional wear to your exact measurements. Using premium fabrics from across West Africa and beyond, every garment is a masterpiece of fit and finish.",
    features: ['Bespoke measurement session', 'Wide fabric selection', 'Traditional & modern styles', 'Wedding & event specials'],
    image: serviceMens,
    tag: 'Most Popular',
  },
  {
    icon: Gem,
    title: "Women's Fashion & Gowns",
    desc: "From everyday elegance to show-stopping gowns, we create women's fashion that celebrates every curve and personality. Ankara, kente, lace, silk — name it, we'll make it extraordinary.",
    features: ['Evening & bridal gowns', 'Ankara & kente dresses', 'Office & casual wear', 'Maternity fashion'],
    image: serviceWomens,
    tag: 'Trending',
  },
  {
    icon: Star,
    title: 'Traditional African Wear',
    desc: "Celebrate your heritage with pride. We specialise in authentic Northern Ghanaian smocks (Fugu), kente-inspired outfits, and traditional ceremonial wear. Handcrafted to preserve and elevate our cultural identity.",
    features: ['Fugu / Smock tailoring', 'Kente-fabric styling', 'Cultural event outfits', 'Custom embroidery'],
    image: serviceTraditional,
    tag: 'Cultural Heritage',
  },
  {
    icon: Scissors,
    title: 'Alterations & Repairs',
    desc: "Your favourite garment deserves a second chance. We offer expert alterations and repairs — from simple hemming to complete restyling. Bring it in, and we'll bring it back to life.",
    features: ['Hemming & resizing', 'Zipper & button repairs', 'Complete restyling', 'Vintage garment revival'],
    image: serviceAlterations,
    tag: 'Quick Turnaround',
  },
  {
    icon: Briefcase,
    title: 'Corporate Uniforms',
    desc: "Dress your team for success. We design and produce sharp, professional corporate uniforms that reinforce your brand identity. Bulk orders welcome with consistent sizing and quality.",
    features: ['Bulk order discounts', 'Custom logo embroidery', 'Consistent sizing', 'Fast delivery'],
    image: null,
    tag: 'Business Ready',
  },
]

export default function Services() {
  useReveal()

  return (
    <>
      <section className="page-hero" aria-label="Services page header">
        <div className="container page-hero__inner">
          <span className="section-label">What We Offer</span>
          <h1>Our <span className="text-gold">Services</span></h1>
          <p className="page-hero__sub">
            Expert tailoring across five specialisations — every one crafted with the same care and precision.
          </p>
        </div>
      </section>

      <div className="pattern-border" aria-hidden="true" />

      <section className="section" aria-label="Services list">
        <div className="container">
          <div className="services-list">
            {services.map(({ icon: Icon, title, desc, features, image, tag }, i) => (
              <article key={title} className={`service-detail reveal ${i % 2 === 1 ? 'service-detail--reverse' : ''}`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="service-detail__img-side">
                  {image ? (
                    <div className="service-detail__img-wrap">
                      <img src={image} alt={title} loading="lazy" />
                    </div>
                  ) : (
                    <div className="service-detail__no-img">
                      <Icon size={64} />
                      <p>Corporate Uniform Design</p>
                    </div>
                  )}
                  <span className="tag service-detail__tag">{tag}</span>
                </div>

                <div className="service-detail__content">
                  <div className="service-detail__icon">
                    <Icon size={22} />
                  </div>
                  <h2 className="service-detail__title">{title}</h2>
                  <p className="service-detail__desc">{desc}</p>
                  <ul className="service-detail__features">
                    {features.map(f => (
                      <li key={f}>
                        <span className="service-detail__check">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn btn-primary" id={`service-cta-${i}`}>
                    Get a Quote <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
