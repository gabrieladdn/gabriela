"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/content/sections";

export function ServicesSection() {
  return (
    <section id="servicos" className="services-section">
      <div className="container">
        <div className="services-header">
          <Reveal className="services-header-copy">
            <h2 className="services-title">Áreas de escuta e cuidado</h2>
            <p className="services-description">
              Um espaço seguro para nomear o que dói e encontrar novos caminhos para o bem-estar.
            </p>
          </Reveal>
        </div>

        <div className="services-grid">
          {services.map(({ icon, title, description, offset, route }, i) => (
            <Reveal
              key={title}
              delay={(i % 5) as 0 | 1 | 2 | 3 | 4}
              className={`services-card${offset ? " services-card-offset" : ""}`}
            >
              <div className="services-icon">{icon}</div>
              <h3 className="services-card-title">{title}</h3>
              <p className="services-card-description">{description}</p>

              <Link href={route} className="services-card-link">
                Saiba mais
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .services-section {
          padding-block: clamp(64px, 10vh, var(--section-gap-desktop));
          background: var(--color-background);
        }

        .services-header {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 64px;
        }

        .services-header-copy {
          max-width: 500px;
        }

        .services-title {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 3vw, 2.25rem);
          font-weight: 600;
          color: var(--color-on-surface);
          margin-bottom: 12px;
        }

        .services-description {
          font-size: 1rem;
          line-height: 1.65;
          color: var(--color-on-surface-variant);
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
          align-items: start;
        }

        .services-card {
          padding: 36px 28px;
          border-radius: 24px;
          border: 1px solid rgba(253,235,220,0.7);
          background: #fff;
          box-shadow: var(--shadow-ambient);
          cursor: default;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .services-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 60px rgba(143,75,66,0.12);
        }

        .services-card-offset {
          margin-top: 32px;
        }

        .services-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-bottom: 24px;
          border-radius: 12px;
          background: rgba(143,75,66,0.08);
          font-size: 1.25rem;
          color: var(--color-secondary);
        }

        .services-card-title {
          font-family: var(--font-display);
          font-size: 1.125rem;
          font-weight: 600;
          line-height: 1.4;
          color: var(--color-on-surface);
          margin-bottom: 12px;
        }

        .services-card-description {
          font-size: 0.9375rem;
          line-height: 1.65;
          color: var(--color-on-surface-variant);
        }

        .services-card-link {
          display: inline-flex;
          align-items: center;
          margin-top: 20px;
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--color-secondary);
          transition: transform 0.2s, opacity 0.2s;
        }

        .services-card-link:hover {
          transform: translateX(2px);
          opacity: 0.85;
        }

        @media (max-width: 768px) {
          .services-card-offset {
            margin-top: 0;
          }
        }
      `}</style>
    </section>
  );
}
