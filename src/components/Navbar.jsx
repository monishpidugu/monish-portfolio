import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['About', 'Skills', 'Experience', 'Projects']

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [activeId,  setActiveId]  = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section tracker
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActiveId(e.target.id) })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    links.forEach(l => {
      const el = document.getElementById(l.toLowerCase())
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <span className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Monish
        </span>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {links.map(l => (
            <li key={l}>
              <button
                className={`navbar__link ${activeId === l.toLowerCase() ? 'navbar__link--active' : ''}`}
                onClick={() => scrollTo(l)}
              >
                {l}
                {activeId === l.toLowerCase() && <span className="navbar__link-dot" />}
              </button>
            </li>
          ))}
          <li>
            <a className="navbar__cta" href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </li>
        </ul>

        <button className="navbar__burger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
        </button>
      </div>
    </nav>
  )
}
