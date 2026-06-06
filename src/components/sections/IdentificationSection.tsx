import { identification } from "@/content/sections";
import { Reveal } from "@/components/ui/Reveal";

export function IdentificationSection() {
  return (
    <section className="identification-section">
      <div className="container">
        <Reveal className="identification-header">
          <h2 className="identification-title">Talvez por fora, pareça estar tudo bem.</h2>
        </Reveal>

        <div className="identification-content">
          <Reveal className="identification-description">
            <span className="identification-subtitle-text">
              Você estuda, trabalha, dá conta do que precisa, mas por dentro existe um cansaço
              constante. Uma voz que cobra, critica e nunca parece satisfeita.
            </span>
          </Reveal>

          <div className="identification-cards-wrapper">
            <Reveal className="carousel-wrap">
              <p className="lead">Você se identifica com alguma destas situações?</p>

              <div className="identification-grid-cards">
                {identification.listItems.map((item, idx) => (
                  <Reveal key={idx} delay={idx % 3} className="id-card">
                    <span className="id-card-icon">✦</span>
                    <p className="id-card-text">{item}</p>
                  </Reveal>
                ))}
              </div>

              <div className="identification-conclusion">
                <p className="conclusion">
                  Muitas vezes, sustentar esses sofrimentos sozinha(o) pode ser exaustivo. Quando a
                  dor encontra um espaço de escuta, algo também pode começar a se transformar.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        .identification-section {
          padding-block: clamp(64px, 10vh, var(--section-gap-desktop));
          background: rgba(255,241,231,0.4);
        }

        .identification-title {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 3vw, 2.25rem);
          font-weight: 600;
          line-height: 1.3;
          color: var(--color-on-surface);
          margin-bottom: 16px;
        }

        .identification-description {
          max-width: 520px;
          font-size: 1.0625rem;
          color: var(--color-on-surface-variant);
        }

        .identification-content {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .identification-cards-wrapper {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
        }

        .identification-cards-wrapper .lead {
          color: var(--color-on-surface-variant);
          font-size: 1.0625rem;
          text-align: center;
          margin-bottom: 24px;
        }

        .identification-grid-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
          margin-bottom: 32px;
          width: 100%;
        }

        .id-card {
          background: rgba(255, 255, 255, 0.45);
          border: 1px solid rgba(143, 75, 66, 0.08);
          border-radius: 16px;
          padding: 20px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s cubic-bezier(0.22, 1, 0.36, 1), background 0.3s ease;
        }

        .id-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(143, 75, 66, 0.05);
          background: rgba(255, 255, 255, 0.75);
        }

        .id-card-icon {
          color: var(--color-secondary);
          font-size: 0.75rem;
          line-height: 1.5;
          margin-top: 2px;
        }

        .id-card-text {
          font-size: 0.94rem;
          line-height: 1.5;
          color: var(--color-on-surface-variant);
          margin: 0;
        }

        .identification-conclusion .conclusion {
          padding: 16px 18px;
          border-radius: 12px;
          font-size: 0.98rem;
          line-height: 1.5;
          color: var(--color-on-surface-variant);
          margin-top: 12px;
          text-align: center;
        }

        @media (max-width: 880px) {
          .identification-grid-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
