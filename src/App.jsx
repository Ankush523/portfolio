import ScrollProgress from './components/ScrollProgress';
import BackgroundTiles from './components/BackgroundTiles';
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
      <div className="app__tiled">
        <BackgroundTiles />
        <ScrollProgress />
        <Navbar />
        <Hero />
        <About />
      </div>
      <div className="app__tile-fade" aria-hidden />
      <div className="app__rest">
        <Experience />
        <Projects />
        <Skills />
        <div className="app__contact-tiled">
          <BackgroundTiles />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
