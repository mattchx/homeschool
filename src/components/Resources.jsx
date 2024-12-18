function Resources() {
  const resources = [
    {
      id: 1,
      title: "Math Curriculum Guide",
      author: "Jane Smith",
      category: "Mathematics",
      type: "PDF",
      description: "A comprehensive guide for teaching mathematics to elementary students."
    },
    {
      id: 2,
      title: "Literature Reading List",
      author: "Book Lovers Club",
      category: "Literature",
      type: "Document",
      description: "Curated reading list for middle school students with discussion questions."
    },
    {
      id: 3,
      title: "Science Project Ideas",
      author: "Science Teachers Coalition",
      category: "Science",
      type: "Presentation",
      description: "Collection of hands-on science projects suitable for home learning."
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Educational Resources</h1>
        <button className="btn-primary">
          Share Resource
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((resource) => (
          <div key={resource.id} className="card">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold">{resource.title}</h2>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                {resource.type}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{resource.description}</p>
            <div className="space-y-2 text-sm text-gray-600">
              <p><span className="font-medium">Author:</span> {resource.author}</p>
              <p><span className="font-medium">Category:</span> {resource.category}</p>
            </div>
            <button className="btn-primary mt-4">
              Download Resource
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Resources
