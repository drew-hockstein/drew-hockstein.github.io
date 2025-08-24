import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import WorkExperience from './components/WorkExperience';
import { GITHUB_URL, LINKEDIN_URL } from './config/links';

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
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href={LINKEDIN_URL}
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
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  About
                </a>
                <a
                  href="#experience"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Experience
                </a>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Skills
                </a>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
