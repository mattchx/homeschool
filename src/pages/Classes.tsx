import { useState } from 'react';
import ClassesDialog from '../components/ClassesDialog';
import { ClassType } from '../types';

function Classes() {
  const [classes, setClasses] = useState<ClassType[]>([
    {
      id: '1',
      title: "Introduction to World History",
      subject: "History",
      instructor: "Mrs. Sarah Johnson",
      schedule: "Mondays and Wednesdays, 10:00 AM",
      description: "A comprehensive overview of world history from ancient civilizations to modern times.",
      location: "Online",
      price: 49.99
    },
    {
      id: '2',
      title: "Creative Writing Workshop",
      subject: "Language Arts",
      instructor: "Mr. David Chen",
      schedule: "Tuesdays, 2:00 PM",
      description: "Develop creative writing skills through interactive workshops and peer review sessions.",
      location: "Online",
      price: 39.99
    },
    {
      id: '3',
      title: "Science Experiments at Home",
      subject: "Science",
      instructor: "Dr. Emily Martinez",
      schedule: "Thursdays, 1:00 PM",
      description: "Hands-on science experiments using common household materials.",
      location: "Online",
      price: 29.99
    }
  ]);

  const addClass = (newClass: ClassType) => {
    setClasses([...classes, newClass]);
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl text-slate-700 font-bold">Available Classes</h1>
        <ClassesDialog addClass={addClass} />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {classes.map((classItem) => (
          <div key={classItem.id} className="card">
            <h2 className="text-xl font-semibold mb-2">{classItem.title}</h2>
            <p className="text-gray-600 mb-4">{classItem.description}</p>
            <div className="space-y-2 text-sm text-gray-600">
              <p><span className="font-medium">Instructor:</span> {classItem.instructor}</p>
              <p><span className="font-medium">Schedule:</span> {classItem.schedule}</p>
              <p><span className="font-medium">Location:</span> {classItem.location}</p>
              <p><span className="font-medium">Price:</span> ${(classItem.price ?? 0).toFixed(2)}</p>
            </div>
            <button className="btn-primary mt-4">
              Join Class
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Classes
