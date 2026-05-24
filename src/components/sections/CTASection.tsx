'use client'

import { Reveal } from '@/components/ui/Reveal'
import { ctaText } from '@/content/sections'

export function CTASection() {
  return (
    <section id="contato" className="cta-section">
      <div aria-hidden className="cta-glows">
        <div className="cta-glow cta-glow-bottom-left" />
        <div className="cta-glow cta-glow-top-right" />
      </div>

      <div className="container cta-content">
        <Reveal>
          <h2 className="cta-title">{ctaText.title}</h2>
        </Reveal>

        {ctaText.descriptions.map((d, i) => (
          <Reveal key={i} delay={i + 1}>
            <p className="cta-description">{d}</p>
          </Reveal>
        ))}

        <Reveal delay={3}>
          <a href="https://wa.me/5513982007343" target="_blank" rel="noopener noreferrer" className="cta-button">
            {ctaText.button}
          </a>
        </Reveal>
      </div>

      <style>{`
        .cta-section {
          position: relative;
          overflow: hidden;
          padding-block: clamp(64px, 10vh, var(--section-gap-desktop));
          background: var(--color-secondary);
          color: #fff;
        }

        .cta-glows {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .cta-glow {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          filter: blur(60px);
        }

        .cta-glow-bottom-left {
          bottom: -160px;
          left: -160px;
          width: 384px;
          height: 384px;
        }

        .cta-glow-top-right {
          top: -80px;
          right: -80px;
          width: 256px;
          height: 256px;
        }

        .cta-content {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .cta-title {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 3vw, 2.25rem);
          font-weight: 600;
          line-height: 1.3;
          color: #fff;
          margin-bottom: 24px;
        }

        .cta-description {
          max-width: 640px;
          margin: 0 auto 6px;
          font-size: 1.0625rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.88);
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 18px 48px;
          border-radius: 9999px;
          background: #fff;
          color: var(--color-secondary);
          font-family: var(--font-body);
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          box-shadow: 0 8px 40px rgba(0,0,0,0.15);
          transition: transform 0.2s, background 0.2s;
          margin-top: 32px;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          background: var(--color-surface-container-low);
        }
      `}</style>
    </section>
  )
}
