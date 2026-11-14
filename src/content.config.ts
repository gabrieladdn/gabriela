import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const POST_CATEGORIES = [
  "ansiedade",
  "autoestima",
  "relacionamentos",
  "psicanalise",
  "autoconhecimento",
  "corpo-e-alimentacao",
  "saude-mental",
] as const;

export type PostCategory = (typeof POST_CATEGORIES)[number];

const posts = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./content/posts" }),
  schema: z.object({
    title: z.string().min(1),
    excerpt: z.string().min(1),
    category: z.enum(POST_CATEGORIES),
    publishedAt: z.coerce.date(),
    readingTime: z.number().int().positive(),
    coverImage: z.string().min(1).optional(),
    coverImageAlt: z.string().min(1).optional(),
  }),
});

export const collections = { posts };
