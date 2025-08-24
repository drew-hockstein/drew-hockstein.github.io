import EmailIcon from './icons/EmailIcon';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

export default function Contact() {
  const contactInfo = [
    {
      title: 'Email',
      value: 'drewhockstein@gmail.com',
      icon: <EmailIcon className="w-7 h-7" />,
      link: 'mailto:drewhockstein@gmail.com',
    },
    {
      title: 'GitHub',
      value: 'drew-hockstein',
      icon: <GitHubIcon className="w-7 h-7" />,
      link: 'https://github.com/drew-hockstein',
    },
    {
      title: 'LinkedIn',
      value: 'drew-hockstein',
      icon: <LinkedInIcon className="w-7 h-7" />,
      link: 'https://linkedin.com/in/drew-hockstein',
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <div className="inline-block mb-2 text-sm font-medium text-primary px-3 py-1 bg-primary/10 rounded-full">
            Contact
          </div>
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, and
            collaborations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                  {info.title}
                </h3>
                <p className="text-gray-600">{info.value}</p>
              </a>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-full -ml-20 -mb-20"></div>

            <div className="relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-2">
                  Let's Work Together
                </h3>
                <p className="text-gray-600 max-w-xl mx-auto">
                  Have a project in mind? Looking for a passionate developer to
                  join your team? I'd love to hear from you.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href="mailto:drewhockstein@gmail.com"
                  className="w-full sm:w-auto px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Send me an email
                </a>
                <a
                  href="https://linkedin.com/in/drew-hockstein"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
