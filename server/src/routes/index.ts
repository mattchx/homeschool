import { Hono } from 'hono';
import {
  classController,
  eventController,
} from '../controllers';

const router = new Hono()

router.route("classes", classController)
router.route("events", eventController)

export default router;
