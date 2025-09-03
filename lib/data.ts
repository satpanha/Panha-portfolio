import React from 'react';

export const siteConfig = {
  name: "Alex Johnson",
  title: "Full-Stack Developer",
  tagline: "Building digital experiences that matter",
  description: "A modern, clean, and professional portfolio for Alex Johnson, a Full-Stack Developer.",
  email: "alex.johnson@example.com",
  github: "https://github.com/alexjohnson",
  linkedin: "https://www.linkedin.com/in/alexjohnson",
  twitter: "https://twitter.com/alexjohnson",
};

export const heroContent = {
  name: siteConfig.name,
  title: siteConfig.title,
  tagline: siteConfig.tagline,
};

export const aboutContent = {
  heading: "About Me",
  paragraphs: [
    "Hello! I'm Alex Johnson, a passionate Full-Stack Developer with a knack for creating robust and scalable web applications. My journey in tech began with a fascination for problem-solving and has evolved into a dedication to crafting seamless user experiences.",
    "I specialize in building end-to-end solutions, leveraging modern technologies to bring ideas to life. My expertise spans across front-end development with React and Next.js, back-end systems with Node.js and Python, and database management with PostgreSQL. I'm also proficient in cloud platforms like AWS.",
    "Outside of coding, I enjoy exploring new hiking trails, experimenting with smart home tech, and diving into the latest sci-fi novels. I believe continuous learning and a balanced lifestyle are key to innovation and personal growth.",
  ],
};

export const skillsContent = {
  heading: "My Skills",
  categories: [
    {
      name: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Python", "Express.js", "REST APIs", "GraphQL"],
    },
    {
      name: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL"],
    },
    {
      name: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Git", "CI/CD"],
    },
    {
      name: "Tools",
      skills: ["VS Code", "Figma", "Jira", "Postman"],
    },
  ],
};

export const projectsContent = {
  heading: "Featured Projects",
  projects: [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with user authentication, product catalog, shopping cart, and payment integration.",
      techStack: ["Next.js", "React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Stripe"],
      liveLink: "https://example.com/ecommerce",
      githubLink: "https://github.com/alexjohnson/ecommerce-platform",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and drag-and-drop functionality.",
      techStack: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      liveLink: "https://example.com/task-app",
      githubLink: "https://github.com/alexjohnson/task-management-app",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application displaying current and forecasted weather data using a third-party API.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "OpenWeather API"],
      liveLink: "https://example.com/weather-dashboard",
      githubLink: "https://github.com/alexjohnson/weather-dashboard",
    },
    {
      id: 4,
      title: "Portfolio Website (v1)",
      description: "My previous personal portfolio website, showcasing earlier projects and skills.",
      techStack: ["React", "JavaScript", "CSS"],
      liveLink: "https://example.com/old-portfolio",
      githubLink: "https://github.com/alexjohnson/old-portfolio",
    },
  ],
};

export const experienceContent = {
  heading: "Experience",
  jobs: [
    {
      id: 1,
      title: "Full-Stack Developer",
      company: "Tech Solutions Inc.",
      years: "2022 - Present",
      description: "Developed and maintained scalable web applications, contributing to both front-end and back-end features. Implemented new APIs and optimized database queries.",
    },
    {
      id: 2,
      title: "Junior Developer",
      company: "Web Innovations Co.",
      years: "2020 - 2022",
      description: "Assisted in the development of client websites, focusing on responsive design and user interface improvements. Gained experience in agile methodologies.",
    },
  ],
};

export const contactContent = {
  heading: "Get in Touch",
  description: "Have a question or want to work together? Feel free to reach out!",
  socialLinks: [
    { name: "GitHub", url: siteConfig.github, icon: React.createElement('svg', { className: 'w-6 h-6', fill: 'currentColor', viewBox: '0 0 24 24' }, React.createElement('path', { d: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.492.998.108-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.194.602.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' })), // Placeholder for GitHub icon
    { name: "LinkedIn", url: siteConfig.linkedin, icon: React.createElement('svg', { className: 'w-6 h-6', fill: 'currentColor', viewBox: '0 0 24 24' }, React.createElement('path', { d: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' })), // Placeholder for LinkedIn icon
    { name: "Twitter", url: siteConfig.twitter, icon: React.createElement('svg', { className: 'w-6 h-6', fill: 'currentColor', viewBox: '0 0 24 24' }, React.createElement('path', { d: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.791-1.574 2.164-2.722-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.418.712-.656 1.546-.656 2.474 0 1.61.823 3.023 2.072 3.856-.766-.025-1.485-.23-2.118-.582v.06c0 3.224 2.304 5.858 5.373 6.465-.527.145-1.083.221-1.649.221-.402 0-.79-.039-1.162-.11 1.267 4.2 4.924 7.274 9.257 7.354-2.891 2.268-6.518 3.042-9.913 2.629-.784-.118-1.54-.292-2.27-.534 3.729 2.351 8.105 3.729 12.874 3.729 15.376 0 23.87-12.243 23.87-23.894 0-.366-.012-.73-.035-1.093z' })), // Placeholder for Twitter icon
    { name: "Email", url: `mailto:${siteConfig.email}`, icon: React.createElement('svg', { className: 'w-6 h-6', fill: 'currentColor', viewBox: '0 0 24 24' }, React.createElement('path', { d: 'M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.728v15.441h24v-15.441l-12 9.728z' })), // Placeholder for Email icon
  ],
};
