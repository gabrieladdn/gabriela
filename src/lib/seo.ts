import { getImage } from "astro:assets";
import { resolveAssetImage } from "@/lib/images";

const FALLBACK_SITE_URL = "https://gabrielanunes.com.br";

function normalizePath(pathname: string): string {
  if (!pathname.startsWith("/")) return `/${pathname}`;
  return pathname;
}

export function getSiteUrl(): string {
  const envUrl =
    import.meta.env.PUBLIC_SERVER_URL ??
    import.meta.env.NEXT_PUBLIC_SERVER_URL ??
    process.env.PUBLIC_SERVER_URL ??
    process.env.NEXT_PUBLIC_SERVER_URL;

  if (!envUrl) return FALLBACK_SITE_URL;

  return envUrl.endsWith("/") ? envUrl.slice(0, -1) : envUrl;
}

export function buildCanonicalUrl(pathname: string): string {
  return `${getSiteUrl()}${normalizePath(pathname)}`;
}

export interface SeoMetadata {
  title: string;
  description: string;
  canonical: string;
  ogType: "website" | "article";
  ogImage?: {
    url: string;
    alt: string;
  };
  publishedTime?: string;
}

interface ServiceMetadataInput {
  title: string;
  description: string;
  pathname: string;
  image: string;
}

export async function buildServiceMetadata(input: ServiceMetadataInput): Promise<SeoMetadata> {
  const canonical = buildCanonicalUrl(input.pathname);
  let imageUrl: string;

  if (input.image.startsWith("http")) {
    imageUrl = input.image;
  } else {
    const asset = resolveAssetImage(input.image);
    const optimized = await getImage({ src: asset, format: "jpeg", width: 1200 });
    imageUrl = buildCanonicalUrl(optimized.src);
  }

  return {
    title: input.title,
    description: input.description,
    canonical,
    ogType: "website",
    ogImage: {
      url: imageUrl,
      alt: input.title,
    },
  };
}

export function buildBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

interface MedicalServiceSchemaInput {
  title: string;
  description: string;
  route: string;
  breadcrumbName: string;
}

export function buildMedicalServiceSchemas(input: MedicalServiceSchemaInput) {
  const canonical = buildCanonicalUrl(input.route);

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: buildCanonicalUrl("/") },
    { name: input.breadcrumbName, url: canonical },
  ]);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: input.title,
    description: input.description,
    url: canonical,
    inLanguage: "pt-BR",
    provider: {
      "@type": "Person",
      name: "Gabriela Nunes",
      jobTitle: "Psicóloga Clínica",
    },
  };

  return [breadcrumbSchema, serviceSchema];
}
