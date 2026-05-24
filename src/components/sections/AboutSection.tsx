 'use client'

import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'
import { aboutContent } from '@/content/sections'

export function AboutSection() {
  const aboutSummary = aboutContent.slice(0, 2)

  return (
    <section id="sobre" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <Reveal delay={1}>
              <h2 className="about-title">Sobre mim</h2>
            </Reveal>

            {aboutSummary.map((content, i) => (
              <Reveal key={i} delay={i + 2}>
                {i === 0 ? (
                  <blockquote className="blockquote-accent">{content}</blockquote>
                ) : (
                  <p className="about-paragraph about-paragraph-strong">{content}</p>
                )}
              </Reveal>
            ))}

            <Reveal delay={4}>
              <Link href="/sobre-mim/" className="about-more-link">
                Saiba mais
              </Link>
            </Reveal>
          </div>

          <Reveal className="about-visual">
            <div className="about-visual-shell">
              <div aria-hidden className="about-frame" />
              <div className="about-photo">
                <span className="about-photo-text">Foto da Gabriela</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .about-section {
          overflow: hidden;
          padding-block: clamp(64px, 10vh, var(--section-gap-desktop));
          background: var(--color-background);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 64px;
          align-items: flex-start;
        }

        .about-text {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .about-title {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 3vw, 2.25rem);
          font-weight: 600;
          color: var(--color-on-surface);
        }

        .about-paragraph {
          font-size: 1rem;
          line-height: 1.75;
          color: var(--color-on-surface-variant);
        }

        .about-paragraph-strong {
          font-size: 1.0625rem;
          color: var(--color-on-surface);
        }

        .about-more-link {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          margin-top: 8px;
          padding: 12px 22px;
          border-radius: 9999px;
          background: var(--color-secondary);
          color: #fff;
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          box-shadow: 0 8px 28px rgba(143,75,66,0.2);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .about-more-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(143,75,66,0.3);
        }

        .about-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-top: 16px;
        }

        .about-stat {
          padding: 20px 24px;
          border-radius: 16px;
          background: var(--color-surface-container-low);
        }

        .about-stat-value {
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 700;
          line-height: 1;
          color: var(--color-secondary);
        }

        .about-stat-label {
          margin-top: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--color-on-surface-variant);
        }

        .about-visual {
          position: relative;
        }

        .about-visual-shell {
          position: relative;
          border-radius: 32px;
          overflow: visible;
        }

        .about-frame {
          position: absolute;
          inset: -24px;
          z-index: 0;
          border: 10px solid var(--color-surface-container-high);
          border-radius: 40px;
          transition: transform 0.5s ease;
        }

        .about-visual:hover .about-frame {
          transform: scale(1.02);
        }

        .about-photo {
          position: relative;
          z-index: 1;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          border-radius: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--color-surface-container-high), var(--color-surface-container-low));
          filter: grayscale(0.2);
          transition: filter 0.7s;
        }

        .about-photo:hover {
          filter: grayscale(0);
        }

        .about-photo-text {
          font-family: var(--font-display);
          font-size: 0.9rem;
          color: var(--color-on-surface-variant);
          opacity: 0.5;
        }

        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 3fr 2fr;
          }

          .about-grid > *:first-child {
            order: 1;
          }

          .about-grid > *:last-child {
            order: 2;
          }
        }
      `}</style>
    </section>
  )
}
