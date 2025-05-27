import React from 'react';
import Section from './Section';
import { education } from '../data/resumeData';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <Section title="Education" id="education" className="bg-gray-900">
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div 
            key={index} 
            className="bg-gray-800 rounded-xl p-8 shadow-md transition-all duration-300 hover:shadow-lg border border-gray-700"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                <div className="flex items-center text-gray-300">
                  <GraduationCap size={20} className="text-blue-400 mr-2" />
                  <p>{edu.institution}</p>
                </div>
                <div className="flex items-center text-gray-300">
                  <Calendar size={20} className="text-blue-400 mr-2" />
                  <p>{edu.startDate} - {edu.endDate}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="inline-block bg-blue-900/50 text-blue-300 px-4 py-2 rounded-lg font-medium">
                  GPA: {edu.gpa}
                </div>
                <p className="text-gray-400">{edu.location}</p>
              </div>
            </div>
            
            {edu.highlights && edu.highlights.length > 0 && (
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-gray-200 mb-3">Key Coursework</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {edu.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-gray-300">{highlight}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;