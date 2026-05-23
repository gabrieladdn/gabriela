import { loadEnvFile } from 'node:process'
import payload from 'payload'

loadEnvFile?.()

async function start() {
  const { default: config } = await import('./payload.config.ts')

  await payload.init({
    config,
    onInit: async () => {
      console.log('Payload admin available at /admin')
      // Run seed if MONGODB_URI is present
      if (process.env.MONGODB_URI) {
        try {
          const seed = await import('./seeds/seed.ts')
          await seed.default()
        } catch (e) {
          console.warn('Seed failed:', e)
        }
      }
    },
  })
}

start().catch((err) => {
  console.error(err)
  process.exit(1)
})
