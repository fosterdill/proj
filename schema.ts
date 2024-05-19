import { sql } from '@vercel/postgres';
import { pgTable, serial, text, timestamp, uniqueIndex } from 'drizzle-orm/pg-core';
import { drizzle } from 'drizzle-orm/vercel-postgres';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
});

export type User = typeof users.$inferSelect;
