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
    { skill: "React.js", level: 95 },
    { skill: "Next.js", level: 90 },
    { skill: "Tailwind CSS", level: 95 },
    { skill: "JavaScript", level: 95        },
    { skill: "HTML5/CSS3", level: 95 },
    { skill: "UI/UX Implementation", level: 85 },
    { skill: "Responsive Design", level:100 },  
    { skill: "API Integration", level: 95              },
  ];
  
  // Categorized skills
  const skillCategories = [
    { 
      title: "Frontend Technologies", 
      icon: "🖥️",
      skills: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "JSX", "Redux", "Context API"]
    },
    { 
      title: "Styling Frameworks", 
      icon: "🎨",
      skills: ["Tailwind CSS", "Bootstrap", "SASS/SCSS", "Styled Components", "CSS Modules", "Material UI"]
    },
    { 
      title: "Performance Optimization", 
      icon: "⚡",
      skills: ["Code Splitting", "Lazy Loading", "Image Optimization", "Server-Side Rendering", "Static Site Generation", "Caching Strategies"]
    },
    { 
      title: "Tools & Platforms", 
      icon: "🔧",
      skills: ["Git/GitHub", "VS Code", "Chrome DevTools", "Vercel", "Netlify", "Shopify", "Headless CMS"]
    },
    { 
      title: "Design & Collaboration", 
      icon: "👥",
      skills: ["Figma", "Adobe XD", "Responsive Design", "Agile Methodology", "Scrum", "UI/UX Implementation"]
    }
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
I am a Software Engineer specializing in front-end development, with a passion for building high-performance web applications that deliver exceptional user experiences. My expertise encompasses a wide range of technologies, including React JS, Next.js, Bootstrap, Tailwind CSS, CSS, and HTML, enabling me to craft responsive and user-centric solutions that drive business success.
</p>
<p>
Utilizing Next.js, I enhance applications with optimized server-side rendering and static site generation, achieving fast, SEO-friendly, and engaging results. My commitment to excellence is demonstrated through a portfolio enriched by over 15 certifications, reflecting my dedication to delivering quality software solutions.
</p>
<p>
The utility-first approach of Tailwind CSS enables me to efficiently design custom interfaces, ensuring consistency and readability across projects. As a lifelong learner, I stay ahead of industry trends, constantly expanding my skill set to include the latest technologies and best practices.
</p>
<p>
I seek to connect with professionals and organizations that value innovation and quality. Let's explore how my skills, experience, and passion for front-end development can contribute to your projects and drive strategic success.
</p>
<h3 className="text-2xl font-bold mb-4 text-center ">
Key Competencies:
</h3>
<p>
- Mastery of React JS, Next.js, and Tailwind CSS for dynamic and efficient web development
</p>
<p>
- Proficiency in modern front-end technologies and methodologies, ensuring robust and scalable applications
</p>
<p>
- Commitment to performance optimization, leveraging advanced techniques for speed and efficiency
</p>
<p>
- Skill in API integration and management, enhancing application functionality and user experience
</p>
<p>
- Experience in agile development environments, fostering collaboration and driving projects to completion
</p>
<p>
For collaboration or to learn more about how I can contribute to your team, feel free to reach out.
</p>
              
              <div className="
              py-8 flex justify-center pb-12
               text-center lg:text-left">
       <AnimatedButton 
                  text="Download Resume"
                  href="https://drive.google.com/file/d/18vCGOTWgxf2GtjxyJq3pXTHjHCbdsING/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                />
            
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
     
    </section>
  );
};

export default AboutMeSection;