import { useState, useEffect } from 'react';
import EventsDialog from '../components/EventsDialog';
import { EventType } from '../types';
import { apiRequest } from '../utils/api';

function Events() {
  const [events, setEvents] = useState<EventType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await apiRequest<EventType[]>('events', 'GET');
        setEvents(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch events');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const handleAddEvent = (newEvent: EventType) => {
    setEvents([...events, newEvent]);
  }

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Upcoming Events</h1>
        <EventsDialog addEvent={handleAddEvent} />
      </div>

      {loading && <p>Loading events...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

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
  );
}

export default Events;
