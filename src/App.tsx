import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Affiliations from './sections/Affiliations';
import Contact from './sections/Contact';

function App() {
  try {
    return (
      <div className="min-h-screen" style={{ backgroundColor: '#0a0a0a' }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Affiliations />
          <Contact />
        </main>
      <footer className="bg-primary-charcoal border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-secondary-gray text-sm">
          <p>© {new Date().getFullYear()} Puoch Mabor Makuei. All rights reserved.</p>
        </div>
      </footer>
      </div>
    );
  } catch (error) {
    console.error('App error:', error);
    return (
      <div style={{ padding: '50px', color: 'red' }}>
        <h1>Error loading app</h1>
        <p>{String(error)}</p>
      </div>
    );
  }
}

export default App;
