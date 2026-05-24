'use client'

import { Reveal } from '@/components/ui/Reveal'

const stats = [
  { value: '7+', label: 'Anos de experiência' },
  { value: '500+', label: 'Vidas tocadas' },
]

export function AboutSection() {
  return (
    <section
      id="sobre"
      style={{
        paddingBlock: 'clamp(64px, 10vh, var(--section-gap-desktop))',
        background: 'var(--color-background)',
        overflow: 'hidden',
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
          className="about-grid"
        >
          {/* Text */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Reveal delay={1}>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  fontWeight: 600,
                  color: 'var(--color-on-surface)',
                }}
              >
                Sou Gabriela Nunes
              </h2>
              <div
                style={{
                  width: '64px',
                  height: '3px',
                  background: 'var(--color-secondary)',
                  borderRadius: '2px',
                  marginTop: '16px',
                }}
              />
            </Reveal>

            <Reveal delay={2}>
              <p
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.75,
                  color: 'var(--color-on-surface)',
                }}
              >
                Psicóloga clínica dedicada a acompanhar processos de cura e autoconhecimento.
                Minha prática é pautada na ética psicanalítica, buscando sempre oferecer um olhar
                sensível e humano para as dores da alma contemporânea.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.75,
                  color: 'var(--color-on-surface-variant)',
                }}
              >
                Acredito que a terapia é um ato de coragem e um investimento na liberdade. Minha
                missão é ajudar você a se desvencilhar dos pesos que não são seus e a habitar sua
                própria pele com mais leveza e menos cobrança.
              </p>
            </Reveal>

            <Reveal delay={4}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                  marginTop: '16px',
                }}
              >
                {stats.map(({ value, label }) => (
                  <div
                    key={label}
                    style={{
                      padding: '20px 24px',
                      background: 'var(--color-surface-container-low)',
                      borderRadius: '16px',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.75rem',
                        fontWeight: 700,
                        color: 'var(--color-secondary)',
                        lineHeight: 1,
                      }}
                    >
                      {value}
                    </p>
                    <p
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: 'var(--color-on-surface-variant)',
                        marginTop: '6px',
                      }}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Image */}
          <Reveal style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '32px',
                overflow: 'visible',
              }}
            >
              {/* Decorative frame */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  inset: '-24px',
                  border: '10px solid var(--color-surface-container-high)',
                  borderRadius: '40px',
                  zIndex: 0,
                  transition: 'transform 0.5s ease',
                }}
                className="about-frame"
              />
              {/* Photo */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 1,
                  borderRadius: '30px',
                  overflow: 'hidden',
                  aspectRatio: '4/5',
                  background:
                    'linear-gradient(135deg, var(--color-surface-container-high), var(--color-surface-container-low))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  filter: 'grayscale(0.2)',
                  transition: 'filter 0.7s',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.filter = 'grayscale(0)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.filter = 'grayscale(0.2)')}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.9rem',
                    color: 'var(--color-on-surface-variant)',
                    opacity: 0.5,
                  }}
                >
                  Foto da Gabriela
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .about-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr 1fr;
          }
          .about-grid > *:first-child { order: 1; }
          .about-grid > *:last-child { order: 2; }
        }
        .about-frame:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  )
}
