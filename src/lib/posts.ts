import { getCollection, getEntry, type CollectionEntry } from "astro:content";
import type { PostCategory } from "@/content.config";

export type PostEntry = CollectionEntry<"posts">;

export const POST_CATEGORY_LABELS: Record<PostCategory, string> = {
  ansiedade: "Ansiedade",
  autoestima: "Autoestima",
  relacionamentos: "Relacionamentos",
  psicanalise: "Psicanálise",
  autoconhecimento: "Autoconhecimento",
  "corpo-e-alimentacao": "Corpo e Alimentação",
  "saude-mental": "Saúde Mental",
};

export const POST_FILTER_CATEGORIES: Array<{ value: "" | PostCategory; label: string }> = [
  { value: "", label: "Todos" },
  { value: "ansiedade", label: "Ansiedade" },
  { value: "autoestima", label: "Autoestima" },
  { value: "relacionamentos", label: "Relacionamentos" },
  { value: "psicanalise", label: "Psicanálise" },
  { value: "autoconhecimento", label: "Autoconhecimento" },
  { value: "corpo-e-alimentacao", label: "Corpo e Alimentação" },
  { value: "saude-mental", label: "Saúde Mental" },
];

export const DEFAULT_CATEGORY_COVER_IMAGE: Record<PostCategory, string> = {
  ansiedade: "/images/ansiedade2.jpg",
  autoestima: "/images/autoestima2.jpg",
  relacionamentos: "/images/sofrimtn3.jpg",
  psicanalise: "/images/extra4.jpg",
  autoconhecimento: "/images/extra2.jpg",
  "corpo-e-alimentacao": "/images/corpo2.jpg",
  "saude-mental": "/images/consultorio.jpeg",
};

export interface PostCover {
  src: string;
  alt: string;
}

export function resolvePostCover(post: PostEntry): PostCover {
  return {
    src: post.data.coverImage ?? DEFAULT_CATEGORY_COVER_IMAGE[post.data.category],
    alt: post.data.coverImageAlt ?? post.data.title,
  };
}

export interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  category: PostCategory;
  publishedAt: Date;
  readingTime: number;
  coverImage: string;
  coverImageAlt: string;
}

export async function getAllPosts(): Promise<PostMeta[]> {
  const entries = await getCollection("posts");

  return entries
    .map((entry) => {
      const cover = resolvePostCover(entry);
      return {
        slug: entry.id,
        title: entry.data.title,
        excerpt: entry.data.excerpt,
        category: entry.data.category,
        publishedAt: entry.data.publishedAt,
        readingTime: entry.data.readingTime,
        coverImage: cover.src,
        coverImageAlt: cover.alt,
      };
    })
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
}

export async function getPostBySlug(slug: string): Promise<PostEntry | undefined> {
  return getEntry("posts", slug);
}

export function formatPostDate(date: Date): string {
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
