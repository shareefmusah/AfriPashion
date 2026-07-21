import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Scissors } from 'lucide-react'
import heroBg from '../assets/images/hero_background.png'
import './HeroSection.css'

export default function HeroSection() {
  const pathRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    // Animate stats on mount
    const timer = setTimeout(() => {
      if (statsRef.current) {
        statsRef.current.classList.add('visible')
      }
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="hero" aria-label="Hero section">
      {/* Background */}
      <div className="hero__bg" style={{ backgroundImage: `url(${heroBg})` }} aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />

      {/* Animated SVG needle thread */}
      <svg className="hero__thread-svg" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          ref={pathRef}
          d="M 50 450 Q 200 100 400 250 Q 600 400 750 80"
          stroke="#D4A017"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="500"
          strokeDashoffset="500"
          className="hero__thread-path"
        />
        <path
          d="M 80 420 Q 250 150 430 280 Q 620 380 720 100"
          stroke="#F39C12"
          strokeWidth="0.8"
          fill="none"
          strokeDasharray="500"
          strokeDashoffset="500"
          className="hero__thread-path hero__thread-path--delay"
          opacity="0.5"
        />
      </svg>

      {/* Floating decorative dots */}
      <div className="hero__dots" aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="hero__dot" style={{ animationDelay: `${i * 0.4}s` }} />
        ))}
      </div>

      <div className="container hero__content">
        <div className="hero__badge">
          <Scissors size={14} />
          <span>Tamale, Ghana's Premier Fashion House</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line">Crafted with</span>
          <span className="hero__title-line hero__title-gold">Passion &</span>
          <span className="hero__title-line">Precision.</span>
        </h1>

        <p className="hero__subtitle">
          AfriPashion Ltd brings you bespoke tailoring and African fashion excellence.
          From traditional smocks to contemporary couture — every stitch tells your story.
        </p>

        <div className="hero__tagline-banner">
          <span>"A Style For Every Story"</span>
        </div>

        <div className="hero__cta-group">
          <Link to="/contact" className="btn btn-primary" id="hero-book-cta">
            Book a Fitting
            <ArrowRight size={18} />
          </Link>
          <Link to="/gallery" className="btn btn-outline" id="hero-gallery-cta">
            View Our Work
          </Link>
        </div>

        {/* Stats */}
        <div className="hero__stats reveal" ref={statsRef}>
          <div className="hero__stat">
            <span className="hero__stat-num">500+</span>
            <span className="hero__stat-label">Happy Clients</span>
          </div>
          <div className="hero__stat-divider" aria-hidden="true" />
          <div className="hero__stat">
            <span className="hero__stat-num">10+</span>
            <span className="hero__stat-label">Years Experience</span>
          </div>
          <div className="hero__stat-divider" aria-hidden="true" />
          <div className="hero__stat">
            <span className="hero__stat-num">5</span>
            <span className="hero__stat-label">Service Categories</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
