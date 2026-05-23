import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'
import StructuredData from '@/components/StructuredData'
import { blogPosts } from '@/lib/content'
import { pageMetadata, schemaArticle, schemaBreadcrumb, schemaFAQPage } from '@/lib/seo'

type Props = { params: { slug: string } }

export function generateMetadata({ params }: Props) {
  const post = blogPosts.find((item) => item.slug === params.slug)

  if (!post) {
    return pageMetadata({
      title: 'Artigo | Gabriela Nunes',
      description: 'Conteúdo não encontrado.',
      canonical: `/blog/${params.slug}`,
    })
  }

  return pageMetadata({
    title: `${post.title} | Gabriela Nunes`,
    description: post.excerpt,
    canonical: `/blog/${post.slug}`,
  })
}

export default function BlogArticlePage({ params }: Props) {
  const post = blogPosts.find((item) => item.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 lg:py-24 space-y-8">
      <StructuredData
        data={[
          schemaBreadcrumb([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: post.title, url: `/blog/${post.slug}` },
          ]),
          schemaArticle({ title: post.title, description: post.excerpt, url: `/blog/${post.slug}` }),
          ...(post.faq.length ? [schemaFAQPage(post.faq)] : []),
        ]}
      />

      <section className="space-y-4">
        <p className="uppercase tracking-[0.24em] text-xs text-[color:var(--color-textSoft)]">Artigo</p>
        <h1 className="serif-heading text-4xl lg:text-5xl leading-tight">{post.title}</h1>
        <p className="text-lg">{post.excerpt}</p>
      </section>

      <article className="prose prose-neutral max-w-none">
        <p>{post.content}</p>
      </article>

      {post.faq.length ? (
        <section className="space-y-4">
          <h2 className="serif-heading text-2xl">Perguntas frequentes</h2>
          {post.faq.map((item) => (
            <div key={item.question} className="rounded-xl border border-[color:var(--color-border)] p-5 bg-[color:var(--color-surface)]">
              <h3 className="font-medium">{item.question}</h3>
              <p className="mt-2">{item.answer}</p>
            </div>
          ))}
        </section>
      ) : null}

      <div className="flex flex-wrap gap-3">
        {post.relatedAreas.map((slug) => (
          <Link key={slug} href={`/areas-de-escuta/${slug}`} className="rounded-full border border-[color:var(--color-border)] px-4 py-2">
            Área relacionada
          </Link>
        ))}
        <Link href="/contato" className="rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-white">
          Falar no WhatsApp
        </Link>
      </div>
    </main>
  )
}
