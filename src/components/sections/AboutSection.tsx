"use client";

import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { aboutHomepage } from "@/content/sections";

export function AboutSection() {
  return (
    <section id="sobre" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <Reveal delay={1}>
              <h2 className="about-title">Sobre mim</h2>
            </Reveal>

            <Reveal delay={2}>
              <blockquote className="blockquote-accent">{aboutHomepage.blockquote}</blockquote>
            </Reveal>

            {aboutHomepage.paragraphs.map((content, i) => (
              <Reveal key={i} delay={i + 3}>
                <p className="about-paragraph">{content}</p>
              </Reveal>
            ))}

            <Reveal delay={6}>
              <Link href="/sobre-mim/" className="about-more-link">
                Saiba mais
              </Link>
            </Reveal>
          </div>

          <Reveal className="about-visual">
            <div className="about-visual-shell">
              <div aria-hidden className="about-frame" />
              <div className="about-photo">
                <Image
                  src="/images/sobre.jpeg"
                  alt="Gabriela Nunes - Psicóloga Clínica"
                  fill
                  sizes="(max-width: 900px) 100vw, 400px"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Nova Seção de Nichos/Diferenciais */}
        <div className="about-niches-wrapper">
          <Reveal>
            <h3 className="about-niches-title">{aboutHomepage.nichesTitle}</h3>
          </Reveal>
          <div className="about-niches-grid">
            {aboutHomepage.niches.map((niche, idx) => (
              <Reveal key={idx} delay={idx + 1} className={`niche-card niche-card-${niche.colorType}`}>
                <p className="niche-text">{niche.text}</p>
              </Reveal>
            ))}
          </div>
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
          font-size: 1.05rem;
          line-height: 1.75;
          color: var(--color-on-surface-variant);
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

        .about-niches-wrapper {
          margin-top: clamp(48px, 8vh, 80px);
          border-top: 1px solid rgba(143, 75, 66, 0.1);
          padding-top: clamp(36px, 6vh, 60px);
        }

        .about-niches-title {
          font-family: var(--font-display);
          font-size: clamp(1.5rem, 2.5vw, 1.875rem);
          font-weight: 600;
          line-height: 1.3;
          color: var(--color-on-surface);
          text-align: center;
          margin-bottom: 36px;
        }

        .about-niches-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .niche-card {
          padding: 32px 28px;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .niche-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-card);
        }

        .niche-text {
          font-size: 0.98rem;
          line-height: 1.65;
          text-align: center;
        }

        /* Distinct, soft color themes for niches */
        .niche-card-terracotta {
          background: rgba(143, 75, 66, 0.05);
          border: 1px solid rgba(143, 75, 66, 0.12);
        }
        .niche-card-terracotta .niche-text {
          color: var(--color-secondary);
        }

        .niche-card-sage {
          background: rgba(118, 126, 114, 0.06);
          border: 1px solid rgba(118, 126, 114, 0.14);
        }
        .niche-card-sage .niche-text {
          color: #555e51;
        }

        .niche-card-taupe {
          background: rgba(130, 118, 112, 0.05);
          border: 1px solid rgba(130, 118, 112, 0.12);
        }
        .niche-card-taupe .niche-text {
          color: #685b54;
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

        @media (max-width: 900px) {
          .about-niches-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>
    </section>
  );
}

