 'use client'

import { Reveal } from '@/components/ui/Reveal'
import { howSteps } from '@/content/sections'

export function HowItWorksSection() {
  return (
    <section id="atendimento" className="how-section">
      <div className="container">
        <Reveal className="how-header">
          <h2 className="how-title">
            Como funciona o atendimento online?
          </h2>
        </Reveal>

        <div className="how-grid">
          {howSteps.map(({ icon, title, description }, i) => (
            <Reveal
              key={title}
              delay={((i + 1) as 1 | 2 | 3)}
              className="how-step"
            >
              <div className="how-step-icon">
                {icon}
              </div>

              <div>
                <h3 className="how-step-title">
                  {title}
                </h3>
                <p className="how-step-description">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .how-section {
          padding-block: clamp(64px, 10vh, var(--section-gap-desktop));
          background: rgba(255,241,231,0.35);
        }

        .how-header {
          text-align: center;
          margin-bottom: 64px;
        }

        .how-title {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 3vw, 2.25rem);
          font-weight: 600;
          color: var(--color-on-surface);
        }

        .how-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 48px;
        }

        .how-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 24px;
        }

        .how-step-icon {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #fff;
          box-shadow: var(--shadow-ambient);
          font-size: 1.5rem;
          color: var(--color-secondary);
          transition: transform 0.3s;
        }

        .how-step-icon:hover {
          transform: scale(1.1);
        }

        .how-step-title {
          font-family: var(--font-display);
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--color-on-surface);
          margin-bottom: 10px;
        }

        .how-step-description {
          font-size: 0.9375rem;
          line-height: 1.65;
          color: var(--color-on-surface-variant);
        }
      `}</style>
    </section>
  )
}
