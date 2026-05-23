import Link from 'next/link'
import React from 'react'

type CardProps = {
  title: string;
  excerpt?: string;
  href?: string;
};

export default function Card({ title, excerpt, href }: CardProps) {
  return (
    <article className="bg-[color:var(--color-surface)] p-6 rounded-lg shadow-soft border border-[color:var(--color-border)]">
      <h3 className="serif-heading text-lg text-[color:var(--color-text)]">{title}</h3>
      {excerpt && <p className="mt-2 text-sm">{excerpt}</p>}
      {href && (
        <Link href={href} className="inline-block mt-4 text-[color:var(--color-accent)] underline">
          Saiba mais
        </Link>
      )}
    </article>
  )
}
