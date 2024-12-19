function Profile() {
  const profile = {
    name: "Sarah Anderson",
    email: "sarah.anderson@example.com",
    location: "Boston, MA",
    children: [
      { name: "Emma", age: 12, grade: "7th Grade" },
      { name: "Lucas", age: 9, grade: "4th Grade" }
    ],
    interests: ["Science", "Literature", "Art", "History"],
    enrolledClasses: [
      { name: "World History", schedule: "Mon/Wed 10:00 AM" },
      { name: "Creative Writing", schedule: "Tue 2:00 PM" }
    ]
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8 text-black">My Profile</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="card">
            <div className="text-center">
              <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl text-blue-600">{profile.name.charAt(0)}</span>
              </div>
              <h2 className="text-xl font-semibold">{profile.name}</h2>
              <p className="text-gray-600">{profile.location}</p>
            </div>
            
            <div className="mt-6">
              <h3 className="font-medium mb-2">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Children</h3>
            <div className="space-y-4">
              {profile.children.map((child, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{child.name}</p>
                    <p className="text-sm text-gray-600">{child.grade}</p>
                  </div>
                  <span className="text-gray-600">Age: {child.age}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Enrolled Classes</h3>
            <div className="space-y-4">
              {profile.enrolledClasses.map((class_, index) => (
                <div key={index} className="flex justify-between items-center">
                  <p className="font-medium">{class_.name}</p>
                  <p className="text-sm text-gray-600">{class_.schedule}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p><span className="font-medium">Email:</span> {profile.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
