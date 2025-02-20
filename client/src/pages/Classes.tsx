import { useState, useEffect } from 'react';
import ClassesDialog from '../components/ClassesDialog';
import { ClassType } from '../types';
import { apiRequest } from '../utils/api';

function Classes() {
  const [classes, setClasses] = useState<ClassType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const data = await apiRequest<ClassType[]>('classes', 'GET');
        setClasses(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch classes');
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  const addClass = (newClass: ClassType) => {
    setClasses([...classes, newClass]);
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl text-slate-700 font-bold">Available Classes</h1>
        <ClassesDialog addClass={addClass} />
      </div>
      {loading && <p>Loading classes...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
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

export default Classes;
