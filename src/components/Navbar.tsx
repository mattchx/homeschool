import { Link } from 'react-router'

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 max-w-6xl mx-auto">
          <Link to="/" className="text-xl font-bold text-slate-600">
            Virtual Homeschool Co-op
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-black">
              Home
            </Link>
            <Link to="/classes" className="text-gray-600 hover:text-black">
              Classes
            </Link>
            <Link to="/resources" className="text-gray-600 hover:text-black">
              Resources
            </Link>
            <Link to="/events" className="text-gray-600 hover:text-black">
              Events
            </Link>
            <Link to="/profile" className="text-gray-600 hover:text-black">
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
