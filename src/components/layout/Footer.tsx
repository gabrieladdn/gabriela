'use client'

import Link from 'next/link'

const footerLinks = [
  { href: '/#home',       label: 'Home' },
  { href: '/#sobre',      label: 'Sobre Mim' },
  { href: '/#psicanalise', label: 'Psicanálise' },
  { href: '/#atendimento', label: 'Atendimento Online' },
  { href: '/blog',        label: 'Artigos' },
  { href: '/#contato',    label: 'Contato' },
]

export function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-surface-container-low)',
        borderTop: '1px solid rgba(199,199,191,0.3)',
        paddingBlock: '64px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '40px',
          }}
        >
          {/* Brand */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--color-on-surface)',
                marginBottom: '8px',
              }}
            >
              Gabriela Nunes
            </p>
            <p
              style={{
                fontSize: '0.8125rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--color-outline)',
              }}
            >
              Psicóloga Clínica
            </p>
          </div>

          {/* Nav Links */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '8px 32px',
            }}
          >
            {footerLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: 'var(--color-on-surface-variant)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = 'var(--color-secondary)')
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = 'var(--color-on-surface-variant)')
                }
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '12px' }}>
            {[
              { label: 'Instagram', icon: 'IG', href: 'https://instagram.com/gabriela.psic' },
              { label: 'E-mail',    icon: '✉',  href: 'mailto:contato@gabrielanunes.com.br' },
              { label: 'WhatsApp',  icon: 'WA', href: 'https://wa.me/5500000000000' },
            ].map(({ label, icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(143,75,66,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--color-secondary)',
                  transition: 'background 0.2s, color 0.2s, transform 0.2s',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = 'var(--color-secondary)'
                  ;(e.currentTarget as HTMLElement).style.color = '#fff'
                  ;(e.currentTarget as HTMLElement).style.transform = 'scale(1.1)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                  ;(e.currentTarget as HTMLElement).style.color = 'var(--color-secondary)'
                  ;(e.currentTarget as HTMLElement).style.transform = 'scale(1)'
                }}
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Divider + Legal */}
          <div
            style={{
              width: '100%',
              maxWidth: '480px',
              borderTop: '1px solid rgba(199,199,191,0.3)',
              paddingTop: '32px',
            }}
          >
            <p
              style={{
                fontSize: '0.8125rem',
                color: 'var(--color-on-surface-variant)',
                marginBottom: '12px',
              }}
            >
              Gabriela Nunes | Psicóloga Clínica | CRP 06/XXXXX
            </p>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '8px',
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'rgba(70,71,66,0.5)',
              }}
            >
              <Link href="/privacidade">Privacidade</Link>
              <span>•</span>
              <Link href="/termos">Termos de Uso</Link>
              <span>•</span>
              <Link href="/faq">FAQ</Link>
            </div>
            <p
              style={{
                marginTop: '24px',
                fontSize: '0.75rem',
                color: 'rgba(70,71,66,0.45)',
                letterSpacing: '0.03em',
              }}
            >
              © {new Date().getFullYear()} Gabriela Nunes — Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
