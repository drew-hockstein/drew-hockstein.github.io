import type { ReactElement } from 'react';

const experiences: {
  id: string;
  title: string;
  company: string;
  location: string;
  date: string;
  bullets: string[];
}[] = [
  {
    id: 'software-developer',
    title: 'Software Developer',
    company: 'Lumen Technologies',
    location: 'Remote (Based in Denver, CO)',
    date: 'Jun 2023 - Apr 2025',
    bullets: [
      'Developed and maintained Bifrost, an internal application for field technicians, improving daily operations using React, TypeScript, Node.js, and Python',
      'Diagnosed and refactored key components of "NAT," an Angular-based internal tool, boosting system reliability and enabling faster resolution across cross-functional teams',
      'Managed and optimized internal databases via Microsoft SQL Server Management Studio, ensuring data integrity and performance for backend systems',
    ],
  },
  {
    id: 'analyst-intern',
    title: 'Analyst Intern',
    company: 'Lumen Technologies',
    location: 'Broomfield, CO (Hybrid)',
    date: 'Jun 2022 - Aug 2022',
    bullets: [
      'Participated in multi-day internal strategy conferences to observe executive decision-making and learn how Lumen leverages data in large-scale operations',
      'Completed extensive online training modules on network infrastructure, cybersecurity, cloud platforms, and business intelligence tools',
      'Shadowed cross-functional analytics teams to understand how insights are extracted from operational and customer data',
      'Gained exposure to KPIs and performance metrics used across marketing, finance, and technology teams to guide strategic initiatives',
    ],
  },
  {
    id: 'computer-technician',
    title: 'Computer Technician',
    company: 'TIG',
    location: 'Louisville, CO',
    date: 'May 2021 - Aug 2021',
    bullets: [
      'Repaired and tested approximately 750 Chromebooks for the Colorado School System, preparing devices for the academic year',
      'Configured laptops with OS updates and security protocols for large-scale deployments',
      'Utilized inventory tracking software to manage hardware assets and streamline logistics',
    ],
  },
  {
    id: 'course-assistant',
    title: 'Course Assistant',
    company: 'University of Colorado Boulder',
    location: 'Boulder, CO (Hybrid)',
    date: 'Sep 2020 - May 2021',
    bullets: [
      'Provided 1-on-1 and group guidance in CSCI 2270: Data Structures, covering topics like recursion, linked lists, and trees',
      'Held office hours assisting 10+ students per session using C++ and whiteboarding techniques',
      'Supported weekly recitations by reviewing material and facilitating peer learning under TA supervision',
    ],
  },
];

export default function WorkExperience(): ReactElement {
  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <div className="inline-block mb-2 text-sm font-medium text-primary px-3 py-1 bg-primary/10 rounded-full">
            Work Experience
          </div>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Professional Experience
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-10">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white rounded-xl shadow-md p-8 border border-gray-200 hover:border-gray-300 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {exp.title}
                  </h3>
                  <div className="text-primary font-medium">{exp.company}</div>
                  <div className="text-gray-600 text-sm">{exp.location}</div>
                </div>
                <div className="text-gray-500 text-sm mt-2 md:mt-0 md:text-right">
                  {exp.date}
                </div>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mt-4">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
