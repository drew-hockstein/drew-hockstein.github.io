import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import WorkExperience from './components/WorkExperience';
import navLinks from './config/navLinks';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        <About />
        <WorkExperience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <span className="text-2xl font-bold text-white">
                  Drew Hockstein
                </span>
                <p className="mt-2 text-gray-400 text-sm">
                  Full Stack Developer based in Denver.
                </p>
              </div>

              <div className="flex space-x-6 mb-6 md:mb-0">
                <a
                  href="https://github.com/drew-hockstein"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/drew-hockstein"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Drew Hockstein. All rights
                reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                {navLinks.map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
