import { env } from '@/app/data/env/server';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: 'src/drizzle/schema.ts',
  out: 'src/drizzle/migrations.ts',
  dialect: 'postgresql',
  strict: true,
  verbose: true,
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
