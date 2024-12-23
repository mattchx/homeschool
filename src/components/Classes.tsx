function Classes() {
  const classes = [
    {
      id: 1,
      title: "Introduction to World History",
      instructor: "Mrs. Sarah Johnson",
      schedule: "Mondays and Wednesdays, 10:00 AM",
      ageRange: "11-14 years",
      description: "A comprehensive overview of world history from ancient civilizations to modern times."
    },
    {
      id: 2,
      title: "Creative Writing Workshop",
      instructor: "Mr. David Chen",
      schedule: "Tuesdays, 2:00 PM",
      ageRange: "12-16 years",
      description: "Develop creative writing skills through interactive workshops and peer review sessions."
    },
    {
      id: 3,
      title: "Science Experiments at Home",
      instructor: "Dr. Emily Martinez",
      schedule: "Thursdays, 1:00 PM",
      ageRange: "8-12 years",
      description: "Hands-on science experiments using common household materials."
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8 text-black">Available Classes</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {classes.map((classItem) => (
          <div key={classItem.id} className="card">
            <h2 className="text-xl font-semibold mb-2">{classItem.title}</h2>
            <p className="text-gray-600 mb-4">{classItem.description}</p>
            <div className="space-y-2 text-sm text-gray-600">
              <p><span className="font-medium">Instructor:</span> {classItem.instructor}</p>
              <p><span className="font-medium">Schedule:</span> {classItem.schedule}</p>
              <p><span className="font-medium">Age Range:</span> {classItem.ageRange}</p>
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
