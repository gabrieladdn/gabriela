import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { psychoText, psychoBullets } from "@/content/sections";

export function PsychoanalysisSection() {
  return (
    <section id="psicanalise" className="psycho-section">
      <div className="container">
        <div className="psycho-grid">
          <Reveal className="psycho-visual">
            <div className="psycho-visual-shell">
              {/* Imagem Principal */}
              <div className="psycho-circle">
                <Image
                  src="/images/consultorio.jpeg"
                  alt="Consultório de Gabriela Nunes"
                  fill
                  sizes="(max-width: 900px) 100vw, 480px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Detalhes Flutuantes (extra1, extra2, extra3) */}
              <div className="psycho-badge-pic psycho-badge-pic-1">
                <Image
                  src="/images/extra1.jpg"
                  alt="Detalhes do consultório - Livros"
                  fill
                  sizes="110px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="psycho-badge-pic psycho-badge-pic-2">
                <Image
                  src="/images/extra2.jpg"
                  alt="Detalhes do consultório - Escrivaninha"
                  fill
                  sizes="130px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="psycho-badge-pic psycho-badge-pic-3">
                <Image
                  src="/images/extra3.jpg"
                  alt="Detalhes do consultório - Ambiente"
                  fill
                  sizes="100px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div aria-hidden className="psycho-blob" />
            </div>
          </Reveal>

          <div className="psycho-copy">
            <Reveal delay={1}>
              <h2 className="psycho-title">{psychoText.title}</h2>
            </Reveal>

            <Reveal delay={2}>
              <blockquote className="blockquote-accent">{psychoText.blockquote}</blockquote>
            </Reveal>

            <Reveal delay={3}>
              <div className="psycho-paragraphs">
                {psychoText.paragraphs.map((p, idx) => (
                  <p key={idx} className="psycho-paragraph">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={4}>
              <ul className="psycho-bullets">
                {psychoBullets.map((item) => (
                  <li key={item} className="psycho-bullet">
                    <span className="psycho-bullet-icon">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        .psycho-section {
          padding-block: clamp(64px, 10vh, var(--section-gap-desktop));
          background: var(--color-surface-container-lowest);
        }

        .psycho-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 64px;
          align-items: center;
        }

        .psycho-visual {
          position: relative;
        }

        .psycho-visual-shell {
          position: relative;
          width: 100%;
          max-width: 480px;
          margin: 0 auto;
        }

        .psycho-circle {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          aspect-ratio: 1;
          overflow: hidden;
          border: 8px solid var(--color-background);
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-surface-container-high), var(--color-surface-container));
          box-shadow: var(--shadow-hero);
        }

        .psycho-badge-pic {
          position: absolute;
          overflow: hidden;
          border-radius: 50%;
          border: 6px solid var(--color-background);
          box-shadow: var(--shadow-card);
          z-index: 2;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .psycho-badge-pic:hover {
          transform: scale(1.1) translateY(-4px);
          z-index: 3;
        }

        .psycho-badge-pic-1 {
          top: -10px;
          right: -10px;
          width: 110px;
          height: 110px;
        }

        .psycho-badge-pic-2 {
          bottom: -15px;
          left: -20px;
          width: 130px;
          height: 130px;
        }

        .psycho-badge-pic-3 {
          bottom: 20px;
          right: -25px;
          width: 100px;
          height: 100px;
        }

        .psycho-blob {
          position: absolute;
          top: -40px;
          left: -40px;
          z-index: -1;
          width: 130px;
          height: 130px;
          border-radius: 50%;
          background: rgba(246,184,170,0.2);
          filter: blur(32px);
        }

        @media (max-width: 600px) {
          .psycho-badge-pic {
            display: none;
          }
        }

        .psycho-copy {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .psycho-title {
          font-family: var(--font-display);
          font-size: clamp(1.75rem, 3vw, 2.25rem);
          font-weight: 600;
          line-height: 1.3;
          color: var(--color-on-surface);
        }

        .psycho-paragraphs {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .psycho-paragraph {
          font-size: 1rem;
          line-height: 1.75;
          color: var(--color-on-surface-variant);
        }

        .psycho-bullets {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 8px;
          padding: 0;
          list-style: none;
        }

        .psycho-bullet {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: var(--color-secondary);
        }

        .psycho-bullet-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(143,75,66,0.12);
          font-size: 0.7rem;
        }

        @media (min-width: 900px) {
          .psycho-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
}
