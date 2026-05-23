import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import StructuredData from '@/components/StructuredData'
import { pageMetadata, schemaPerson } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Sobre | Gabriela Nunes',
  description:
    'Conheça a trajetória profissional, a abordagem clínica e o cuidado oferecido pela psicóloga Gabriela Nunes.',
  canonical: '/sobre',
})

export default function SobrePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 lg:py-24 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
      <StructuredData data={schemaPerson} />
      <Image
        src="/hero-abstract.svg"
        alt="Ilustração suave para a página sobre"
        width={800}
        height={800}
        className="rounded-[2rem] border border-[color:var(--color-border)] shadow-soft"
      />
      <section className="space-y-6">
        <p className="uppercase tracking-[0.24em] text-xs text-[color:var(--color-textSoft)]">
          Sobre Gabriela
        </p>
        <h1 className="serif-heading text-4xl lg:text-5xl leading-tight">Uma escuta clínica firme e acolhedora.</h1>
        <p className="text-lg">
          Esta página preserva a apresentação profissional, a abordagem, o cuidado e as áreas em que o atendimento atua.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/contato" className="rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-white">
            Agendar conversa
          </Link>
          <Link href="/areas-de-escuta" className="rounded-full border border-[color:var(--color-border)] px-5 py-3">
            Ver áreas de escuta
          </Link>
        </div>
      </section>
    </main>
  )
}
