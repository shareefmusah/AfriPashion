import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import './ServiceCard.css'

export default function ServiceCard({ icon: Icon, title, description, image, index = 0 }) {
  return (
    <article
      className="service-card card reveal"
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      {image && (
        <div className="service-card__img-wrap">
          <img src={image} alt={title} className="service-card__img" loading="lazy" />
          <div className="service-card__img-overlay" aria-hidden="true" />
        </div>
      )}
      <div className="service-card__body">
        {Icon && (
          <div className="service-card__icon" aria-hidden="true">
            <Icon size={22} />
          </div>
        )}
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__desc">{description}</p>
        <Link to="/contact" className="service-card__cta" aria-label={`Enquire about ${title}`}>
          <span>Get a Quote</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  )
}
