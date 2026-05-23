import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URI: z.string().optional(),
  MONGODB_URI: z.string().optional(),
  PAYLOAD_SECRET: z.string().min(16).optional(),
  NEXT_PUBLIC_SITE_URL: z.string().url().optional(),
  NEXT_PUBLIC_ANALYTICS_ID: z.string().optional(),
})

export const env = envSchema.parse(process.env)

export const siteUrl = env.NEXT_PUBLIC_SITE_URL || 'https://gabrielanunes.com.br'
