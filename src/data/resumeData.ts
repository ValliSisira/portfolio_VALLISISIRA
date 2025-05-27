import { Education, Experience, Project, Skill, CertificateGroup } from '../types/types';

export const personalInfo = {
  name: 'Valli Sisira Sista',
  title: 'Frontend Developer & Computer Science Graduate Student',
  email: 'svallisisira@gmail.com',
  phone: '+1 346-638-6922',
  linkedin: 'https://linkedin.com/in/',
  github: 'https://github.com/',
  location: 'Houston, TX',
  about: 'Graduate Computer Science student at the University of Houston with experience in frontend development and IT support. Passionate about creating intuitive user interfaces and leveraging data science to solve complex problems.',
};

export const education: Education[] = [
  {
    institution: 'University of Houston',
    degree: 'Master of Science in Computer Science',
    location: 'Houston, TX',
    startDate: 'August 2023',
    endDate: 'May 2025',
    gpa: '3.55/4.0',
    highlights: [
      'Relevant Coursework: Data Science, Data Mining, Data Analysis, Machine Learning, Visualization, Software Engineering, Cloud Computing'
    ]
  },
  {
    institution: 'Kakatiya Institute of Technology & Science (KITSW)',
    degree: 'Bachelor of Technology in Computer Science',
    location: 'Warangal, India',
    startDate: 'August 2019',
    endDate: 'May 2023',
    gpa: '3.74/4.0',
    highlights: [
      'Relevant Coursework: Java, OOPS, Web Programming, Data Structures and Algorithms, Database Management Systems, JavaScript, Python'
    ]
  }
];

export const experiences: Experience[] = [
  {
    title: 'Instructional Assistant',
    company: 'University of Houston – IT Department',
    location: 'Houston, TX',
    startDate: 'January 2024',
    endDate: 'Present',
    description: [
      'Delivered end-to-end IT support for 200+ faculty and staff, maintaining a 95% satisfaction rate through rapid issue resolution and optimizing SQL queries to enhance data retrieval efficiency.',
      'Implemented standardized Zendesk documentation protocols using SQL programming and database design principles, resulting in a 20% improvement in ticket tracking accuracy, more efficient reporting workflows, and optimized SQL queries to analyze large datasets.',
      'Pioneered a streamlined triage process for technology issues, resulting in 30% faster resolution times and increased user satisfaction, as reflected in positive Zendesk feedback.'
    ]
  },
  {
    title: 'Front-End Developer Intern',
    company: 'e2open',
    location: 'India',
    startDate: 'September 2022',
    endDate: 'July 2023',
    description: [
      'Led UI component development using HTML, SASS and JavaScript, integrating with APIs and web services to deliver reusable elements based on Figma designs, consistently achieving a 100% sprint completion rate.',
      'Built a modular UI component library using Storybook for documentation, increasing code reusability by 60% and reducing front-end development time by 35% across the engineering team.',
      'Developed and implemented design tokens for consistent styling, enhancing UI polish across platforms and contributing to positive feedback in 90% of user experience testing sessions.'
    ]
  }
];

export const projects: Project[] = [
  {
    title: 'Diabetes Health Indicators',
    period: 'March 2024 - April 2024',
    description: [
      'Spearheaded a comparative analysis of machine learning algorithms (Logistic Regression, Random Forest, KNN, and Gradient Boosting), achieving 91.49% prediction accuracy with Gradient Boosting, while effectively managing project timelines.',
      'Processed and analyzed a dataset of 253,681 responses with 21 health and demographic features, applying Lasso feature selection and hyperparameter tuning for performance optimization.',
      'Improved model robustness through bi-directional elimination using the wrapper method, ensuring iterative feature selection to prevent overfitting and enhance accuracy.'
    ],
    tags: ['Python', 'Machine Learning', 'Data Analysis', 'Feature Selection']
  },
  {
    title: 'Airbnb Market Analysis and Investment Strategy Using Tableau',
    period: 'November 2023',
    description: [
      'Designed an interactive Tableau dashboard to analyze pricing trends, demand fluctuations, and competition by zip code and bedroom count, enabling data-driven investment strategies.',
      'Created geospatial and trend-based visualizations to help investors pinpoint profitable areas, ideal pricing, and peak rental periods.',
      'Delivered actionable insights on the effects of seasonality, property size, and competition on profitability.'
    ],
    tags: ['Tableau', 'Data Visualization', 'Market Analysis', 'Dashboard Design']
  },
  {
    title: 'Text Summarization Using TensorFlow',
    period: 'March 2023 - May 2023',
    description: [
      'Formulated an automated text summarization system that maintained 95% information fidelity, streamlining the extraction of insights from large text corpora.',
      'Engineered a Long Short-Term Memory (LSTM) model with optimized word-labelling techniques, boosting summarization accuracy by 15% and cutting processing time by 20ms per text.'
    ],
    tags: ['TensorFlow', 'LSTM', 'NLP', 'Python']
  },
  {
    title: 'University Admission Prediction Using ML',
    period: 'March 2022 - April 2022',
    description: [
      'Developed a machine learning model to predict university admissions based on academic performance and extracurricular involvement, achieving 85% accuracy and a 15% reduction in processing time.',
      'Programmed a user interface allowing prospective students to input their credentials and receive real-time admission predictions in under 3 seconds.'
    ],
    tags: ['Machine Learning', 'Python', 'UI Development']
  }
];

export const skills: Skill[] = [
  { category: 'Programming', items: ['C', 'Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'React JS', 'Linux'] },
  { category: 'Database', items: ['SQL programming', 'SSRS', 'MySQL'] },
  { category: 'Tools', items: ['Microsoft Excel', 'Tableau', 'Git', 'GitHub', 'Jupyter Notebook', 'Visual Studio Code', 'Microsoft Office'] }
];

export const certificates: CertificateGroup[] = [
  { 
    title: 'Certifications',
    items: [
      'Java J2EE and Java Full Stack – Wipro Technologies',
      'Programming with Python – Internshala',
      'Database Design and Database Programming with SQL – Oracle Academy'
    ]
  }
];