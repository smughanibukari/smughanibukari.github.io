'use client'

import { useState } from 'react';

import AnimatedButton from '../components/button/button.js';

// Skill category component with expandable details
const SkillCategory = ({ title, skills, icon }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="bg-white dark:bg-gray-800/50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div 
        className="p-4 flex items-center justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-3">
          <span className="text-[#F77400] text-xl">{icon}</span>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <span className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
          ↓
        </span>
      </div>
      
      <div className={`grid grid-cols-2 sm:grid-cols-3 gap-2 p-4 pt-0 transition-all duration-300 ${
        isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-100 dark:bg-gray-700/50 rounded-lg p-2 text-sm text-center">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

// Progress bar component for skill proficiency
const SkillBar = ({ skill, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{skill}</span>
        <span className="text-xs text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-gradient-to-r from-[#F77400] to-[#FF9A45] h-2.5 rounded-full" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const AboutMeSection = () => {
  // Core skills with proficiency levels
  const coreSkills = [
    { skill: "React.js / Next.js", level: 95 },
    { skill: "TypeScript", level: 90 },
    { skill: "Python / Django", level: 88 },
    { skill: "REST APIs / DRF", level: 92 },
    { skill: "Tailwind CSS", level: 95 },
    { skill: "Docker / CI/CD", level: 85 },
    { skill: "JWT / OAuth2", level: 88 },
    { skill: "WebSockets / Socket.io", level: 85 },
  ];

  const experience = [
    {
      role: "Senior Software Engineer | Frontend Lead",
      company: "HolisticTLC",
      period: "08/2024 – Present",
      location: "Bahawalpur",
      highlights: [
        "Lead frontend development of high-performance SaaS platforms using React 18 and Next.js (v11, 14, 15, 16).",
        "Architected scalable multi-tenant systems with complex server routing and shared API integration layers.",
        "Developed AI-powered editorial tools and real-time communication using Socket.io & WebSockets.",
        "Oversaw DevOps and infrastructure with Docker and Jenkins CI/CD.",
        "Implemented secure authentication frameworks (JWT, OAuth2) with CSRF protection.",
        "Optimized performance and SEO, achieving top-tier Core Web Vitals using SSR and SSG.",
      ],
      tech: "React 18, Next.js, TypeScript, Django, DRF, Jest/RTL, Cypress, Docker, Jenkins, Nginx, JWT, OAuth2, AWS S3, Socket.io, AI Chatbots",
    },
    {
      role: "Full Stack Developer / Software Engineer",
      company: "EnlivenAI",
      period: "01/2023 – 07/2024",
      location: "Bahawalpur",
      highlights: [
        "Architected and maintained diverse web platforms using Next.js and Django across the full development lifecycle.",
        "Engineered scalable REST APIs with Django REST Framework; integrated Google OAuth2 and custom SMTP engines.",
        "Developed content management tools with image processing pipelines using Pillow and Cloudinary.",
        "Orchestrated secure payment gateway integrations (Stripe, PayPal) with real-time sales analytics.",
        "Managed DevOps using Docker, Docker Compose, CORS, SSL proxy headers, and Hostinger cloud storage.",
      ],
      tech: "Next.js, React, TypeScript, Python 3.12, Django 5.1, DRF, Tailwind CSS, PostgreSQL, Docker, Hostinger, Jest/RTL",
    },
    {
      role: "Frontend Developer",
      company: "Influercive Media LLC",
      period: "08/2021 – 12/2022",
      location: "Lahore, Pakistan",
      highlights: [
        "Developed responsive, high-performance web applications using React.js.",
        "Translated complex designs into pixel-perfect frontend code, maintaining usability and visual fidelity.",
        "Conducted frontend code reviews to ensure quality, maintainability, and best practices.",
      ],
      tech: "React.js, JavaScript, HTML5, CSS3, Tailwind CSS, Git",
    },
    {
      role: "Frontend Developer",
      company: "Savvy Programmes",
      period: "02/2021 – 07/2021",
      location: "Lahore, Pakistan",
      highlights: [
        "Developed and maintained e-commerce websites using Shopify's platform.",
        "Customized Shopify themes to meet client requirements.",
        "Collaborated with the client team to ensure visually appealing and user-friendly sites.",
      ],
      tech: "Shopify, HTML5, CSS3, JavaScript",
    },
  ];

  // Categorized skills
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: "🖥️",
      skills: ["React 18/19", "Next.js (App Router)", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Redux", "Context API"],
    },
    {
      title: "Backend & APIs",
      icon: "🔌",
      skills: ["Python 3.12", "Django 5.1", "Django REST Framework", "PostgreSQL", "REST APIs", "Google APIs", "SMTP", "Stripe / PayPal"],
    },
    {
      title: "DevOps & Infrastructure",
      icon: "🐳",
      skills: ["Docker", "Docker Compose", "Jenkins CI/CD", "Nginx", "AWS S3", "Hostinger", "SSL / CORS", "GitHub Actions"],
    },
    {
      title: "Security & Auth",
      icon: "🔒",
      skills: ["JWT", "OAuth2", "CSRF Protection", "Middleware", "Session Management", "HTTPS", "Secure Headers"],
    },
    {
      title: "Real-Time & AI",
      icon: "🤖",
      skills: ["Socket.io", "WebSockets", "AI Chatbots", "Editorial Automation", "AI Dashboards", "Pillow", "Cloudinary"],
    },
    {
      title: "Performance & Testing",
      icon: "⚡",
      skills: ["SSR / SSG", "Core Web Vitals", "SEO Optimization", "Jest/RTL", "Cypress", "Code Splitting", "Lazy Loading"],
    },
  ];
  
  return (
    <section id="about" className="py-16 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-[#F77400]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#F77400] to-[#FF9A45] mx-auto mb-6"></div>
        </div>

        <div className="lg:pr-6
        text-center
        ">
   
            
            <div className="space-y-4 text-base">
            <p>
Senior Software Engineer with 4+ years of experience designing and developing scalable SaaS platforms and high-performance web applications. Specialized in building modern frontend architectures using React, Next.js, and TypeScript, while integrating robust backend systems with Python Django and REST APIs.
</p>
<p>
Experienced in leading frontend development, optimizing application performance and SEO, and delivering secure, production-ready systems with JWT/OAuth authentication. Proven ability to develop AI-powered features including chatbots, editorial automation tools, and real-time communication systems using WebSockets.
</p>
<p>
Skilled in working across the full software lifecycle — from architecture and development to containerized deployments using Docker and CI/CD pipelines — with a strong focus on scalability, reliability, and maintainable code.
</p>
<h3 className="text-2xl font-bold mb-4 text-center mt-2">
Key Competencies:
</h3>
<p>- Full-stack development across the entire software lifecycle from UI/UX to infrastructure</p>
<p>- Advanced proficiency in Next.js (App Router), React 18/19, TypeScript, and Django 5.1</p>
<p>- Designing multi-tenant SaaS environments with secure subdomain routing</p>
<p>- Expert-level DevOps with Docker, Jenkins CI/CD, and Nginx for containerized deployments</p>
<p>- AI integration: architecting AI-powered dashboards, chatbots, and automation layers</p>
<p>- Performance optimization: SEO strategies, Core Web Vitals, SSR/SSG for speed</p>
              
              <div className="
              py-8 flex justify-center pb-12
               text-center lg:text-left">
       <a
                  href="https://drive.google.com/file/d/1NI9LtRUTubxDzFXPSo1NDUUKKgXhkzhG/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[#F77400] text-[#F77400] font-medium hover:bg-[#F77400] hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 16l-5-5 1.41-1.41L11 13.17V4h2v9.17l2.59-2.58L17 11l-5 5zm-7 2h14v2H5v-2z"/>
                  </svg>
                  Download CV
                </a>
            
              </div>
            </div>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      
         
          

        

                {/* Left column - About me text */}
            
            
            {/* Skills bars */}
            <div className="mb-8">
            <h3 className="text-2xl font-bold my-6
             text-center lg:text-left">Core Expertise</h3>
              {coreSkills.map((item, index) => (
                <SkillBar key={index} skill={item.skill} level={item.level} />
              ))}
            </div>
            
            {/* Skill categories */}

                      {/* Right column - Skills */}
            <div>
              <h3 className="text-2xl font-bold my-6
               text-center lg:text-left">Skill Categories</h3>
              
              <div className="space-y-3">
                {skillCategories.map((category, index) => (
                  <SkillCategory 
                    key={index} 
                    title={category.title} 
                    skills={category.skills} 
                    icon={category.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            Work <span className="text-[#F77400]">Experience</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-[#F77400] to-[#FF9A45] mx-auto mb-10"></div>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <div key={index} className="bg-white dark:bg-gray-800/50 rounded-xl shadow-md p-6 border-l-4 border-[#F77400]">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1">
                  <h4 className="text-lg font-bold">{job.role}</h4>
                  <span className="text-sm text-[#F77400] font-medium whitespace-nowrap">{job.period}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{job.company} &mdash; {job.location}</p>
                <ul className="space-y-1 mb-4">
                  {job.highlights.map((point, i) => (
                    <li key={i} className="text-sm flex items-start gap-2">
                      <span className="text-[#F77400] mt-1 shrink-0">▸</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-400 italic"><span className="font-semibold not-italic text-gray-500">Tech:</span> {job.tech}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-16 mb-4">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-[#F77400]">Education</span>
          </h3>
          <div className="w-20 h-1 bg-gradient-to-r from-[#F77400] to-[#FF9A45] mx-auto mb-10"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800/50 rounded-xl shadow-md p-6 border-l-4 border-[#F77400]">
              <p className="text-sm text-[#F77400] font-medium mb-1">10/2017 – 10/2021</p>
              <h4 className="text-lg font-bold mb-1">Bachelor of Science in Computer Science</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Lahore Leads University – City Campus</p>
            </div>
            <div className="bg-white dark:bg-gray-800/50 rounded-xl shadow-md p-6 border-l-4 border-[#F77400]">
              <p className="text-sm text-[#F77400] font-medium mb-1">2008 – 2014</p>
              <h4 className="text-lg font-bold mb-1">Matriculation – Intermediate Pre-Engineering</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Pakistan International School Riyadh</p>
            </div>
          </div>
        </div>

    </section>
  );
};

export default AboutMeSection;