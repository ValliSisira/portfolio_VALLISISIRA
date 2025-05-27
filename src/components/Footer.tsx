import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold">VS</p>
            <p className="text-gray-400 text-sm mt-1">Frontend Developer & Computer Science Graduate Student</p>
          </div>
          
          <div className="flex items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Valli Sisira Sista. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center">
            Made with <Heart size={16} className="mx-1 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;