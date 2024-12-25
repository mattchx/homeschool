import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  DialogActionTrigger
} from "@/components/ui/dialog"

import { Input, Textarea } from "@chakra-ui/react"
import { Button } from './ui/button';
import { Field } from './ui/field';
import { EventType } from '@/types';

function EventDialog({ addEvent }: { addEvent: (newEvent: EventType) => void }) {
 
  const [open, setOpen] = useState(false)

  const [newEvent, setNewEvent] = useState({
    id: uuidv4(),
    title: '',
    date: '',
    time: '',
    type: '',
    organizer: '',
    description: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addEvent(newEvent);
    setOpen(false);
  }
  return (
    <DialogRoot lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
      <DialogTrigger asChild>
        <Button variant="outline">Add Event</Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create New Event</DialogTitle>
          </DialogHeader>
          <DialogBody>
            {/* <Stack direction="row" gap={4}> */}
            <Field label="Title">
              <Input
                id="title"
                placeholder="Event Title"
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                required
              />
            </Field>
            <Field label="Date">
              <Input
                id="date"
                type="date"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                required
              />
            </Field>
            <Field label="Time">
              <Input
                id="time"
                type="time"
                value={newEvent.time}
                onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                required
              />
            </Field>
            <Field label="Type">
              <Input
                id="type"
                placeholder="Event Type"
                value={newEvent.type}
                onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
                required
              />
            </Field>
            <Field label="Organizer">
              <Input
                id="organizer"
                placeholder="Event Organizer"
                value={newEvent.organizer}
                onChange={(e) => setNewEvent({ ...newEvent, organizer: e.target.value })}
                required
              />
            </Field>
            <Field label="Description">
              <Textarea
                id="description"
                placeholder="Event Description"
                value={newEvent.description}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                required
              />
            </Field>
            <DialogFooter>
              <DialogActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </DialogActionTrigger>
              <Button type="submit">Save</Button>
            </DialogFooter>
            <DialogCloseTrigger />
            {/* </Stack> */}
          </DialogBody>
        </form>
      </DialogContent>
    </DialogRoot>
  );
};

export default EventDialog;
