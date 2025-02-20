import { serve } from '@hono/node-server'
import { Hono } from 'hono';
import router from './routes';

const app = new Hono();
const port = Number(process.env.PORT) || 3000;

// Routes
app.route('/api', router);

// Error handling
app.onError((err, c) => {
  console.error(`${err}`)
  return c.text('Custom Error Message', 500)
})

// Initialize and start server
serve({
  fetch: app.fetch,
  port
})
