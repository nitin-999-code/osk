import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Mentors from './pages/Mentors';
import Contributors from './pages/Contributors';
import './App.css';
import ThemeToggle from './components/shared/ThemeToggle';

export default function App() {
  return (
    <>
    
      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/mentors" element={<Mentors />} />
              <Route path="/contributors" element={<Contributors />} />
            </Routes>
          </main>
          

      <div className="container">
        {/* Hero Section */}
        <h1 className="title">Open Source Kashmir</h1>
        <p className="subtitle">
          Empowering Kashmir to code, collaborate, and contribute to global open source projects.
        </p>
        <a
          href="https://github.com/Open-Source-Kashmir"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Join Us on GitHub
        </a>

        {/* About Section */}
        <section className="about">
          <h2 className="font-bold">About Us</h2>
          <p>
            We are building an open source ecosystem in Kashmir to help developers learn, 
            build, and contribute to global projects. Through projects, mentorship, and events, 
            we connect local talent with opportunities like LFX, GSoC, and C4GT.
          </p>
        </section>

       

       
      </div>
      <Footer />
        </div>
      </Router>
    </>
  );
}