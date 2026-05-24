"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { heroText } from "@/content/sections";

export function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div aria-hidden className="hero-glows">
        <div className="hero-glow hero-glow-top-right" />
        <div className="hero-glow hero-glow-bottom-left" />
      </div>

      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <Reveal delay={1}>
              <p className="hero-kicker">{heroText.kicker}</p>
            </Reveal>

            <Reveal delay={2}>
              <h1 className="hero-title">
                {heroText.titleParts[0]}
                <em className="hero-title-emphasis">{heroText.titleParts[1]}</em>
                {heroText.titleParts[2]}
              </h1>
            </Reveal>

            <Reveal delay={3}>
              <p className="hero-description">{heroText.description}</p>
            </Reveal>

            <Reveal delay={4}>
              <div className="hero-actions">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-button hero-button-primary"
                >
                  {heroText.actions[0]}
                </a>

                <Link href="/#sobre" className="hero-button hero-button-secondary">
                  {heroText.actions[1]}
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={2} className="hero-visual">
            <div className="hero-photo-frame">
              <div className="hero-photo-placeholder">
                <span className="hero-photo-placeholder-text">Foto da Gabriela</span>
              </div>
              <div aria-hidden className="hero-photo-overlay" />
            </div>
            <div aria-hidden className="hero-photo-ring" />
            <div className="hero-status-badge">
              <span className="hero-status-dot" />
              <span className="hero-status-text">Atendendo online</span>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding-block: clamp(64px, 10vh, 120px);
        }

        .hero-glows {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .hero-glow {
          position: absolute;
          border-radius: 50%;
          aspect-ratio: 1;
        }

        .hero-glow-top-right {
          top: -10%;
          right: -5%;
          width: 55%;
          background: radial-gradient(circle, rgba(246,184,170,0.25) 0%, transparent 70%);
          filter: blur(60px);
        }

        .hero-glow-bottom-left {
          bottom: 0;
          left: -10%;
          width: 40%;
          background: radial-gradient(circle, rgba(253,235,220,0.6) 0%, transparent 70%);
          filter: blur(80px);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
        }

        .hero-copy {
          max-width: 620px;
        }

        .hero-kicker {
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-secondary);
          margin-bottom: 24px;
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--color-on-surface);
          margin-bottom: 24px;
        }

        .hero-title-emphasis {
          color: var(--color-secondary);
          font-style: italic;
          font-weight: 400;
        }

        .hero-description {
          font-size: 1.0625rem;
          line-height: 1.7;
          color: var(--color-on-surface-variant);
          margin-bottom: 40px;
          max-width: 520px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .hero-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 36px;
          border-radius: 9999px;
          font-family: var(--font-body);
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s, color 0.2s;
        }

        .hero-button-primary {
          background: var(--color-secondary);
          color: #fff;
          box-shadow: 0 8px 32px rgba(143,75,66,0.28);
        }

        .hero-button-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(143,75,66,0.38);
        }

        .hero-button-secondary {
          border: 1.5px solid rgba(143,75,66,0.35);
          color: var(--color-secondary);
          background: transparent;
        }

        .hero-button-secondary:hover {
          background: rgba(143,75,66,0.06);
        }

        .hero-visual {
          position: relative;
          width: 100%;
          max-width: 460px;
          justify-self: center;
        }

        .hero-photo-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 5;
          border-radius: 40px;
          overflow: hidden;
          box-shadow: var(--shadow-hero);
        }

        .hero-photo-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(160deg, var(--color-surface-container-high) 0%, var(--color-surface-container) 100%);
        }

        .hero-photo-placeholder-text {
          font-family: var(--font-display);
          font-size: 1rem;
          color: var(--color-on-surface-variant);
          opacity: 0.5;
        }

        .hero-photo-overlay {
          position: absolute;
          inset: 0;
          background: rgba(143,75,66,0.04);
        }

        .hero-photo-ring {
          position: absolute;
          inset: -24px;
          border-radius: 52px;
          border: 10px solid var(--color-surface-container-high);
          z-index: -1;
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }

        .hero-visual:hover .hero-photo-ring {
          transform: scale(1.02);
        }

        .hero-status-badge {
          position: absolute;
          bottom: 24px;
          left: -24px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          border-radius: 16px;
          background: #fff;
          box-shadow: var(--shadow-card);
        }

        .hero-status-dot {
          width: 10px;
          height: 10px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #4ade80;
          animation: pulse 2s infinite;
        }

        .hero-status-text {
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-on-surface);
        }

        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 3fr 2fr;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.3);
          }
        }
      `}</style>
    </section>
  );
}
