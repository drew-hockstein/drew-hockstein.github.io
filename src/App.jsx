import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import WorkExperience from './components/WorkExperience';

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
                <span className="text-2xl font-bold text-white">Drew Hockstein</span>
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
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.725-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.776.42-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.931 0-1.31.468-2.382 1.235-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.51 11.51 0 013.003-.403c1.018.005 2.045.138 3.004.403 2.292-1.552 3.298-1.23 3.298-1.23.653 1.653.242 2.873.118 3.176.77.839 1.233 1.911 1.233 3.221 0 4.609-2.803 5.624-5.475 5.921.431.372.816 1.102.816 2.222v3.293c0 .32.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/drew-hockstein"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452H17.21V14.78c0-1.357-.027-3.097-1.887-3.097-1.889 0-2.178 1.474-2.178 2.989v5.78H9.909V9h3.111v1.561h.044c.434-.821 1.494-1.687 3.073-1.687 3.286 0 3.894 2.164 3.894 4.977v6.601zM5.337 7.433a1.804 1.804 0 110-3.608 1.804 1.804 0 010 3.608zM6.556 20.452H3.118V9h3.438v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.555C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.278V1.723C24 .771 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Drew Hockstein. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors">About</a>
                <a href="#experience" className="text-gray-400 hover:text-white text-sm transition-colors">Experience</a>
                <a href="#skills" className="text-gray-400 hover:text-white text-sm transition-colors">Skills</a>
                <a href="#projects" className="text-gray-400 hover:text-white text-sm transition-colors">Projects</a>
                <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}