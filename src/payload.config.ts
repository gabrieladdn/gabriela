import { buildConfig } from 'payload'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

import { Posts } from './collections/Posts'
import { Media } from './collections/Media'
import { Testimonials } from './collections/Testimonials'
import { Users } from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: '— Gabriela Nunes Admin',
    },
  },
  collections: [Posts, Media, Testimonials, Users],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'change-me-in-production',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || 'mongodb://localhost:27017/gabriela-nunes',
  }),
  upload: {
    limits: {
      fileSize: 10_000_000, // 10MB
    },
  },
  localization: {
    locales: [
      {
        label: 'Português',
        code: 'pt',
      },
    ],
    defaultLocale: 'pt',
  },
})
