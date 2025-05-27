import React, { useEffect, useRef } from 'react';

interface SectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ title, id, children, className = '' }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef} 
      className={`py-16 opacity-0 transform translate-y-10 transition-all duration-700 ease-out ${className}`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-700 text-white">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;