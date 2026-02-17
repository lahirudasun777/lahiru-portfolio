import React from 'react';

const GithubIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.205 11.385c.6.11.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.763-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.467-2.382 1.235-3.222-.124-.303-.535-1.524.117-3.176 0 0 1.007-.322 3.3 1.23a11.5 11.5 0 016 0c2.29-1.552 3.295-1.23 3.295-1.23.655 1.652.245 2.873.12 3.176.77.84 1.234 1.912 1.234 3.222 0 4.61-2.804 5.624-5.475 5.92.43.37.815 1.1.815 2.222 0 1.604-.015 2.897-.015 3.293 0 .32.216.694.825.576A12.003 12.003 0 0024 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.94v5.666H9.353V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.369-1.852 3.602 0 4.268 2.37 4.268 5.452v6.291zM5.337 7.433a2.062 2.062 0 11.001-4.125 2.062 2.062 0 01-.001 4.125zM6.964 20.452H3.71V9h3.254v11.452z" />
  </svg>
);

const MailIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50">
      <div className="w-full bg-gradient-to-r from-green-500 via-blue-500 to-primary py-1 flex justify-center items-center text-sm text-white font-medium">Available for new opportunities — open to contracts</div>
      <div className="bg-white/60 backdrop-blur-md border-b border-primary/10">
        <nav className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#hero" className="text-2xl font-extrabold tracking-tight bg-clip-text gradient-text heading"> <span className="text-transparent gradient-text">Lahiru'sDev</span></a>
            <div className="hidden md:flex space-x-6 items-center">
              <a href="#about" className="text-gray-700 hover:text-primary font-medium transition">About</a>
              <a href="#skills" className="text-gray-700 hover:text-primary font-medium transition">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-primary font-medium transition">Projects</a>
              <a href="#experience" className="text-gray-700 hover:text-primary font-medium transition">Experience</a>
              <a href="#contact" className="text-gray-700 hover:text-primary font-medium transition">Contact</a>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://github.com" className="text-gray-600 hover:text-gray-900 transition"><GithubIcon /></a>
              <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900 transition"><LinkedInIcon /></a>
              <a href="mailto:lahiru@example.com" className="inline-flex items-center px-4 py-2 rounded-lg text-white font-semibold gradient-btn shadow hover:opacity-95">Contact</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;