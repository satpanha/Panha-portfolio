import React from 'react';

export const siteConfig = {
  name: "Sat Panha",
  title: "Frontend Web Developer",
  tagline: "Building user-focused web experiences with modern technologies",
  description: "Portfolio of Sat Panha — Frontend Developer specializing in Next.js, React, and modern web technologies.",
  email: "satpanha618@gmail.com",
  phone: "+855-96-446-1381",
  github: "https://github.com/satpanha",
  githubOrg: "https://github.com/CPF-CADT",
  linkedin: "",
  portfolio: "https://panha-portfolio-six.vercel.app/",
  address: "#150D, St: 352A, Borey Vimean PP, Russey Keo, Phnom Penh",
};

export const heroContent = {
  name: siteConfig.name,
  title: siteConfig.title,
  tagline: siteConfig.tagline,
};

export const aboutContent = {
  heading: "About Me",
  paragraphs: [
    "Hi, I'm Sat Panha — a creative and adaptable frontend developer with a strong foundation in modern web technologies and collaborative development. I'm currently pursuing a Bachelor's Degree in Computer Science, specializing in Software Engineering, at the Cambodia Academy of Digital Technology (CADT).",
    "I'm passionate about continuous learning, innovation, and delivering user-focused solutions. My experience spans building responsive interfaces with Next.js and React, integrating backend APIs, and leading development teams through academic and real-world projects.",
    "Beyond coding, I enjoy taking on leadership roles — from heading project and event departments to coordinating large-scale community activities. I believe strong communication and teamwork are just as important as technical skills in delivering great products.",
  ],
};

export const skillsContent = {
  heading: "My Skills",
  categories: [
    {
      name: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "TailwindCSS"],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      name: "Databases",
      skills: ["MongoDB", "MySQL"],
    },
    {
      name: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Figma"],
    },
    {
      name: "Soft Skills",
      skills: ["Leadership", "Team Collaboration", "Professional Communication", "Event Coordination"],
    },
  ],
};

export const projectsContent = {
  heading: "Featured Projects",
  projects: [
    {
      id: 1,
      title: "Sport Management System — MOEYS",
      description: "Developed the frontend for a national sports management platform used by the Ministry of Education, Youth & Sport. Implemented participant registration, event categorization, team management, and real-time updates to streamline event administration across Cambodia(This Project is private).",
      techStack: ["Next.js", "React", "TailwindCSS"],
      liveLink: "",
      githubLink: "https://github.com/orgs/Moeyes/",
    },
    {
      id: 2,
      title: "Domrov LMS — Capstone Project",
      description: "Led the team and developed the frontend for Domrov LMS during Capstone Project 1 & 2. Delivered a responsive, user-friendly Learning Management System interface while coordinating the full project lifecycle.",
      techStack: ["Next.js", "React", "TailwindCSS"],
      liveLink: "",
      githubLink: "https://github.com/satpanha/domrov-lms-automation.git",
    },
    {
      id: 3,
      title: "Full Stack Bookstore Web Application",
      description: "A full-stack web application that allows users to browse and manage books in an online store. Features include book listing, filtering, a pagination system, REST API integration, and responsive design.",
      techStack: ["React", "Express.js", "MongoDB"],
      liveLink: "",
      githubLink: "https://github.com/CPF-CADT/Book-Store.git",
    },
    {
      id: 4,
      title: "Vireak Buntham Express Clone",
      description: "My first frontend project — a pixel-faithful clone of the Vireak Buntham Express website that kickstarted my journey into frontend development.",
      techStack: ["HTML", "CSS", "JavaScript"],
      liveLink: "",
      githubLink: "https://github.com/CPF-CADT/Web-Design-Project-Clone-VET-Website.git",
    },
  ],
};

export const experienceContent = {
  heading: "Experience",
  jobs: [
    {
      id: 1,
      title: "Frontend Developer — Sport Management System",
      company: "Ministry of Education, Youth & Sport (MOEYS)",
      years: "December 2025 – Present",
      description: "Developed the frontend using Next.js for the national Sport Management System, implementing participant registration, event categorization, team management, and real-time updates to enhance user experience and streamline event administration.",
    },
    {
      id: 2,
      title: "Team Lead & Frontend Developer",
      company: "Domrov LMS — Capstone Project 1 & 2",
      years: "October 2025 – Present",
      description: "Led the development team and built the frontend for the Domrov Learning Management System. Delivered a responsive and user-friendly interface while coordinating project execution across the full capstone timeline.",
    },
    {
      id: 3,
      title: "Team Leader",
      company: "CPF – CADT School Project",
      years: "2024 – Present",
      description: "Led a school project team using GitHub, managing task planning, role assignment, coding, bug fixing, and collaboration to ensure timely completion and a fully functional project.",
    },
    {
      id: 4,
      title: "Frontend Developer",
      company: "Vireak Buntham Express Clone",
      years: "December 2024",
      description: "Started my frontend journey by cloning the Vireak Buntham Express website as a first hands-on project to build foundational HTML, CSS, and JavaScript skills.",
    },
  ],
};

export const volunteerContent = {
  heading: "Volunteer Experience",
  roles: [
    {
      id: 1,
      title: "Head of Project & Event Department",
      organization: "CADT Student Association",
      years: "May – October 2025",
      description: "Led and coordinated event and project teams to plan, organize, and execute school-wide academic and community activities. Managed stakeholder communication, registration, participant feedback, and on-site operations.",
    },
    {
      id: 2,
      title: "Team Lead – Booth Management",
      organization: "TVET 2025",
      years: "April – June 2025",
      description: "Led the booth management team, coordinated communication between event organizers and staff, and ensured efficient booth setup, decoration, visitor engagement, and participant support.",
    },
    {
      id: 3,
      title: "Flash Mob Coordinator",
      organization: "Celebrating Cambodia 2024",
      years: "November – December 2024",
      description: "Served as core team leader for event logistics and coordination, managing scheduling, choreography, and rehearsals for 50+ participants while coordinating with multiple teams to ensure successful live performance execution.",
    },
    {
      id: 4,
      title: "Facilities & Speaker Coordinator",
      organization: "Cambodia ICT Camp 2024",
      years: "December 2024",
      description: "Managed speaker coordination, session scheduling, and technical setup, while supporting participant communication, real-time coordination, and on-site assistance to ensure smooth event execution.",
    },
    {
      id: 5,
      title: "Digital Marketing Volunteer",
      organization: "Code – C Conference",
      years: "June – July 2024",
      description: "Created and managed engaging social media content, handled public inquiries and interactions, and collaborated with team members to enhance digital outreach and audience engagement strategies.",
    },
  ],
};

export const educationContent = {
  heading: "Education",
  schools: [
    {
      id: 1,
      degree: "Bachelor's Degree in Computer Science",
      specialization: "Specialized in Software Engineering",
      institution: "Cambodia Academy of Digital Technology (CADT)",
      years: "2024 – Present",
    },
  ],
};

export const contactContent = {
  heading: "Get in Touch",
  description: "I'm open to internship opportunities, collaborations, and new projects. Feel free to reach out!",
  socialLinks: [
    {
      name: "GitHub",
      url: siteConfig.github,
      icon: React.createElement('svg', { className: 'w-6 h-6', fill: 'currentColor', viewBox: '0 0 24 24' },
        React.createElement('path', { d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.492.998.108-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.194.602.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' })),
    },
    {
      name: "Email",
      url: `mailto:${siteConfig.email}`,
      icon: React.createElement('svg', { className: 'w-6 h-6', fill: 'currentColor', viewBox: '0 0 24 24' },
        React.createElement('path', { d: 'M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.728v15.441h24v-15.441l-12 9.728z' })),
    },
    {
      name: "Portfolio",
      url: siteConfig.portfolio,
      icon: React.createElement('svg', { className: 'w-6 h-6', fill: 'currentColor', viewBox: '0 0 24 24' },
        React.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' })),
    },
  ],
};

export const referenceContent = {
  name: "Mr. Natt KORAT",
  position: "Lecturer & Researcher at CADT",
  email: "natt.korat@cadt.edu.kh",
  telegram: "@nattKorat",
};