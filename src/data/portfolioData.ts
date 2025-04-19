import { Project, Experience, Education, Skill } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Facial Recognition System',
    period: 'Jan 2024 - Jun 2024',
    organization: 'Univesité Ibn Tofail Kenitra',
    description: [
      'Developed and implemented a facial recognition system using convolutional neural networks (CNN) to achieve a detection and recognition accuracy of 98%.',
      'Processed and augmented image data to enhance model accuracy and robustness, resulting in a 15% increase in overall performance.',
      'Integrated the facial recognition system with a web application for real-time face detection, leading to a seamless user experience and increased efficiency.'
    ],
    skills: ['Python', 'CNN', 'Machine Learning', 'Web Development', 'Image Processing']
  },
  {
    id: 2,
    title: 'Production Planning Optimization',
    period: 'Jan 2025 - Feb 2025',
    organization: 'Univesité Ibn Tofail Kenitra',
    description: [
      'Developed an optimization approach using Python and the PERL method, applied to a dataset ("taskes.csv") to enhance production scheduling.',
      'Expected outcomes: reduction in production delays and maximization of overall efficiency.',
      'Demonstrated the impact of artificial intelligence in resource management and business productivity.'
    ],
    skills: ['Python', 'Data Analysis', 'Optimization', 'PERL method', 'Resource Management']
  },
  {
    id: 3,
    title: 'Spam Classification Model',
    period: 'Feb 2025 - Mar 2025',
    organization: 'Univesité Ibn Tofail Kenitra',
    description: [
      'Developed a spam classification model using machine learning and natural language processing (NLP) techniques.',
      'Implemented a complete pipeline: data preprocessing (cleaning, stopword removal, lemmatization), vectorization (TF-IDF), model training (SVM, Naive Bayes, Random Forest), and hyperparameter optimization (GridSearchCV).',
      'Deployed an interactive Streamlit application, allowing users to test the model in real time.'
    ],
    skills: ['Python', 'Machine Learning', 'NLP', 'Streamlit', 'Data Preprocessing']
  },
  {
    id: 4,
    title: 'Python Bot for Game Automation',
    period: 'Feb 2023 - Apr 2023',
    organization: 'Discord',
    location: 'Remote',
    description: [
      'Developed a Python bot using Selenium, PyAutoGUI, and APIs to automate gameplay tasks in Dofus, resulting in a 50% reduction in manual effort and a 40% increase in efficiency.',
      'Automated repetitive tasks such as farming, resource collection, and in-game interactions, leading to a 70% improvement in user experience.',
      'Implemented a robust error handling system and optimized performance for seamless operation, achieving a 95% success rate in task completion.'
    ],
    skills: ['Python', 'Selenium', 'PyAutoGUI', 'API Integration', 'Automation']
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Head of Programming Team',
    organization: 'Discord',
    period: 'Jan 2021 - Sep 2021',
    location: 'Remote',
    description: [
      'Coordinated a team of 15 programmers on a Discord server, assigning tasks based on individual skills and ensuring timely project completion, resulting in a 20% increase in overall productivity.',
      'Implemented regular meetings to facilitate smooth communication among team members, addressing progress updates, technical issues, and fostering collaboration, leading to a 15% decrease in project delays.'
    ]
  }
];

export const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor's Degree in Computer Science, specializing in Artificial Intelligence (AI)",
    institution: 'Univesité Ibn Tofail Kenitra',
    location: 'Kenitra, Morocco',
    graduationDate: 'Jul 2024'
  },
  {
    id: 2,
    degree: 'Baccalaureate in Experimental Sciences',
    institution: 'Palestine High School Jorf el Melha',
    location: 'Jorf el Melha, Morocco',
    graduationDate: ''
  }
];

export const skills: Skill[] = [
  { id: 1, name: 'Microsoft Office', category: 'software' },
  { id: 2, name: 'C++', category: 'language' },
  { id: 3, name: 'Java', category: 'language' },
  { id: 4, name: 'Python', category: 'language' },
  { id: 5, name: 'JavaScript', category: 'language' },
  { id: 6, name: 'HTML', category: 'language' },
  { id: 7, name: 'CSS', category: 'language' },
  { id: 8, name: 'Shell Scripting', category: 'language' },
  { id: 9, name: 'jQuery', category: 'framework' },
  { id: 10, name: 'SQL', category: 'language' },
  { id: 11, name: 'Git', category: 'tool' }
];

export const personalInfo = {
  name: 'Mohamed Sabkari',
  location: 'Kénitra, Maroc',
  phone: '+212638081542',
  email: 'mohamed.sabkari@uit.ac.ma',
  linkedin: 'https://www.linkedin.com/in/mohamed-sabkari-8b5b47231/', // Replace with actual LinkedIn URL when available
  tagline: 'Cybersecurity Master\'s Student',
  about: 'Passionate cybersecurity student with a strong foundation in computer science and AI. Experienced in developing automated solutions, facial recognition systems, and optimization algorithms. Skilled in leadership and team coordination.'
};