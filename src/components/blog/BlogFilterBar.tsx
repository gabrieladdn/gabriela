'use client'

interface Category {
  value: string
  label: string
}

interface Props {
  categories: Category[]
  active: string
}

export function BlogFilterBar({ categories, active }: Props) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '8px',
        overflowX: 'auto',
        scrollbarWidth: 'none',
        paddingBottom: '2px',
      }}
    >
      {categories.map(({ value, label }) => {
        const isActive = active === value
        return (
          <a
            key={value}
            href={value ? `/blog?categoria=${value}` : '/blog'}
            style={{
              flexShrink: 0,
              padding: '8px 18px',
              borderRadius: '9999px',
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              transition: 'background 0.2s, color 0.2s',
              background: isActive ? 'var(--color-secondary)' : '#fff',
              color: isActive ? '#fff' : 'var(--color-on-surface-variant)',
              border: isActive ? 'none' : '1px solid rgba(199,199,191,0.5)',
              boxShadow: isActive ? '0 4px 16px rgba(143,75,66,0.2)' : 'none',
            }}
          >
            {label}
          </a>
        )
      })}
    </div>
  )
}
