import { Reveal } from '@/components/ui/Reveal'

const bullets = [
  'Lugar de não julgamento',
  'Respeito ao seu tempo e ritmo',
  'Foco na singularidade de cada história',
]

export function PsychoanalysisSection() {
  return (
    <section
      id="psicanalise"
      style={{
        paddingBlock: 'clamp(64px, 10vh, var(--section-gap-desktop))',
        background: 'var(--color-surface-container-lowest)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '64px',
            alignItems: 'center',
          }}
          className="psycho-grid"
        >
          {/* Image side */}
          <Reveal style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '480px',
                margin: '0 auto',
              }}
            >
              {/* Circle image */}
              <div
                style={{
                  aspectRatio: '1',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '8px solid var(--color-background)',
                  boxShadow: 'var(--shadow-hero)',
                  background:
                    'linear-gradient(135deg, var(--color-surface-container-high), var(--color-surface-container))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.9rem',
                    color: 'var(--color-on-surface-variant)',
                    opacity: 0.5,
                  }}
                >
                  Foto do consultório
                </span>
              </div>
              {/* Decorative blob */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  top: '-40px',
                  left: '-40px',
                  width: '130px',
                  height: '130px',
                  borderRadius: '50%',
                  background: 'rgba(246,184,170,0.2)',
                  filter: 'blur(32px)',
                  zIndex: -1,
                }}
              />
            </div>
          </Reveal>

          {/* Text side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <Reveal delay={1}>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  fontWeight: 600,
                  color: 'var(--color-on-surface)',
                  lineHeight: 1.3,
                }}
              >
                A Psicanálise como escuta ética
              </h2>
            </Reveal>

            <Reveal delay={2}>
              <blockquote
                style={{
                  borderLeft: '3px solid var(--color-secondary)',
                  paddingLeft: '20px',
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: '1.125rem',
                  color: 'var(--color-secondary)',
                  lineHeight: 1.6,
                }}
              >
                "A análise não é sobre mudar quem você é, mas sobre descobrir quem você se tornou
                por trás de tantas camadas."
              </blockquote>
            </Reveal>

            <Reveal delay={3}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.75,
                    color: 'var(--color-on-surface-variant)',
                  }}
                >
                  Diferente de abordagens focadas apenas em metas, a psicanálise convida você a
                  investigar a raiz do seu sofrimento. É um processo de falar e ser ouvida de uma
                  maneira que você talvez nunca tenha experimentado.
                </p>
                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: 1.75,
                    color: 'var(--color-on-surface-variant)',
                  }}
                >
                  Em cada sessão, construímos juntas um vocabulário para seus sentimentos,
                  transformando a angústia em palavras e as palavras em novas formas de existir no
                  mundo.
                </p>
              </div>
            </Reveal>

            <Reveal delay={4}>
              <ul
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  listStyle: 'none',
                  padding: 0,
                  marginTop: '8px',
                }}
              >
                {bullets.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      letterSpacing: '0.02em',
                      color: 'var(--color-secondary)',
                    }}
                  >
                    <span
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        background: 'rgba(143,75,66,0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.7rem',
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        .psycho-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
          .psycho-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  )
}
