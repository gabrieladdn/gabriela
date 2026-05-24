'use client'

import { Reveal } from '@/components/ui/Reveal'

export function HeroSection() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingBlock: 'clamp(64px, 10vh, 120px)',
      }}
    >
      {/* Background glow blobs */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            right: '-5%',
            width: '55%',
            aspectRatio: '1',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(246,184,170,0.25) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '-10%',
            width: '40%',
            aspectRatio: '1',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(253,235,220,0.6) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '48px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Text */}
          <div style={{ maxWidth: '620px' }}>
            <Reveal delay={1}>
              <p
                style={{
                  fontSize: '0.8125rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--color-secondary)',
                  marginBottom: '24px',
                }}
              >
                Psicoterapia Online
              </p>
            </Reveal>

            <Reveal delay={2}>
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                  color: 'var(--color-on-surface)',
                  marginBottom: '24px',
                }}
              >
                Psicoterapia online para pessoas que vivem em{' '}
                <em
                  style={{
                    color: 'var(--color-secondary)',
                    fontStyle: 'italic',
                    fontWeight: 400,
                  }}
                >
                  autocobrança
                </em>
                , ansiedade e dificuldade de se sentir suficientes.
              </h1>
            </Reveal>

            <Reveal delay={3}>
              <p
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.7,
                  color: 'var(--color-on-surface-variant)',
                  marginBottom: '40px',
                  maxWidth: '520px',
                }}
              >
                Atendimento clínico focado na saúde mental de mulheres, manejo da ansiedade e
                reconciliação com a própria história.
              </p>
            </Reveal>

            <Reveal delay={4}>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'var(--color-secondary)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '16px 36px',
                    borderRadius: '9999px',
                    boxShadow: '0 8px 32px rgba(143,75,66,0.28)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(143,75,66,0.38)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(143,75,66,0.28)'
                  }}
                >
                  Agendar terapia
                </a>

                <a
                  href="/#sobre"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    border: '1.5px solid rgba(143,75,66,0.35)',
                    color: 'var(--color-secondary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '16px 36px',
                    borderRadius: '9999px',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.background = 'rgba(143,75,66,0.06)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                  }}
                >
                  Conheça meu trabalho
                </a>
              </div>
            </Reveal>
          </div>

          {/* Image */}
          <Reveal
            delay={2}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '460px',
              justifySelf: 'center',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '4/5',
                borderRadius: '40px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-hero)',
              }}
            >
              {/* Placeholder — substitua pelo <Image> com a foto real */}
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  background:
                    'linear-gradient(160deg, var(--color-surface-container-high) 0%, var(--color-surface-container) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    color: 'var(--color-on-surface-variant)',
                    opacity: 0.5,
                  }}
                >
                  Foto da Gabriela
                </span>
              </div>
              {/* Overlay tint */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(143,75,66,0.04)',
                }}
              />
            </div>
            {/* Decorative ring */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: '-24px',
                borderRadius: '52px',
                border: '10px solid var(--color-surface-container-high)',
                zIndex: -1,
                transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)',
              }}
            />
            {/* Floating badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '-24px',
                background: '#fff',
                borderRadius: '16px',
                padding: '12px 20px',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#4ade80',
                  flexShrink: 0,
                  animation: 'pulse 2s infinite',
                }}
              />
              <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--color-on-surface)' }}>
                Atendendo online
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .hero-grid {
          grid-template-columns: 1fr;
        }
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
      `}</style>
    </section>
  )
}
