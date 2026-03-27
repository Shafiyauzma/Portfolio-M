import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import AcademicBackground from './components/AcademicBackground';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './index.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <div style={{ height: '70px' }}></div> {/* Spacer for fixed nav */}
        <Hero />
        <About />
        <AcademicBackground />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
