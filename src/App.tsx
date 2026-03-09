import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Affiliations from './sections/Affiliations';
// import Articles from './sections/Articles';
import Contact from './sections/Contact';

function App() {
  try {
    return (
      <div className="min-h-screen overflow-x-hidden bg-warm-50">
        <Navbar />
        <main className="w-full">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          {/* Temporarily commented out while working on Medium profile */}
          {/* <Articles /> */}
          <Affiliations />
          <Contact />
        </main>
      <footer className="relative bg-primary-dark py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-4">
            <a href="#" className="text-2xl font-heading font-bold text-white hover:text-accent-muted transition-colors">
              PMM<span className="text-accent-light">.</span>
            </a>
            <p className="text-warm-200 text-sm max-w-lg leading-relaxed">
              Engineering data pipelines. Building at scale. Transforming chaos into clarity.
            </p>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-accent-light/40 to-transparent" />
            <p className="text-warm-300 text-xs">
              © {new Date().getFullYear()} Puoch Mabor Makuei. All rights reserved.
            </p>
          </div>
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
