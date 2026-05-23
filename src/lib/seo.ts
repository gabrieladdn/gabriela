import type { Metadata } from 'next'
import { siteUrl } from '@/config/env'

const title = 'Gabriela Nunes — Psicologia'
const description =
  'Psicoterapia com acolhimento, clareza e foco em compulsão alimentar, bariátrica, ansiedade e autoestima.'

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: 'Gabriela Nunes',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export function pageMetadata(params: {
  title: string
  description: string
  canonical: string
}) : Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: params.title,
    description: params.description,
    alternates: { canonical: params.canonical },
    openGraph: {
      title: params.title,
      description: params.description,
      url: `${siteUrl}${params.canonical}`,
      siteName: 'Gabriela Nunes',
      locale: 'pt_BR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: params.title,
      description: params.description,
    },
  }
}

export const schemaWebsite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Gabriela Nunes',
  url: siteUrl,
}

export const schemaOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Gabriela Nunes',
  url: siteUrl,
}

export const schemaPerson = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Gabriela Nunes',
  url: siteUrl,
}

export function schemaBreadcrumb(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.url}`,
    })),
  }
}

export function schemaFAQPage(questions: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function schemaArticle(params: { title: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.title,
    description: params.description,
    url: `${siteUrl}${params.url}`,
    author: { '@type': 'Person', name: 'Gabriela Nunes' },
    publisher: { '@type': 'Organization', name: 'Gabriela Nunes' },
  }
}

