'use client'

import { Reveal } from '@/components/ui/Reveal'

export function CTASection() {
  return (
    <section
      id="contato"
      style={{
        paddingBlock: 'clamp(64px, 10vh, var(--section-gap-desktop))',
        background: 'var(--color-secondary)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative blobs */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: '-160px',
          left: '-160px',
          width: '384px',
          height: '384px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)',
          filter: 'blur(60px)',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '-80px',
          right: '-80px',
          width: '256px',
          height: '256px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <Reveal>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
              fontWeight: 600,
              color: '#fff',
              marginBottom: '24px',
              lineHeight: 1.3,
            }}
          >
            Dê o primeiro passo rumo a uma vida mais leve.
          </h2>
        </Reveal>

        <Reveal delay={1}>
          <p
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.88)',
              maxWidth: '560px',
              margin: '0 auto 48px',
            }}
          >
            Estou aqui para ouvir o que você ainda não conseguiu dizer. Vamos iniciar sua jornada
            de cuidado?
          </p>
        </Reveal>

        <Reveal delay={2}>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#fff',
              color: 'var(--color-secondary)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.8125rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '18px 48px',
              borderRadius: '9999px',
              boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
              transition: 'transform 0.2s, background 0.2s',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
              ;(e.currentTarget as HTMLElement).style.background = 'var(--color-surface-container-low)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              ;(e.currentTarget as HTMLElement).style.background = '#fff'
            }}
          >
            Agendar atendimento via WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  )
}
