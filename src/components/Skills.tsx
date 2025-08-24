import { skillCategories } from '../data/skills';
import type { ReactElement } from 'react';

export default function Skills(): ReactElement {
  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <div className="inline-block mb-2 text-sm font-medium text-primary px-3 py-1 bg-primary/10 rounded-full">
            Expertise
          </div>
          <h2 className="text-4xl font-bold mb-6">Skills & Technologies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I specialize in modern web technologies, focusing on building
            scalable and maintainable solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map(
            (
              category: { title: string; icon: null; skills: string[] },
              index: number
            ) => (
              <div
                key={category.title}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary mr-4">
                    {/* Removed icon */}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill: string) => (
                    <div key={skill} className="group relative">
                      <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Always learning and expanding my toolkit with new technologies.
          </p>
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
            {/* Removed SVG */}
            Continuously improving
          </div>
        </div>
      </div>
    </section>
  );
}
