import { GITHUB_URL } from '../config/links';

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <div className="inline-block mb-2 text-sm font-medium text-primary px-3 py-1 bg-primary/10 rounded-full">
            Projects
          </div>
          <h2 className="text-4xl font-bold mb-6">My Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Project showcase coming soon. I'm currently updating this section
            with my latest work.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-10 border border-gray-100 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              {/* Removed SVG */}
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-4">
            Projects Under Development
          </h3>
          <p className="text-gray-600 mb-8">
            I'm currently working on some exciting new projects. Check back soon
            to see my portfolio of work highlighting my skills and experience.
          </p>
          <div className="flex justify-center">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg font-medium transition-colors"
            >
              View My GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
