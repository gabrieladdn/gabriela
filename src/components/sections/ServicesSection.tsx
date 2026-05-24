'use client'

import { Reveal } from '@/components/ui/Reveal'

const services = [
  {
    icon: '◉',
    title: 'Autoestima e Autocrítica',
    description:
      'Lidar com o perfeccionismo paralisante, a vergonha e a busca incessante por aprovação.',
  },
  {
    icon: '◈',
    title: 'Corpo e Alimentação',
    description:
      'Questões sobre imagem corporal, compulsão alimentar e a relação difícil com o espelho.',
    offset: true,
  },
  {
    icon: '✦',
    title: 'Relações Afetivas',
    description:
      'Medo do abandono, sensação de vazio e dificuldades em estabelecer limites saudáveis.',
  },
  {
    icon: '◎',
    title: 'Ansiedade e Estresse',
    description:
      'Manejo de sintomas físicos, exaustão emocional e as crises de pânico silenciosas.',
    offset: true,
  },
]

export function ServicesSection() {
  return (
    <section
      id="servicos"
      style={{
        paddingBlock: 'clamp(64px, 10vh, var(--section-gap-desktop))',
        background: 'var(--color-background)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginBottom: '64px',
          }}
          className="services-header"
        >
          <Reveal style={{ maxWidth: '500px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: 600,
                color: 'var(--color-on-surface)',
                marginBottom: '12px',
              }}
            >
              Áreas de escuta e cuidado
            </h2>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--color-on-surface-variant)',
                lineHeight: 1.65,
              }}
            >
              Um espaço seguro para nomear o que dói e encontrar novos caminhos para o bem-estar.
            </p>
          </Reveal>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            alignItems: 'start',
          }}
        >
          {services.map(({ icon, title, description, offset }, i) => (
            <Reveal
              key={title}
              delay={((i % 4) as 0 | 1 | 2 | 3)}
              style={{
                background: '#fff',
                borderRadius: '24px',
                padding: '36px 28px',
                border: '1px solid rgba(253,235,220,0.7)',
                boxShadow: 'var(--shadow-ambient)',
                marginTop: offset ? '32px' : '0',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(-4px)'
                el.style.boxShadow = '0 24px 60px rgba(143,75,66,0.12)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'var(--shadow-ambient)'
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(143,75,66,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  color: 'var(--color-secondary)',
                  marginBottom: '24px',
                  flexShrink: 0,
                }}
              >
                {icon}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--color-on-surface)',
                  marginBottom: '12px',
                  lineHeight: 1.4,
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
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-staggered > * { margin-top: 0 !important; }
        }
      `}</style>
    </section>
  )
}
