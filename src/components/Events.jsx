import { useState } from 'react';
import EventModal from './EventModal';

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

  const handleSubmit = (e) => {
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
        <h1 className="text-3xl font-bold">Upcoming Events</h1>
        <button className="btn-primary" onClick={() => setShowModal(true)}>
          Create Event
        </button>
      </div>

      <EventModal
        showModal={showModal}
        setShowModal={setShowModal}
        newEvent={newEvent}
        setNewEvent={setNewEvent}
        handleSubmit={handleSubmit}
      />

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
