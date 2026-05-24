import type { Metadata } from 'next'

const FALLBACK_SITE_URL = 'https://gabrielanunes.com.br'

function normalizePath(pathname: string): string {
  if (!pathname.startsWith('/')) return `/${pathname}`
  return pathname
}

export function getSiteUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_SERVER_URL
  if (!envUrl) return FALLBACK_SITE_URL

  return envUrl.endsWith('/') ? envUrl.slice(0, -1) : envUrl
}

export function buildCanonicalUrl(pathname: string): string {
  return `${getSiteUrl()}${normalizePath(pathname)}`
}

interface ServiceMetadataInput {
  title: string
  description: string
  pathname: string
  image: string
}

export function buildServiceMetadata(input: ServiceMetadataInput): Metadata {
  const canonical = buildCanonicalUrl(input.pathname)
  const image = input.image.startsWith('http') ? input.image : buildCanonicalUrl(input.image)

  return {
    title: input.title,
    description: input.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: input.title,
      description: input.description,
      url: canonical,
      type: 'website',
      images: [
        {
          url: image,
          alt: input.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description: input.description,
      images: [image],
    },
  }
}

export function buildBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
