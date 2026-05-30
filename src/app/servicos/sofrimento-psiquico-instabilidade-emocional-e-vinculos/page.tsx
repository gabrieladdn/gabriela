import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";
import { servicePages } from "@/content/services";
import { buildBreadcrumbSchema, buildCanonicalUrl, buildServiceMetadata } from "@/lib/seo";

const service = servicePages["sofrimento-psiquico-instabilidade-emocional-e-vinculos"];

export const metadata: Metadata = buildServiceMetadata({
  title: service.seo.title,
  description: service.seo.description,
  pathname: service.route,
  image: service.seo.image,
});

export default function SofrimentoPsiquicoPage() {
  const canonical = buildCanonicalUrl(service.route);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: buildCanonicalUrl("/") },
    { name: "Sofrimento Psíquico, Instabilidade Emocional e Vínculos", url: canonical },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <ServicePageTemplate content={service} />
    </>
  );
}
