import 'dotenv/config'
import type { Config } from 'drizzle-kit'

export default {
  schema: './src/lib/db/schema',
  out: './src/lib/db/migrations',
  driver: 'better-sqlite',
  verbose: true,
  strict: true,
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config
