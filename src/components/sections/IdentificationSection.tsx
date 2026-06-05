import { identification } from "@/content/sections";
import { Reveal } from "@/components/ui/Reveal";
import TextCarousel from "@/components/ui/TextCarousel";

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

          <div className="identification-carousel">
            <Reveal className="carousel-wrap">
              <p className="lead">E talvez você se reconheça em alguma dessas situações:</p>

              <TextCarousel items={identification.listItems} className="site-text-carousel" />

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

        .identification-carousel {
          max-width: 600px;
          margin: 0 auto;
        }

        .identification-carousel .lead {
          color: var(--color-on-surface-variant);
          font-size: 1.0625rem;
          text-align: center;
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
          .identification-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
