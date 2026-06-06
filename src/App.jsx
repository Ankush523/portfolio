import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import ProudWork from './components/ProudWork';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <a href="#about" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <ProudWork />
        <Marquee />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
