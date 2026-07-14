import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import './Contact.css'

const serviceOptions = [
  "Men's Custom Tailoring",
  "Women's Fashion & Gowns",
  "Traditional African Wear",
  "Alterations & Repairs",
  "Corporate Uniforms",
  "Other",
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Please enter your name'
    if (!form.phone.trim())   e.phone   = 'Please enter your phone number'
    if (!form.service)        e.service = 'Please select a service'
    if (!form.message.trim()) e.message = 'Please write a message'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const v = validate()
    if (Object.keys(v).length) { setErrors(v); return }
    // Simulate submission — in production connect to a backend or form service
    setSubmitted(true)
  }

  return (
    <>
      <section className="page-hero" aria-label="Contact page header">
        <div className="container page-hero__inner">
          <span className="section-label">Get In Touch</span>
          <h1>Let's Create Something <span className="text-gold">Beautiful</span></h1>
          <p className="page-hero__sub">
            Ready to start your fashion journey? Reach out to us — we'd love to hear your story.
          </p>
        </div>
      </section>

      <div className="pattern-border" aria-hidden="true" />

      <section className="section" aria-label="Contact information and form">
        <div className="container contact-grid">

          {/* Info Panel */}
          <aside className="contact-info" aria-label="Contact details">
            <h2>Visit Us or Get in Touch</h2>
            <p>Our friendly team is ready to assist you with bookings, enquiries, and everything in between.</p>

            <div className="contact-info__items">
              <div className="contact-info__item">
                <div className="contact-info__icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+233504000344" className="contact-info__link" id="contact-phone-link">+233 (0) 504000344</a>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:afripashion@gmail.com" className="contact-info__link" id="contact-email-link">afripashion@gmail.com</a>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Choggu Yelpasi, Tamale<br />Northern Region, Ghana</p>
                </div>
              </div>

              <div className="contact-info__item">
                <div className="contact-info__icon">
                  <Clock size={20} />
                </div>
                <div>
                  <h4>Business Hours</h4>
                  <p>Monday – Saturday: 8:00 AM – 6:00 PM</p>
                  <p>Sunday: By Appointment Only</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="contact-info__map">
              <iframe
                title="AfriPashion Ltd location map"
                src="https://maps.google.com/maps?q=Choggu+Yelpasi+Tamale+Ghana&t=&z=14&ie=UTF8&iwloc=&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Map showing Choggu Yelpasi, Tamale, Ghana"
              />
            </div>
          </aside>

          {/* Contact Form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success" aria-live="polite">
                <div className="contact-success__icon">
                  <CheckCircle size={48} />
                </div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you within 24 hours to discuss your order.</p>
                <button className="btn btn-gold-outline" onClick={() => { setSubmitted(false); setForm({ name:'', phone:'', email:'', service:'', message:'' }) }} id="contact-send-another">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <h2 className="contact-form__title">Book a Fitting or Enquire</h2>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name <span aria-hidden="true">*</span></label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      autoComplete="name"
                      required
                    />
                    {errors.name && <span className="form-error" role="alert">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number <span aria-hidden="true">*</span></label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className={`form-input ${errors.phone ? 'error' : ''}`}
                      placeholder="+233 ..."
                      value={form.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      required
                    />
                    {errors.phone && <span className="form-error" role="alert">{errors.phone}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address <span className="form-optional">(optional)</span></label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service" className="form-label">Service Required <span aria-hidden="true">*</span></label>
                  <select
                    id="service"
                    name="service"
                    className={`form-input form-select ${errors.service ? 'error' : ''}`}
                    value={form.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service...</option>
                    {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.service && <span className="form-error" role="alert">{errors.service}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message <span aria-hidden="true">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    className={`form-input form-textarea ${errors.message ? 'error' : ''}`}
                    placeholder="Describe your fashion need, style preferences, or any specific requirements..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                  {errors.message && <span className="form-error" role="alert">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary contact-form__submit" id="contact-submit">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
