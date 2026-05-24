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
    <div className="blog-filter-bar">
      {categories.map(({ value, label }) => {
        const isActive = active === value
        return (
          <a
            key={value}
            href={value ? `/blog?categoria=${value}` : '/blog'}
            className={isActive ? 'blog-filter-pill blog-filter-pill-active' : 'blog-filter-pill'}
          >
            {label}
          </a>
        )
      })}
      <style>{`
        .blog-filter-bar {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 2px;
          scrollbar-width: none;
        }

        .blog-filter-bar::-webkit-scrollbar {
          display: none;
        }

        .blog-filter-pill {
          flex-shrink: 0;
          padding: 8px 18px;
          border: 1px solid rgba(199,199,191,0.5);
          border-radius: 9999px;
          background: #fff;
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: var(--color-on-surface-variant);
          transition: background 0.2s, color 0.2s, box-shadow 0.2s;
        }

        .blog-filter-pill-active {
          border: none;
          background: var(--color-secondary);
          color: #fff;
          box-shadow: 0 4px 16px rgba(143,75,66,0.2);
        }
      `}</style>
    </div>
  )
}
