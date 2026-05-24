'use client'

interface Props {
  href: string
  children: React.ReactNode
}

export function HoverLink({ href, children }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: 'var(--color-secondary)',
        color: '#fff',
        fontSize: '0.8125rem',
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        padding: '14px 40px',
        borderRadius: '9999px',
        boxShadow: '0 6px 24px rgba(143,75,66,0.25)',
        transition: 'transform 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
        ;(e.currentTarget as HTMLElement).style.boxShadow = '0 10px 32px rgba(143,75,66,0.35)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
        ;(e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(143,75,66,0.25)'
      }}
    >
      {children}
    </a>
  )
}
