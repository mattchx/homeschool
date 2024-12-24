import { useState } from 'react';
import { Button } from './ui/button';
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

function Events() {
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Virtual Museum Tour",
      date: "2024-02-15",
      time: "1:00 PM EST",
      type: "Field Trip",
      organizer: "Art History Group",
      description: "Join us for a guided virtual tour of the Metropolitan Museum of Art."
    },
    {
      id: 2,
      title: "Science Fair",
      date: "2024-02-20",
      time: "2:00 PM EST",
      type: "Competition",
      organizer: "Science Club",
      description: "Present your science projects and learn from other students' experiments."
    },
    {
      id: 3,
      title: "Book Club Meeting",
      date: "2024-02-25",
      time: "3:00 PM EST",
      type: "Social",
      organizer: "Reading Circle",
      description: "Discussion of this month's book: 'The Giver' by Lois Lowry."
    }
  ]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    time: '',
    type: '',
    organizer: '',
    description: '',
  });

  const handleOpenChange = (details: OpenChangeDetails) => {
    setShowModal(details.isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEvents([...events, { ...newEvent, id: events.length + 1 }]);
    setNewEvent({
      title: '',
      date: '',
      time: '',
      type: '',
      organizer: '',
      description: '',
    });
    setShowModal(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl text-slate-700 font-bold">Upcoming Events</h1>
        <DialogRoot open={showModal} onOpenChange={handleOpenChange}>
          <DialogTrigger asChild>
            <Button variant="outline">Create Event</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Event</DialogTitle>
            </DialogHeader>
            <DialogBody>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                    Title
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title"
                    type="text"
                    placeholder="Event Title"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                    Date
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="date"
                    type="date"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
                    Time
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="time"
                    type="time"
                    value={newEvent.time}
                    onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
                    Type
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="type"
                    type="text"
                    placeholder="Event Type"
                    value={newEvent.type}
                    onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="organizer">
                    Organizer
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="organizer"
                    type="text"
                    placeholder="Event Organizer"
                    value={newEvent.organizer}
                    onChange={(e) => setNewEvent({ ...newEvent, organizer: e.target.value })}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="description"
                    placeholder="Event Description"
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                    required
                  />
                </div>
                <DialogFooter>
                  <DialogActionTrigger asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogActionTrigger>
                  <Button type="submit">Create</Button>
                </DialogFooter>
              </form>
            </DialogBody>
            <DialogCloseTrigger />
          </DialogContent>
        </DialogRoot>
      </div>

      <div className="space-y-6">
        {events.map((event) => (
          <div key={event.id} className="card">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                <p className="text-gray-600 mb-4">{event.description}</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                {event.type}
              </span>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600">
              <p><span className="font-medium">Date:</span> {event.date}</p>
              <p><span className="font-medium">Time:</span> {event.time}</p>
              <p><span className="font-medium">Organizer:</span> {event.organizer}</p>
            </div>
            <div className="mt-4 space-x-4">
              <button className="btn-primary">
                Join Event
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Events
