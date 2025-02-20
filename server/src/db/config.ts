import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client/sqlite3';
import * as schema from './schema';

const config = {
  url: process.env.DATABASE_URL || 'file:src/db/libsql.db',
  authToken: process.env.DATABASE_AUTH_TOKEN
};

const client = createClient(config);
export const db = drizzle(client, { schema });
export type Database = typeof db;
