import Link from 'next/link'
import React from 'react'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Contato | Gabriela Nunes',
  description: 'Fale com a Gabriela Nunes pelo WhatsApp ou por email para agendar atendimento.',
  canonical: '/contato',
})

export default function ContatoPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 lg:py-24 space-y-6">
      <p className="uppercase tracking-[0.24em] text-xs text-[color:var(--color-textSoft)]">Contato</p>
      <h1 className="serif-heading text-4xl lg:text-5xl">Vamos conversar?</h1>
      <p className="text-lg">A CTA principal continua sendo WhatsApp, com contato por email como apoio.</p>
      <div className="flex flex-wrap gap-3">
        <Link href="https://wa.me/5500000000000" className="rounded-full bg-[color:var(--color-accent)] px-5 py-3 text-white">
          WhatsApp
        </Link>
        <a href="mailto:contato@gabrielanunes.com.br" className="rounded-full border border-[color:var(--color-border)] px-5 py-3">
          Enviar email
        </a>
      </div>
    </main>
  )
}
