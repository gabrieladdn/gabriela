import Link from 'next/link'
import React from 'react'
import Card from '@/components/Card'
import StructuredData from '@/components/StructuredData'
import { listeningAreas } from '@/lib/content'
import { pageMetadata, schemaBreadcrumb } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Áreas de escuta | Gabriela Nunes',
  description:
    'Conheça as áreas de escuta da psicoterapia: compulsão alimentar, bariátrica, ansiedade, autoestima e relacionamentos.',
  canonical: '/areas-de-escuta',
})

export default function AreasDeEscutaPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 lg:py-24 space-y-10">
      <StructuredData data={schemaBreadcrumb([{ name: 'Home', url: '/' }, { name: 'Áreas de escuta', url: '/areas-de-escuta' }])} />
      <section className="max-w-3xl space-y-4">
        <p className="uppercase tracking-[0.24em] text-xs text-[color:var(--color-textSoft)]">Áreas de escuta</p>
        <h1 className="serif-heading text-4xl lg:text-5xl">Cada demanda com a profundidade e o formato certos.</h1>
        <p className="text-lg">Inspirado na hierarquia do site atual, mas com apresentação mais moderna e limpa.</p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listeningAreas.map((area) => (
          <Card key={area.slug} title={area.title} excerpt={area.shortDescription} href={`/areas-de-escuta/${area.slug}`} />
        ))}
      </div>
      <Link href="/contato" className="inline-flex rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-white">
        Falar no WhatsApp
      </Link>
    </main>
  )
}
