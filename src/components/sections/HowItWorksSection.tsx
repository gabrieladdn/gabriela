'use client'

import { Reveal } from '@/components/ui/Reveal'

const steps = [
  {
    icon: '▶',
    title: 'Plataforma Segura',
    description:
      'Sessões realizadas via vídeo com total sigilo e criptografia, garantindo sua privacidade.',
  },
  {
    icon: '◷',
    title: 'Flexibilidade',
    description:
      'Sessões semanais com horários que se adaptam à sua rotina, no conforto da sua casa.',
  },
  {
    icon: '✦',
    title: 'Acolhimento Global',
    description:
      'Atendimento para brasileiras residentes em qualquer lugar do mundo.',
  },
]

export function HowItWorksSection() {
  return (
    <section
      id="atendimento"
      style={{
        paddingBlock: 'clamp(64px, 10vh, var(--section-gap-desktop))',
        background: 'rgba(255,241,231,0.35)',
      }}
    >
      <div className="container">
        <Reveal style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
              fontWeight: 600,
              color: 'var(--color-on-surface)',
            }}
          >
            Como funciona o atendimento online?
          </h2>
        </Reveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '48px',
          }}
        >
          {steps.map(({ icon, title, description }, i) => (
            <Reveal
              key={title}
              delay={((i + 1) as 1 | 2 | 3)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '24px',
              }}
            >
              {/* Circle icon */}
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: '#fff',
                  boxShadow: 'var(--shadow-ambient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  color: 'var(--color-secondary)',
                  transition: 'transform 0.3s',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')}
              >
                {icon}
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    color: 'var(--color-on-surface)',
                    marginBottom: '10px',
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    lineHeight: 1.65,
                    color: 'var(--color-on-surface-variant)',
                  }}
                >
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
