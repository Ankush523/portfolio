import RetroBackground from './components/RetroBackground';
import ScrollProgress from './components/ScrollProgress';
import TrackingLines from './components/TrackingLines';
import VHSCornerBadge from './components/VHSCornerBadge';
import CRTFlicker from './components/CRTFlicker';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <a href="#about" className="skip-link">Skip to main content</a>
      <RetroBackground />
      <ScrollProgress />
      <div className="scanlines" aria-hidden="true" />
      <div className="vhs-noise" aria-hidden="true" />
      <CRTFlicker />
      <TrackingLines />
      <VHSCornerBadge />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
