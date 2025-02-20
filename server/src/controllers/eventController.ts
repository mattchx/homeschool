import { Hono } from 'hono';
import { db } from '../db/config';
import { eventTable } from '../db/schema';
import { eq } from 'drizzle-orm';
import type { Event, NewEvent } from '../db/schema';

const eventController = new Hono();

eventController.get('/', async (c) => {
  try {
    const result = await db.select().from(eventTable);
    return c.json(result);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return c.json({ message: error.message }, 500);
    }
    return c.json({ message: 'Error fetching events' }, 500);
  }
});

eventController.post('/', async (c) => {
  try {
    const newEvent = await c.req.json<NewEvent>();
    // Convert date strings to Date objects
    const processedEvent = {
      ...newEvent,
      date: newEvent.date ? new Date(newEvent.date) : null,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    const [result] = await db.insert(eventTable).values(processedEvent).returning();
    return c.json(result, 201);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return c.json({ message: error.message }, 500);
    }
    return c.json({ message: 'Error creating event' }, 500);
  }
});

eventController.put('/:id', async (c) => {
  try {
    const id = c.req.param('id');
    const updatedEvent = await c.req.json<Event>();
    // Convert date strings to Date objects and update timestamp
    const processedEvent = {
      ...updatedEvent,
      date: updatedEvent.date ? new Date(updatedEvent.date) : null,
      updatedAt: new Date()
    };
    const [result] = await db
      .update(eventTable)
      .set(processedEvent)
      .where(eq(eventTable.id, parseInt(id)))
      .returning();
    return c.json(result);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return c.json({ message: error.message }, 500);
    }
    return c.json({ message: 'Error updating event' }, 500);
  }
});

eventController.delete('/:id', async (c) => {
  try {
    const id = c.req.param('id');
    await db.delete(eventTable).where(eq(eventTable.id, parseInt(id)));
    return c.body(null, 204);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return c.json({ message: error.message }, 500);
    }
    return c.json({ message: 'Error deleting event' }, 500);
  }
});

export default eventController;
