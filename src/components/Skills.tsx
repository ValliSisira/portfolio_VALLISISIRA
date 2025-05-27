import React from 'react';
import Section from './Section';
import { skills, certificates } from '../data/resumeData';
import { CheckCircle } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <Section title="Skills & Certifications" id="skills" className="bg-gray-900">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-md p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <div 
                      key={idx} 
                      className="bg-gray-900/50 text-gray-300 px-3 py-2 rounded-md text-sm transition-all hover:bg-blue-900/50 hover:text-blue-300"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-1">
          {certificates.map((certGroup, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-md p-6 mb-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">
                {certGroup.title}
              </h3>
              <ul className="space-y-3">
                {certGroup.items.map((cert, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle size={18} className="text-blue-400 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;