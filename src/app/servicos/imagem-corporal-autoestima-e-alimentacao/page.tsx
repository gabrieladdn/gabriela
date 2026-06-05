import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { servicePages } from "@/content/services";
import { buildBreadcrumbSchema, buildCanonicalUrl, buildServiceMetadata } from "@/lib/seo";

const service = servicePages["imagem-corporal-autoestima-e-alimentacao"];

export const metadata: Metadata = buildServiceMetadata({
  title: service.seo.title,
  description: service.seo.description,
  pathname: service.route,
  image: service.seo.image,
});

export default function ImagemCorporalAutoestimaAlimentacaoPage() {
  const canonical = buildCanonicalUrl(service.route);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: buildCanonicalUrl("/") },
    { name: "Imagem Corporal, Autoestima e Alimentação", url: canonical },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: service.seo.title,
    description: service.seo.description,
    url: canonical,
    inLanguage: "pt-BR",
    provider: {
      "@type": "Person",
      name: "Gabriela Nunes",
      jobTitle: "Psicóloga Clínica",
    },
  };

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
  );
}
