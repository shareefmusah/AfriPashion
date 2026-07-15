import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import './TestimonialSlider.css'

const testimonials = [
  {
    id: 1,
    name: 'Abdulai Sulemana',
    role: 'Business Executive, Tamale',
    text: `AfriPashion tailored my wedding smock and it was absolutely stunning. The quality and attention to detail blew everyone away. I'll never go anywhere else!`,
    rating: 5,
  },
  {
    id: 2,
    name: 'Fatima Ibrahim',
    role: 'Teacher, Choggu',
    text: 'They made three gorgeous outfits for my daughter\'s graduation. The craftsmanship is exceptional and the staff is so professional. Truly a fashion home!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emmanuel Asante',
    role: 'Entrepreneur, Tamale',
    text: 'I got my office uniforms done here. They delivered on time, looked professional, and every staff member loved the result. Highly recommended!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Mariama Alhassan',
    role: 'Fashion Enthusiast',
    text: 'From the measurement process to the final fitting — everything was so smooth and the gown was exactly what I envisioned. Style for every story indeed!',
    rating: 5,
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const animatingRef = useRef(false)

  const go = useCallback((dir) => {
    if (animatingRef.current) return
    animatingRef.current = true
    setAnimating(true)
    setTimeout(() => {
      setCurrent(c => (c + dir + testimonials.length) % testimonials.length)
      animatingRef.current = false
      setAnimating(false)
    }, 300)
  }, [])

  useEffect(() => {
    const id = setInterval(() => go(1), 5000)
    return () => clearInterval(id)
  }, [go])

  const t = testimonials[current]

  return (
    <div className="testimonial-slider" aria-label="Customer testimonials">
      <div className="testimonial-slider__quote-icon" aria-hidden="true">
        <Quote size={40} />
      </div>

      <div className={`testimonial-slider__content ${animating ? 'fade-out' : 'fade-in'}`}>
        <div className="testimonial-slider__stars" aria-label={`${t.rating} out of 5 stars`}>
          {[...Array(t.rating)].map((_, i) => (
            <span key={i} className="testimonial-slider__star">★</span>
          ))}
        </div>
        <blockquote className="testimonial-slider__text">"{t.text}"</blockquote>
        <div className="testimonial-slider__author">
          <div className="testimonial-slider__avatar" aria-hidden="true">
            {t.name.charAt(0)}
          </div>
          <div>
            <p className="testimonial-slider__name">{t.name}</p>
            <p className="testimonial-slider__role">{t.role}</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="testimonial-slider__controls">
        <button onClick={() => go(-1)} className="testimonial-slider__btn" aria-label="Previous testimonial" id="testimonial-prev">
          <ChevronLeft size={20} />
        </button>
        <div className="testimonial-slider__dots" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Testimonial ${i + 1}`}
              className={`testimonial-slider__dot ${i === current ? 'active' : ''}`}
              onClick={() => { if (!animating) { setAnimating(true); setTimeout(() => { setCurrent(i); setAnimating(false) }, 300) } }}
              id={`testimonial-dot-${i}`}
            />
          ))}
        </div>
        <button onClick={() => go(1)} className="testimonial-slider__btn" aria-label="Next testimonial" id="testimonial-next">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
