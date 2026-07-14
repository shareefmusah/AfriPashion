import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" aria-label="Site footer">
      <div className="pattern-border" />
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="36" cy="12" r="8" stroke="#D4A017" strokeWidth="2.5" fill="none"/>
                <circle cx="36" cy="12" r="2.5" fill="#D4A017"/>
                <path d="M30 18 L8 44" stroke="#D4A017" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M32 20 Q20 32 10 40" stroke="#F39C12" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"/>
              </svg>
              <div>
                <p className="footer__brand-name">AfriPashion Ltd</p>
                <p className="footer__brand-sub">Fashion Home</p>
              </div>
            </div>
            <p className="footer__tagline">"A Style For Every Story"</p>
            <p className="footer__desc">Premium custom tailoring and African fashion craftsmanship rooted in the heart of Tamale, Ghana.</p>
            <div className="footer__socials">
              <a href="https://facebook.com" className="footer__social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer" id="footer-facebook">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://instagram.com" className="footer__social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer" id="footer-instagram">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.51"/></svg>
              </a>
              <a href="https://wa.me/233504000344" className="footer__social-link" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" id="footer-whatsapp">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul>
              <li><Link to="/" className="footer__link">Home</Link></li>
              <li><Link to="/about" className="footer__link">About Us</Link></li>
              <li><Link to="/services" className="footer__link">Our Services</Link></li>
              <li><Link to="/gallery" className="footer__link">Gallery</Link></li>
              <li><Link to="/contact" className="footer__link">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4 className="footer__heading">Services</h4>
            <ul>
              <li><Link to="/services" className="footer__link">Men's Tailoring</Link></li>
              <li><Link to="/services" className="footer__link">Women's Fashion</Link></li>
              <li><Link to="/services" className="footer__link">Traditional Wear</Link></li>
              <li><Link to="/services" className="footer__link">Alterations</Link></li>
              <li><Link to="/services" className="footer__link">Corporate Uniforms</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__heading">Get In Touch</h4>
            <ul className="footer__contact-list">
              <li>
                <Phone size={16} className="footer__icon" aria-hidden="true" />
                <a href="tel:+233504000344" className="footer__link" id="footer-phone">+233 (0) 504000344</a>
              </li>
              <li>
                <Mail size={16} className="footer__icon" aria-hidden="true" />
                <a href="mailto:afripashion@gmail.com" className="footer__link" id="footer-email">afripashion@gmail.com</a>
              </li>
              <li>
                <MapPin size={16} className="footer__icon" aria-hidden="true" />
                <span className="footer__link">Choggu Yelpasi, Tamale, Ghana</span>
              </li>
            </ul>
            <div className="footer__hours">
              <p className="footer__hours-title">Business Hours</p>
              <p>Mon – Sat: 8:00 AM – 6:00 PM</p>
              <p>Sunday: By Appointment</p>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} AfriPashion Ltd. All rights reserved.</p>
          <p>Crafted with ❤ in Tamale, Ghana</p>
        </div>
      </div>
    </footer>
  )
}
