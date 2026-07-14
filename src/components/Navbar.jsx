import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import './Navbar.css'

const navLinks = [
  { to: '/',        label: 'Home'     },
  { to: '/about',   label: 'About'    },
  { to: '/services',label: 'Services' },
  { to: '/gallery', label: 'Gallery'  },
  { to: '/contact', label: 'Contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
      <div className="container navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={closeMenu} aria-label="AfriPashion Ltd home">
          <svg className="navbar__needle-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="36" cy="12" r="8" stroke="#D4A017" strokeWidth="2.5" fill="none"/>
            <circle cx="36" cy="12" r="2.5" fill="#D4A017"/>
            <path d="M30 18 L8 44" stroke="#D4A017" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M32 20 Q20 32 10 40" stroke="#F39C12" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3"/>
          </svg>
          <div className="navbar__logo-text">
            <span className="navbar__brand">AfriPashion</span>
            <span className="navbar__sub">Ltd · Fashion Home</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="navbar__links" role="list">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => `navbar__link ${isActive ? 'active' : ''}`}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link to="/contact" className="btn btn-primary navbar__cta" id="nav-book-cta">
          Book a Fitting
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          id="nav-hamburger"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <ul role="list">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => `navbar__mobile-link ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <Link to="/contact" className="btn btn-primary" style={{marginTop: '16px', width: '100%', justifyContent: 'center'}} onClick={closeMenu} id="nav-mobile-book-cta">
          Book a Fitting
        </Link>
      </div>
    </nav>
  )
}
