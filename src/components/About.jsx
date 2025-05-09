import profileImg from '../assets/icons/profile.jpg';

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block mb-2 text-sm font-medium text-primary px-3 py-1 bg-primary/10 rounded-full">
                About Me
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Hi, I'm Drew Hockstein
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  I'm a full-stack software developer based in Denver, specializing in building scalable tools and intuitive web applications using modern technologies.
                </p>
                <p className="text-lg leading-relaxed">
                  With a strong foundation in <span className="text-primary font-medium">React</span>, <span className="text-primary font-medium">TypeScript</span>, <span className="text-primary font-medium">Node.js</span>, and <span className="text-primary font-medium">SQL</span>, I create robust solutions that solve real-world problems. I'm passionate about clean code, user experience, and continuous learning.
                </p>
              </div>
              
              <div className="mt-8 flex items-center space-x-6">
                <a 
                  href="https://github.com/drew-hockstein" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-primary transition-colors"
                  aria-label="GitHub Profile"
                >
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/drew-hockstein" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-primary transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  LinkedIn
                </a>
                <a 
                  href="/Drew_Hockstein_Resume.pdf" 
                  className="px-5 py-2 bg-gray-900 hover:bg-gray-800 text-white font-medium text-sm rounded-md transition-colors shadow-sm inline-flex items-center gap-2 border border-gray-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </div>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <div className="aspect-square relative z-10">
                <div className="w-full h-full bg-gradient-to-br from-primary to-secondary rounded-2xl p-0.5 rotate-3 shadow-xl">
                  <div className="w-full h-full bg-white rounded-xl p-4">
                    <div className="w-full h-full rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                      <img 
                        src={profileImg} 
                        alt="Drew Hockstein profile" 
                        className="object-cover w-full h-full rounded-lg" 
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-8 -left-8 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute bottom-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}