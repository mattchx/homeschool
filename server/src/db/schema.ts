import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const baseTable = sqliteTable('base', {
  id: integer('id').primaryKey(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
});

export const classTable = sqliteTable('class', {
  id: integer('id').primaryKey(),
  title: text('name').notNull(),
  description: text('description'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
});

export const eventTable = sqliteTable('event', {
  id: integer('id').primaryKey(),
  title: text('name').notNull(),
  date: integer('date', { mode: 'timestamp' }),
  classId: integer('class_id').references(() => classTable.id),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
});

export type Class = typeof classTable.$inferSelect;
export type NewClass = typeof classTable.$inferInsert;
export type Event = typeof eventTable.$inferSelect;
export type NewEvent = typeof eventTable.$inferInsert;

export const resourceTable = sqliteTable('resource', {
  id: integer('id').primaryKey(),
  name: text('name').notNull(),
  type: text('type').notNull(),
  url: text('url'),
  classId: integer('class_id').references(() => classTable.id),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
});

export type Resource = typeof resourceTable.$inferSelect;
export type NewResource = typeof resourceTable.$inferInsert;
