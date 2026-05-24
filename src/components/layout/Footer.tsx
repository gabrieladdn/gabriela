'use client'

import Link from 'next/link'
import { WHATSAPP_URL } from '@/lib/whatsapp'

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
    <footer className="footer-shell">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <p className="footer-brand-name">
              Gabriela Nunes
            </p>
            <p className="footer-brand-role">
              Psicóloga Clínica
            </p>
          </div>

          <div className="footer-nav-links">
            {footerLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="footer-nav-link">
                {label}
              </Link>
            ))}
          </div>

          <div className="footer-socials">
            {[
              { label: 'Instagram', icon: 'IG', href: 'https://instagram.com/gabriela.psic' },
              { label: 'E-mail',    icon: '✉',  href: 'mailto:contato@gabrielanunes.com.br' },
              { label: 'WhatsApp',  icon: 'WA', href: WHATSAPP_URL },
            ].map(({ label, icon, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="footer-social"
              >
                {icon}
              </a>
            ))}
          </div>

          <div className="footer-legal-shell">
            <p className="footer-legal-copy">
              Gabriela Nunes | Psicóloga Clínica | CRP 06/XXXXX
            </p>
            <div className="footer-legal-links">
              <Link href="/privacidade">Privacidade</Link>
              <span>•</span>
              <Link href="/termos">Termos de Uso</Link>
              <span>•</span>
              <Link href="/faq">FAQ</Link>
            </div>
            <p className="footer-copyright">
              © {new Date().getFullYear()} Gabriela Nunes — Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .footer-shell {
          padding-block: 64px;
          border-top: 1px solid rgba(199,199,191,0.3);
          background: var(--color-surface-container-low);
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
          text-align: center;
        }

        .footer-brand-name {
          margin-bottom: 8px;
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-on-surface);
        }

        .footer-brand-role {
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--color-outline);
        }

        .footer-nav-links {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px 32px;
        }

        .footer-nav-link {
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--color-on-surface-variant);
          transition: color 0.2s;
        }

        .footer-nav-link:hover {
          color: var(--color-secondary);
        }

        .footer-socials {
          display: flex;
          gap: 12px;
        }

        .footer-social {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border: 1.5px solid rgba(143,75,66,0.3);
          border-radius: 50%;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-secondary);
          transition: background 0.2s, color 0.2s, transform 0.2s;
        }

        .footer-social:hover {
          background: var(--color-secondary);
          color: #fff;
          transform: scale(1.1);
        }

        .footer-legal-shell {
          width: 100%;
          max-width: 480px;
          padding-top: 32px;
          border-top: 1px solid rgba(199,199,191,0.3);
        }

        .footer-legal-copy {
          margin-bottom: 12px;
          font-size: 0.8125rem;
          color: var(--color-on-surface-variant);
        }

        .footer-legal-links {
          display: flex;
          justify-content: center;
          gap: 8px;
          font-size: 0.75rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: rgba(70,71,66,0.5);
        }

        .footer-copyright {
          margin-top: 24px;
          font-size: 0.75rem;
          letter-spacing: 0.03em;
          color: rgba(70,71,66,0.45);
        }
      `}</style>
    </footer>
  )
}
