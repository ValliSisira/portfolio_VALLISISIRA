import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Education', href: '#education' },
    { title: 'Experience', href: '#experience' },
    { title: 'Projects', href: '#projects' },
    { title: 'Skills', href: '#skills' },
    { title: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-effect shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <div 
            className={`font-bold text-2xl transition-colors duration-300 ${
              isScrolled ? 'text-gray-200' : 'text-white'
            }`}
          >
            VS
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button 
                key={link.title}
                onClick={() => handleNavClick(link.href)}
                className={`transition-colors duration-300 hover:text-blue-400 ${
                  isScrolled ? 'text-gray-200' : 'text-white'
                }`}
              >
                {link.title}
              </button>
            ))}
            <a 
              href="/resume.pdf" 
              download="Valli_Sisira_Sista_Resume.pdf"
              className="flex items-center bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Download size={16} className="mr-2" /> Resume
            </a>
          </div>
          
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className={isScrolled ? 'text-gray-200' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-200' : 'text-white'} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'max-h-screen opacity-100 visible glass-effect' 
            : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.title}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left py-2 text-gray-200 hover:text-blue-400 transition-colors"
            >
              {link.title}
            </button>
          ))}
          <div className="pt-2">
            <a 
              href="/resume.pdf" 
              download="Valli_Sisira_Sista_Resume.pdf"
              className="flex items-center justify-center w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300"
            >
              <Download size={16} className="mr-2" /> Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;