import '@/drizzle/envConfig';

import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.PROD_URL!,
  },
});
