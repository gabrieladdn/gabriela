import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'
import StructuredData from '@/components/StructuredData'
import { listeningAreas } from '@/lib/content'
import { pageMetadata, schemaBreadcrumb, schemaFAQPage } from '@/lib/seo'

type Props = { params: { slug: string } }

export function generateMetadata({ params }: Props) {
  const area = listeningAreas.find((item) => item.slug === params.slug)

  if (!area) {
    return pageMetadata({
      title: 'Área de escuta | Gabriela Nunes',
      description: 'Conteúdo não encontrado.',
      canonical: `/areas-de-escuta/${params.slug}`,
    })
  }

  return pageMetadata({
    title: `${area.title} | Gabriela Nunes`,
    description: area.shortDescription,
    canonical: `/areas-de-escuta/${area.slug}`,
  })
}

export default function ListeningAreaPage({ params }: Props) {
  const area = listeningAreas.find((item) => item.slug === params.slug)

  if (!area) {
    notFound()
  }

  const faq = area.faq.length ? area.faq : []

  return (
    <main className="max-w-4xl mx-auto px-6 py-16 lg:py-24 space-y-10">
      <StructuredData
        data={[
          schemaBreadcrumb([
            { name: 'Home', url: '/' },
            { name: 'Áreas de escuta', url: '/areas-de-escuta' },
            { name: area.title, url: `/areas-de-escuta/${area.slug}` },
          ]),
          ...(faq.length ? [schemaFAQPage(faq)] : []),
        ]}
      />

      <section className="space-y-4">
        <p className="uppercase tracking-[0.24em] text-xs text-[color:var(--color-textSoft)]">Área de escuta</p>
        <h1 className="serif-heading text-4xl lg:text-5xl">{area.title}</h1>
        <p className="text-lg">{area.shortDescription}</p>
      </section>

      <section className="space-y-4">
        <h2 className="serif-heading text-2xl">Como a terapia ajuda</h2>
        <p>{area.content}</p>
      </section>

      {faq.length ? (
        <section className="space-y-4">
          <h2 className="serif-heading text-2xl">Perguntas frequentes</h2>
          <div className="space-y-4">
            {faq.map((item) => (
              <article key={item.question} className="rounded-xl border border-[color:var(--color-border)] p-5 bg-[color:var(--color-surface)]">
                <h3 className="font-medium">{item.question}</h3>
                <p className="mt-2">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <Link href="/contato" className="inline-flex rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-white">
        Falar no WhatsApp
      </Link>
    </main>
  )
}
