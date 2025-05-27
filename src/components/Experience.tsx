import React from 'react';
import Section from './Section';
import { experiences } from '../data/resumeData';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <Section title="Work Experience" id="experience" className="bg-gray-900">
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="experience-card bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-blue-600"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <div className="flex items-center mt-2">
                  <Briefcase size={18} className="text-blue-400 mr-2" />
                  <p className="text-gray-300">{exp.company}</p>
                </div>
                <div className="flex items-center mt-2">
                  <MapPin size={18} className="text-blue-400 mr-2" />
                  <p className="text-gray-400">{exp.location}</p>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 md:text-right">
                <div className="flex items-center md:justify-end">
                  <Calendar size={18} className="text-blue-400 mr-2" />
                  <p className="text-gray-400">
                    {exp.startDate} - {exp.endDate}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <ul className="space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;