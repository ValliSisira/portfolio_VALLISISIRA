import React from 'react';
import Section from './Section';
import { personalInfo } from '../data/resumeData';
import { User, MapPin, Mail, Phone } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section title="About Me" id="about" className="bg-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed">
            {personalInfo.about}
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm passionate about creating intuitive user interfaces and solving complex problems through code. 
            With a strong foundation in frontend development and data analysis, I aim to build applications that 
            are not only functional but also provide exceptional user experiences.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Currently seeking opportunities to apply my skills in a professional environment where I can contribute 
            to meaningful projects and continue growing as a developer.
          </p>
        </div>
        
        <div className="bg-gray-700 rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-semibold mb-6 text-white">Personal Info</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <User size={24} className="text-blue-400 mr-4" />
              <div>
                <p className="font-medium text-gray-200">Name</p>
                <p className="text-gray-300 mt-1">{personalInfo.name}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <MapPin size={24} className="text-blue-400 mr-4" />
              <div>
                <p className="font-medium text-gray-200">Location</p>
                <p className="text-gray-300 mt-1">{personalInfo.location}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Mail size={24} className="text-blue-400 mr-4" />
              <div>
                <p className="font-medium text-gray-200">Email</p>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="text-blue-400 hover:text-blue-300 mt-1 block"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <Phone size={24} className="text-blue-400 mr-4" />
              <div>
                <p className="font-medium text-gray-200">Phone</p>
                <a 
                  href={`tel:${personalInfo.phone}`} 
                  className="text-blue-400 hover:text-blue-300 mt-1 block"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;