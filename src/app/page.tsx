import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Card from '@/components/Card'
import StructuredData from '@/components/StructuredData'
import { listeningAreas } from '@/lib/content'
import { pageMetadata, schemaWebsite } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Gabriela Nunes — Psicologia',
  description:
    'Psicoterapia com acolhimento, clareza e foco em compulsão alimentar, bariátrica, ansiedade e autoestima.',
  canonical: '/',
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <StructuredData data={schemaWebsite} />

      <section className="max-w-6xl mx-auto px-6 py-16 lg:py-24 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div className="max-w-2xl space-y-6">
          <p className="uppercase tracking-[0.24em] text-xs text-[color:var(--color-textSoft)]">
            Psicologia clínica
          </p>
          <h1 className="serif-heading text-5xl lg:text-7xl leading-tight text-[color:var(--color-text)]">
            Acolhimento clínico para questões emocionais e alimentares.
          </h1>
          <p className="text-lg lg:text-xl max-w-xl">
            Psicoterapia para compulsão alimentar, cirurgia bariátrica, ansiedade, autoestima e
            relações com mais clareza e menos ruído.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contato"
              className="inline-flex items-center rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-white shadow-soft"
            >
              Falar no WhatsApp
            </Link>
            <Link
              href="/areas-de-escuta"
              className="inline-flex items-center rounded-full border border-[color:var(--color-border)] px-5 py-3"
            >
              Conhecer áreas de escuta
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-6 rounded-[2rem] bg-[color:var(--color-accent)]/10 blur-3xl" />
          <Image
            src="/hero-abstract.svg"
            alt="Abstração visual acolhedora em tons suaves"
            width={800}
            height={800}
            priority
            className="relative rounded-[2rem] border border-[color:var(--color-border)] shadow-soft"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16 lg:pb-24 space-y-8">
        <div className="max-w-2xl space-y-3">
          <p className="uppercase tracking-[0.24em] text-xs text-[color:var(--color-textSoft)]">
            Áreas de escuta
          </p>
          <h2 className="serif-heading text-3xl lg:text-4xl">
            Um ponto de partida claro para cada demanda.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listeningAreas.slice(0, 3).map((area) => (
            <Card
              key={area.slug}
              title={area.title}
              excerpt={area.shortDescription}
              href={`/areas-de-escuta/${area.slug}`}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
