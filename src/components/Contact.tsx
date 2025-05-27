import React, { useState } from 'react';
import Section from './Section';
import { personalInfo } from '../data/resumeData';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <Section title="Contact Me" id="contact" className="bg-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-6 text-white">Get In Touch</h3>
          <p className="text-gray-300 mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll do my best to get back to you!
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail size={20} className="text-blue-400 mr-4" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <Phone size={20} className="text-blue-400 mr-4" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <a 
                  href={`tel:${personalInfo.phone}`} 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <MapPin size={20} className="text-blue-400 mr-4" />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-gray-300">{personalInfo.location}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Linkedin size={20} className="text-blue-400 mr-4" />
              <div>
                <p className="text-sm text-gray-400">LinkedIn</p>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
            
            <div className="flex items-center">
              <Github size={20} className="text-blue-400 mr-4" />
              <div>
                <p className="text-sm text-gray-400">GitHub</p>
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  View GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <form onSubmit={handleSubmit} className="bg-gray-900 rounded-lg shadow-md p-6 border border-gray-700">
            <h3 className="text-xl font-semibold mb-6 text-white">Send a Message</h3>
            
            {submitted ? (
              <div className="bg-green-900/50 border border-green-500 text-green-300 px-4 py-3 rounded mb-4">
                Thanks for your message! I'll get back to you soon.
              </div>
            ) : (
              <>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-md transition-colors ${
                    submitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'
                  }`}
                >
                  {submitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                        <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send size={16} className="mr-2" />
                      Send Message
                    </span>
                  )}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;