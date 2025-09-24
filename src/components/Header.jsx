import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 shadow-lg">
      <div className="w-full bg-gradient-to-r from-green-500 via-blue-500 to-primary py-2 flex justify-center items-center">
        <span className="text-white font-semibold text-center tracking-wide">Available for New Opportunities</span>
      </div>
      <div className="bg-white/90 backdrop-blur-md border-b border-primary/20">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#hero" className="text-2xl font-extrabold text-primary tracking-tight">Lahiru'sDev</a>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 px-2 py-1 rounded focus:bg-primary/10">About</a>
              <a href="#skills" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 px-2 py-1 rounded focus:bg-primary/10">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 px-2 py-1 rounded focus:bg-primary/10">Projects</a>
              <a href="#experience" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 px-2 py-1 rounded focus:bg-primary/10">Experience</a>
              <a href="#contact" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200 px-2 py-1 rounded focus:bg-primary/10">Contact</a>
            </div>
            <div className="flex space-x-4 items-center">
              <a href="https://github.com" className="text-gray-400 hover:text-primary transition-colors text-xl">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-primary transition-colors text-xl">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#contact" className="bg-primary/90 px-5 py-2 rounded-lg text-white font-semibold shadow hover:bg-primary transition-colors duration-200 ml-2">
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;