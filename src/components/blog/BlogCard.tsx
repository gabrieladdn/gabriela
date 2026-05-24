'use client'

import Link from 'next/link'
import Image from 'next/image'

interface BlogCardProps {
  slug: string
  title: string
  excerpt: string
  category: string
  publishedAt?: string
  readingTime?: number
  coverImageUrl?: string
  coverImageAlt?: string
}

const categoryLabels: Record<string, string> = {
  ansiedade:              'Ansiedade',
  autoestima:             'Autoestima',
  relacionamentos:        'Relacionamentos',
  psicanalise:            'Psicanálise',
  autoconhecimento:       'Autoconhecimento',
  'corpo-e-alimentacao':  'Corpo e Alimentação',
  'saude-mental':         'Saúde Mental',
}

export function BlogCard({
  slug,
  title,
  excerpt,
  category,
  publishedAt,
  readingTime,
  coverImageUrl,
  coverImageAlt,
}: BlogCardProps) {
  const formattedDate = publishedAt
    ? new Date(publishedAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    : null

  return (
    <Link
      href={`/blog/${slug}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '20px',
        overflow: 'hidden',
        background: '#fff',
        border: '1px solid rgba(253,235,220,0.7)',
        boxShadow: 'var(--shadow-card)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        textDecoration: 'none',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(-4px)'
        el.style.boxShadow = '0 16px 48px rgba(143,75,66,0.12)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement
        el.style.transform = 'translateY(0)'
        el.style.boxShadow = 'var(--shadow-card)'
      }}
    >
      {/* Cover image */}
      <div
        style={{
          position: 'relative',
          aspectRatio: '16/9',
          overflow: 'hidden',
          background: 'var(--color-surface-container)',
        }}
      >
        {coverImageUrl ? (
          <Image
            src={coverImageUrl}
            alt={coverImageAlt || title}
            fill
            style={{ objectFit: 'cover', transition: 'transform 0.5s' }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              background:
                'linear-gradient(135deg, var(--color-surface-container-high), var(--color-surface-container))',
            }}
          />
        )}
        {/* Category badge */}
        <span
          style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            background: 'rgba(255,248,244,0.95)',
            backdropFilter: 'blur(8px)',
            color: 'var(--color-secondary)',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '5px 12px',
            borderRadius: '9999px',
          }}
        >
          {categoryLabels[category] || category}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: '28px 28px 32px', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.125rem',
            fontWeight: 600,
            color: 'var(--color-on-surface)',
            lineHeight: 1.4,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: '0.875rem',
            lineHeight: 1.65,
            color: 'var(--color-on-surface-variant)',
            flex: 1,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {excerpt}
        </p>

        {/* Meta */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            marginTop: '8px',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.04em',
            color: 'var(--color-outline)',
            textTransform: 'uppercase',
          }}
        >
          {formattedDate && <span>{formattedDate}</span>}
          {readingTime && <span>· {readingTime} min de leitura</span>}
        </div>
      </div>
    </Link>
  )
}
