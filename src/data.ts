import { Project, Experience, AcademicRecord, SkillGroup } from './types';

export const PERSONAL_INFO = {
  name: 'Sarathi R',
  title: 'React.js Developer',
  email: 'heyimsarathi.r@gmail.com',
  phone: '+91 9150858901',
  location: 'Chennai, TN',
  github: 'https://github.com/sarathi-webdev',
  linkedin: 'https://www.linkedin.com/in/sarathi-r-19328a365/',
  summary: 'Fresher React.js Developer with hands-on experience building production-grade SPAs — a Flipkart e-commerce clone, and a live Spring Boot-integrated movie booking system (MovieAlert) with JWT authentication and REST API consumption. Skilled in Redux Toolkit, Firebase and delivering fully responsive UIs. Delivered 2 full-stack projects independently alongside B.Sc. coursework. Actively expanding into TypeScript and Next.js. Ready to contribute clean, maintainable code to an agile team.',
};

export const PROJECTS: Project[] = [
  {
    id: 'moviealert',
    title: 'MovieAlert',
    description: 'Movie Booking & Alert System (Full-Stack)',
    longDescription: 'Engineered the complete React.js frontend consuming 12+ Spring Boot REST APIs on Render, enabling end-to-end movie discovery, seat selection, and booking flows. Integrated real-time alerts and complex multi-step forms.',
    role: 'React Developer (Final Year Group Project)',
    tech: ['React.js', 'Spring Boot', 'REST API', 'JWT', 'MySQL', 'CSS3', 'Git'],
    github: 'https://github.com/sarathi-webdev/moviealert',
    live: 'https://movie-booking-frontend-zeta.vercel.app/',
    category: 'Full-Stack',
    responsibilities: [
      'Engineered the complete React.js frontend consuming 12+ Spring Boot REST APIs by backend teammates on Render — enabling end-to-end movie discovery, seat selection, and booking flows.',
      'Implemented a full JWT authentication pipeline (login, registration, token refresh, localStorage persistence) guarding 6+ protected routes — reducing unauthorized access to zero in QA testing.',
      'Built a 4-step preference wizard (theatres, date slots, show timings, seat type) with real-time validation, cutting form abandonment rate by ~35% in user testing.',
      'Collaborated in an Agile team of 5 using GitHub branching and pull-request reviews, maintaining zero merge conflicts across 40+ commits over 4 months.'
    ]
  },
  {
    id: 'flipkart-clone',
    title: 'Flipkart Clone',
    description: 'E-Commerce Web Application',
    longDescription: 'Built a production-grade e-commerce SPA with 50+ product listings, multi-category filtering, and local persistence. Managed highly modular central state to bridge layout events and transactional carts seamlessly.',
    role: 'React Developer',
    tech: ['React.js', 'Redux Toolkit', 'Supabase', 'Axios', 'React Router', 'CSS3'],
    github: 'https://github.com/sarathi-webdev/flipkart-clone',
    live: 'https://flipcart-clone-sooty-five.vercel.app/',
    category: 'Frontend',
    responsibilities: [
      'Built a production-grade e-commerce SPA with 50+ product listings, multi-category filtering, and Add/Remove Cart with live updates — reducing cart data loss to zero via Redux + localStorage sync.',
      'Architected Redux Toolkit centralized state (5 slices: auth, cart, products, filters, UI) with Supabase integration for sign-up, login, and session management across 300+ product records.',
      'Optimized React Router v6 nested routing enabling deep-link navigation to 10+ category pages without full page reloads.'
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    role: 'React Developer',
    company: 'MovieAlert (Academic Collaborative Project)',
    period: 'Dec 2025 – Mar 2026',
    type: 'Full-Stack Group Lead',
    tech: ['React.js', 'Spring Boot', 'JWT', 'REST API', 'MySQL', 'CSS3'],
    github: 'https://github.com/sarathi-webdev/moviealert',
    live: 'https://movie-booking-frontend-zeta.vercel.app/',
    responsibilities: [
      'Designed and engineered the interactive user interfaces for seat booking, cinema visual charts, and filtering dashboards.',
      'Developed 100% of the customer authorization state machine integrated over spring-security JWTs.',
      'Conducted unit validation runs alongside teammates to eliminate regression hazards prior to QA staging.'
    ]
  },
  {
    id: 'exp-2',
    role: 'React Developer',
    company: 'Freelance & Open Source Projects',
    period: 'Jun 2024 – Present',
    type: 'Independent Development',
    tech: ['React.js', 'Redux Toolkit', 'Supabase', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/sarathi-webdev/flipkart-clone',
    live: 'https://flipcart-clone-sooty-five.vercel.app/',
    responsibilities: [
      'Independently researched, planned, and implemented a high-performance e-commerce React SPA replicating Flipkart’s key catalog flows.',
      'Modeled multi-slice global React store containing granular handlers for authentication events and asynchronous cart interactions.',
      'Delivered fully fluid mobile responsive viewports using mobile-first Tailwind design layouts and responsive grid calculations.'
    ]
  }
];

export const EDUCATION: AcademicRecord[] = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'SRM Institute of Science and Technology, Ramapuram',
    period: '2023 – 2026',
    score: 'GPA: 7.75 / 10.00',
    coursework: ['Data Structures', 'Web Technologies', 'OOP', 'DBMS', 'Software Engineering']
  },
  {
    degree: 'Class XII (Computer Science)',
    institution: "St Paul's Matriculation Hr. Sec. School",
    period: '2022 – 2023',
    score: 'Score: 69.66%'
  }
];

export const SKILLS: SkillGroup[] = [
  {
    category: 'Programming & Web Tech',
    skills: [
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'TypeScript', level: 75 },
    ]
  },
  {
    category: 'Frameworks & State Management',
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'Redux Toolkit', level: 88 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'React Router DOM', level: 85 },
      { name: 'Vite', level: 80 }
    ]
  },
  {
    category: 'Backend & Services',
    skills: [
      { name: 'Firebase Authentication', level: 82 },
      { name: 'JWT & LocalStorage', level: 85 },
      { name: 'REST APIs & Fetch/Axios', level: 88 },
      { name: 'Supabase Integration', level: 78 },
      { name: 'MongoDB & MySQL', level: 72 }
    ]
  },
  {
    category: 'Developer Tools & Core Soft Skills',
    skills: [
      { name: 'Git & GitHub Workflow', level: 88 },
      { name: 'VS Code & Chrome DevTools', level: 90 },
      { name: 'Vercel, Netlify & Render', level: 85 },
      { name: 'Problem Solving & Debugging', level: 88 },
      { name: 'Agile Team Collaboration', level: 84 }
    ]
  }
];

export const CERTIFICATIONS = [
  'Meta Front-End Developer Certificate — Coursera (In Progress, 2026)'
];
