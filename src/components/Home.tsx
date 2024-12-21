import { Link } from 'react-router'
import { Button } from "@/components/ui/button"
import { HStack } from "@chakra-ui/react"

function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center py-12 bg-blue-50 rounded-lg">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Virtual Homeschool Co-op
          </h1>
          <p className="text-xl text-gray-600">
            Connect with other homeschooling families, share resources, and participate in engaging activities.
          </p>
        </div>
      </section>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Join Classes</h2>
          <p className="text-gray-600 mb-4">
            Participate in virtual classes taught by experienced educators and parents.
          </p>
          <Link to="/classes" className="btn-primary inline-block">
            Browse Classes
          </Link>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Share Resources</h2>
          <p className="text-gray-600 mb-4">
            Access and share educational materials, curriculum ideas, and teaching tips.
          </p>
          <Link to="/resources" className="btn-primary inline-block">
            View Resources
          </Link>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Join Events</h2>
          <p className="text-gray-600 mb-4">
            Participate in virtual field trips, social gatherings, and group activities.
          </p>
          <Link to="/events" className="btn-primary inline-block">
            See Events
          </Link>
        </div>
      </div>
      <HStack>
        <Button variant="subtle">Click me</Button>
        <Button variant="surface">Click me</Button>
      </HStack>
    </div>
  )
}

export default Home
