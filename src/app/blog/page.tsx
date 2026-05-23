import Link from 'next/link'
import React from 'react'
import Card from '@/components/Card'
import StructuredData from '@/components/StructuredData'
import { blogPosts } from '@/lib/content'
import { pageMetadata, schemaBreadcrumb } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Blog | Gabriela Nunes',
  description: 'Artigos sobre compulsão alimentar, ansiedade, bariátrica, autoestima e saúde emocional.',
  canonical: '/blog',
})

export default function BlogPage() {
  const featured = blogPosts[0]

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 lg:py-24 space-y-10">
      <StructuredData data={schemaBreadcrumb([{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }])} />
      <section className="max-w-3xl space-y-4">
        <p className="uppercase tracking-[0.24em] text-xs text-[color:var(--color-textSoft)]">Blog</p>
        <h1 className="serif-heading text-4xl lg:text-5xl">Conteúdo pensado para SEO, IA e leitura humana.</h1>
        <p className="text-lg">Layout simples, destaque do artigo principal e grade limpa.</p>
      </section>

      <article className="rounded-[2rem] bg-[color:var(--color-surface)] border border-[color:var(--color-border)] p-8 shadow-soft max-w-3xl">
        <p className="text-sm uppercase tracking-[0.2em]">Destaque</p>
        <h2 className="serif-heading mt-3 text-3xl">{featured.title}</h2>
        <p className="mt-3">{featured.excerpt}</p>
        <Link href={`/blog/${featured.slug}`} className="inline-flex mt-5 rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-white">
          Ler artigo
        </Link>
      </article>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.slice(1).map((post) => (
          <Card key={post.slug} title={post.title} excerpt={post.excerpt} href={`/blog/${post.slug}`} />
        ))}
      </div>
    </main>
  )
}
