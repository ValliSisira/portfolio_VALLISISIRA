import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight animate-fadeIn">
              {personalInfo.name}
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 font-light animate-fadeIn animation-delay-300">
              {personalInfo.title}
            </p>
            
            <div className="flex justify-center gap-6 animate-fadeIn animation-delay-600">
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="p-3 bg-gray-800 rounded-full shadow-md text-gray-300 hover:text-blue-400 transition-all duration-300 hover:transform hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a 
                href={`tel:${personalInfo.phone}`} 
                className="p-3 bg-gray-800 rounded-full shadow-md text-gray-300 hover:text-blue-400 transition-all duration-300 hover:transform hover:scale-110"
                aria-label="Phone"
              >
                <Phone className="w-6 h-6" />
              </a>
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full shadow-md text-gray-300 hover:text-blue-400 transition-all duration-300 hover:transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full shadow-md text-gray-300 hover:text-blue-400 transition-all duration-300 hover:transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
            
            <div className="pt-4 animate-fadeIn animation-delay-900">
              <button 
                onClick={() => {
                  const element = document.querySelector('#about');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;