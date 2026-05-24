'use client'

import { Reveal } from '@/components/ui/Reveal'

// Fallback testimonial data for the home page
const fallbackTestimonials = [
  {
    quote:
      'As sessões com a Gabriela me trouxeram uma clareza que eu não conseguia ter sozinha. Aprendi a ser mais gentil comigo mesma.',
    author: 'A. M., 32 anos',
  },
  {
    quote:
      'A forma como ela escuta e pontua as coisas é muito transformadora. Sinto que finalmente estou lidando com a minha ansiedade.',
    author: 'L. F., 28 anos',
  },
  {
    quote:
      'O atendimento online é impecável. Gabriela transmite uma paz e uma segurança incríveis, mesmo através da tela.',
    author: 'M. S., 40 anos',
  },
]

interface Testimonial {
  quote: string
  author: string
}

interface Props {
  testimonials?: Testimonial[]
}

export function TestimonialsSection({ testimonials = fallbackTestimonials }: Props) {
  return (
    <section
      style={{
        paddingBlock: 'clamp(64px, 10vh, var(--section-gap-desktop))',
        background: 'var(--color-background)',
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
            O que dizem as pacientes
          </h2>
        </Reveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {testimonials.map(({ quote, author }, i) => (
            <Reveal
              key={i}
              delay={((i + 1) as 1 | 2 | 3)}
              style={{
                position: 'relative',
                background: '#fff',
                borderRadius: '20px',
                padding: '40px 32px 32px',
                border: '1px solid var(--color-surface-container-low)',
                boxShadow: '0 4px 24px rgba(143,75,66,0.06)',
                transition: 'box-shadow 0.3s, transform 0.3s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow = '0 12px 40px rgba(143,75,66,0.1)'
                el.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow = '0 4px 24px rgba(143,75,66,0.06)'
                el.style.transform = 'translateY(0)'
              }}
            >
              {/* Quote mark */}
              <span
                aria-hidden
                style={{
                  position: 'absolute',
                  top: '-18px',
                  left: '24px',
                  fontFamily: 'var(--font-display)',
                  fontSize: '5rem',
                  lineHeight: 1,
                  color: 'var(--color-tertiary-fixed-dim)',
                  opacity: 0.35,
                  userSelect: 'none',
                }}
              >
                "
              </span>

              <p
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: 1.75,
                  fontStyle: 'italic',
                  color: 'var(--color-on-surface-variant)',
                  marginBottom: '24px',
                }}
              >
                {quote}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'var(--color-surface-container)',
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: 'var(--color-secondary)',
                    letterSpacing: '0.02em',
                  }}
                >
                  {author}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
