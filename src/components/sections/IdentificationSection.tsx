'use client'

import { Reveal } from '@/components/ui/Reveal'

const cards = [
  {
    icon: '🌿',
    text: 'Você sente que precisa dar conta de tudo sozinha, mas a conta não fecha.',
  },
  {
    icon: '✦',
    text: 'A sensação de que nunca é o suficiente, independente de quanto você se esforce.',
  },
  {
    icon: '◎',
    text: 'A ansiedade que surge do medo de errar ou de decepcionar as expectativas alheias.',
  },
]

export function IdentificationSection() {
  return (
    <section
      style={{
        paddingBlock: 'clamp(64px, 10vh, var(--section-gap-desktop))',
        background: 'rgba(255,241,231,0.4)',
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
              marginBottom: '16px',
              lineHeight: 1.3,
            }}
          >
            Talvez, por fora, pareça que está tudo bem...
          </h2>
          <p
            style={{
              fontSize: '1.0625rem',
              color: 'var(--color-on-surface-variant)',
              maxWidth: '520px',
              margin: '0 auto',
            }}
          >
            Mas por dentro, o cansaço é silencioso e a mente nunca para.
          </p>
        </Reveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {cards.map(({ icon, text }, i) => (
            <Reveal
              key={i}
              delay={((i + 1) as 1 | 2 | 3)}
              style={{
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                borderRadius: '24px',
                padding: '40px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                boxShadow: 'var(--shadow-ambient)',
                transition: 'transform 0.3s',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              }}
            >
              <span
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(143,75,66,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  color: 'var(--color-secondary)',
                  flexShrink: 0,
                }}
              >
                {icon}
              </span>
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.65,
                  color: 'var(--color-on-surface)',
                }}
              >
                {text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
