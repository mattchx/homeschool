import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Classes from './pages/Classes';
import Events from './pages/Events';
import Profile from './pages/Profile';
import Resources from './pages/Resources';
import Onboarding from './pages/Onboarding';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-6xl mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/events" element={<Events />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/onboarding" element={<Onboarding />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
