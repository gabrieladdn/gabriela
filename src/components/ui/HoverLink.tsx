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
      className="hover-link"
    >
      {children}

      <style>{`
        .hover-link {
          display: inline-flex;
          align-items: center;
          padding: 14px 40px;
          border-radius: 9999px;
          background: var(--color-secondary);
          box-shadow: 0 6px 24px rgba(143,75,66,0.25);
          font-size: 0.8125rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #fff;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .hover-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(143,75,66,0.35);
        }
      `}</style>
    </a>
  )
}
