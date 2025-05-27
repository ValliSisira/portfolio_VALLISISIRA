export interface Education {
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa: string;
  highlights?: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export interface Project {
  title: string;
  period: string;
  description: string[];
  tags: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface CertificateGroup {
  title: string;
  items: string[];
}

export interface SectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
  className?: string;
}