'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/#home',        label: 'Home',               section: 'home' },
  { href: '/#sobre',       label: 'Sobre Mim',          section: 'sobre' },
  { href: '/#psicanalise', label: 'Psicanálise',        section: 'psicanalise' },
  { href: '/#atendimento', label: 'Atendimento Online', section: 'atendimento' },
  { href: '/blog',         label: 'Artigos',            section: null },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled]       = useState(false)
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [activeSection, setActiveSection] = useState('')

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section via IntersectionObserver — only on home
  useEffect(() => {
    if (pathname !== '/') return
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [pathname])

  const isLinkActive = (link: typeof navLinks[0]) => {
    if (link.href === '/blog') return pathname.startsWith('/blog')
    return pathname === '/' && activeSection === link.section
  }

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        transition: 'box-shadow 0.3s',
        background: 'rgba(255,248,244,0.92)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        boxShadow: scrolled ? '0 1px 0 rgba(199,199,191,0.6)' : 'none',
      }}
    >
      <nav
        className="container"
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-on-surface)', letterSpacing: '-0.01em' }}>
            Gabriela Nunes
          </span>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--color-secondary)', flexShrink: 0 }} />
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-outline)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Psicóloga
          </span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          {navLinks.map((link) => {
            const active = isLinkActive(link)
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: active ? 'var(--color-secondary)' : 'var(--color-on-surface-variant)',
                  borderBottom: active ? '2px solid var(--color-secondary)' : '2px solid transparent',
                  paddingBottom: '2px',
                  transition: 'color 0.2s, border-color 0.2s',
                  whiteSpace: 'nowrap',
                }}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn"
          style={{
            background: 'var(--color-secondary)',
            color: '#fff',
            fontSize: '0.8125rem',
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            padding: '10px 24px',
            borderRadius: '9999px',
            boxShadow: '0 4px 16px rgba(143,75,66,0.25)',
            whiteSpace: 'nowrap',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'
            ;(e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(143,75,66,0.35)'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLElement).style.transform = 'scale(1)'
            ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(143,75,66,0.25)'
          }}
        >
          Agendar Consulta
        </a>

        {/* Burger */}
        <button
          className="mobile-burger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'none', flexDirection: 'column', gap: '5px' }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                background: 'var(--color-on-surface)',
                borderRadius: '2px',
                transition: 'transform 0.3s, opacity 0.3s',
                transform: mobileOpen
                  ? i === 0 ? 'translateY(7px) rotate(45deg)'
                  : i === 1 ? 'scaleX(0)'
                  : 'translateY(-7px) rotate(-45deg)'
                  : 'none',
                opacity: mobileOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        style={{
          maxHeight: mobileOpen ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
          background: 'rgba(255,248,244,0.97)',
          backdropFilter: 'blur(12px)',
          borderTop: mobileOpen ? '1px solid var(--color-outline-variant)' : 'none',
        }}
      >
        <div style={{ padding: '16px var(--margin-mobile) 24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                padding: '12px 8px',
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--color-on-surface-variant)',
                borderBottom: '1px solid var(--color-outline-variant)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            style={{
              marginTop: '16px',
              background: 'var(--color-secondary)',
              color: '#fff',
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              padding: '14px 24px',
              borderRadius: '9999px',
              textAlign: 'center',
            }}
          >
            Agendar Consulta
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .cta-btn     { display: none !important; }
          .mobile-burger { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
