import type { Metadata } from 'next'
import { ServicePageTemplate } from '@/components/services/ServicePageTemplate'
import { servicePages } from '@/content/services'
import { buildBreadcrumbSchema, buildCanonicalUrl, buildServiceMetadata } from '@/lib/seo'

const service = servicePages['avaliacao-cirurgia-bariatrica']

export const metadata: Metadata = buildServiceMetadata({
  title: service.seo.title,
  description: service.seo.description,
  pathname: service.route,
  image: service.seo.image,
})

export default function AvaliacaoCirurgiaBariatricaPage() {
  const canonical = buildCanonicalUrl(service.route)

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: buildCanonicalUrl('/') },
    { name: 'Avaliação e Preparo para Cirurgia Bariátrica', url: canonical },
  ])

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: service.seo.title,
    description: service.seo.description,
    url: canonical,
    inLanguage: 'pt-BR',
    provider: {
      '@type': 'Person',
      name: 'Gabriela Nunes',
      jobTitle: 'Psicóloga Clínica',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicePageTemplate content={service} />
    </>
  )
}
