import { useState, useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

import serviceMens from '../assets/images/service_mens.png'
import serviceWomens from '../assets/images/service_womens.png'
import serviceTraditional from '../assets/images/service_traditional.png'
import serviceAlterations from '../assets/images/service_alterations.png'
import aboutImg from '../assets/images/about_tailor.png'
import heroBg from '../assets/images/hero_background.png'

import './Gallery.css'

const galleryItems = [
  { id: 1, src: serviceMens, category: "mens", title: "Custom Men's Suit", desc: "Bespoke charcoal suit with gold embroidery" },
  { id: 2, src: serviceWomens, category: "womens", title: "Ankara Evening Gown", desc: "Floor-length couture gown in kente fabric" },
  { id: 3, src: serviceTraditional, category: "traditional", title: "Northern Ghanaian Smock", desc: "Authentic Fugu smock with intricate patterns" },
  { id: 4, src: serviceAlterations, category: "mens", title: "Tailoring Detail", desc: "Precision stitching and finishing work" },
  { id: 5, src: aboutImg, category: "traditional", title: "Artisan at Work", desc: "Our master tailor crafting a garment" },
  { id: 6, src: heroBg, category: "studio", title: "The AfriPashion Studio", desc: "Our workshop in Choggu Yelpasi, Tamale" },
  { id: 7, src: serviceMens, category: "mens", title: "Wedding Attire", desc: "Bespoke wedding suit crafted with care" },
  { id: 8, src: serviceWomens, category: "womens", title: "Women's Corporate Wear", desc: "Professional and elegant office attire" },
]

const filters = ['all', 'mens', 'womens', 'traditional', 'studio']

export default function Gallery() {
  const [active, setActive] = useState('all')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'all' ? galleryItems : galleryItems.filter(i => i.category === active)

  const openLightbox = (item) => setLightbox(item)
  const closeLightbox = () => setLightbox(null)

  const navigate = useCallback((dir) => {
    if (!lightbox) return
    const idx = filtered.findIndex(i => i.id === lightbox.id)
    const next = (idx + dir + filtered.length) % filtered.length
    setLightbox(filtered[next])
  }, [lightbox, filtered])

  useEffect(() => {
    const handler = (e) => {
      if (!lightbox) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') navigate(1)
      if (e.key === 'ArrowLeft') navigate(-1)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [navigate, lightbox])

  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <>
      <section className="page-hero" aria-label="Gallery page header">
        <div className="container page-hero__inner">
          <span className="section-label">Our Portfolio</span>
          <h1>The <span className="text-gold">Gallery</span></h1>
          <p className="page-hero__sub">A showcase of our finest work — each piece a story in fabric and thread.</p>
        </div>
      </section>

      <div className="pattern-border" aria-hidden="true" />

      <section className="section" aria-label="Gallery">
        <div className="container">
          {/* Filters */}
          <div className="gallery-filters" role="tablist" aria-label="Gallery filter">
            {filters.map(f => (
              <button
                key={f}
                role="tab"
                aria-selected={active === f}
                className={`gallery-filter-btn ${active === f ? 'active' : ''}`}
                onClick={() => setActive(f)}
                id={`gallery-filter-${f}`}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="gallery-grid" aria-label="Gallery images">
            {filtered.map((item, i) => (
              <button
                key={item.id}
                className="gallery-item"
                onClick={() => openLightbox(item)}
                aria-label={`View ${item.title}`}
                id={`gallery-item-${item.id}`}
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <img src={item.src} alt={item.title} loading="lazy" />
                <div className="gallery-item__overlay">
                  <h3 className="gallery-item__title">{item.title}</h3>
                  <p className="gallery-item__desc">{item.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Image: ${lightbox.title}`} onClick={closeLightbox}>
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close lightbox" id="lightbox-close">
            <X size={24} />
          </button>
          <button className="lightbox__nav lightbox__nav--prev" onClick={(e) => { e.stopPropagation(); navigate(-1) }} aria-label="Previous image" id="lightbox-prev">
            <ChevronLeft size={28} />
          </button>
          <div className="lightbox__content" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.title} className="lightbox__img" />
            <div className="lightbox__info">
              <h3>{lightbox.title}</h3>
              <p>{lightbox.desc}</p>
            </div>
          </div>
          <button className="lightbox__nav lightbox__nav--next" onClick={(e) => { e.stopPropagation(); navigate(1) }} aria-label="Next image" id="lightbox-next">
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </>
  )
}
