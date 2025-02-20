import { Hono } from 'hono';
import { db } from '../db/config';
import { classTable } from '../db/schema';
import { eq } from 'drizzle-orm';
import type { Class, NewClass } from '../db/schema';

const classController = new Hono();

classController.get('/', async (c) => {
  try {
    const result = await db.select().from(classTable);
    return c.json(result);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return c.json({ message: error.message }, 500);
    }
    return c.json({ message: 'Error fetching classes' }, 500);
  }
});

classController.post('/', async (c) => {
  try {
    const newClass = await c.req.json<NewClass>();
    const [result] = await db.insert(classTable).values(newClass).returning();
    return c.json(result, 201);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return c.json({ message: error.message }, 500);
    }
    return c.json({ message: 'Error creating class' }, 500);
  }
});

classController.put('/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const updatedClass = await c.req.json<Class>();
    const [result] = await db
      .update(classTable)
      .set(updatedClass)
      .where(eq(classTable.id, parseInt(id)))
      .returning();
    return c.json(result);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return c.json({ message: error.message }, 500);
    }
    return c.json({ message: 'Error updating class' }, 500);
  }
});

classController.delete('/:id', async (c) => {
  try {
    const id = c.req.param('id');
    await db.delete(classTable).where(eq(classTable.id, parseInt(id)));
    return c.body(null, 204);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return c.json({ message: error.message }, 500);
    }
    return c.json({ message: 'Error deleting class' }, 500);
  }
});

export default classController;
