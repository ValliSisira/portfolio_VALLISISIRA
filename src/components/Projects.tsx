import React from 'react';
import Section from './Section';
import { projects } from '../data/resumeData';
import { Calendar, ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <Section title="Projects" id="projects" className="bg-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card bg-gray-900 rounded-lg shadow-md overflow-hidden border border-gray-700"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <div className="flex space-x-2">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      aria-label="Live Project"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <Calendar size={16} className="text-blue-400 mr-2" />
                <p className="text-sm text-gray-400">{project.period}</p>
              </div>
              
              <ul className="space-y-2 mb-4">
                {project.description.map((desc, idx) => (
                  <li key={idx} className="flex">
                    <span className="text-blue-400 mr-2">•</span>
                    <span className="text-gray-300">{desc}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;