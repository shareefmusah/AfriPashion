import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './CTABanner.css'

export default function CTABanner() {
  return (
    <section className="cta-banner" aria-label="Call to action">
      <div className="cta-banner__bg" aria-hidden="true" />
      <div className="container cta-banner__content">
        <div className="cta-banner__text">
          <span className="section-label">Ready?</span>
          <h2 className="cta-banner__title">
            Every great outfit begins<br />
            with a <span className="text-gold">single stitch.</span>
          </h2>
          <p>
            Walk into AfriPashion Ltd and let us craft a style that tells your unique story.
            From your first consultation to the final fitting — we're with you every step.
          </p>
        </div>
        <div className="cta-banner__actions">
          <Link to="/contact" className="btn btn-primary" id="cta-banner-book">
            Book a Fitting <ArrowRight size={18} />
          </Link>
          <a href="tel:+233504000344" className="btn btn-outline" id="cta-banner-call">
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  )
}
