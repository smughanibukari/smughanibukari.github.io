'use client'

import Link from 'next/link';

const ProjectCard = ({ title, description, bgColor, projectUrl }) => {
  return (
    <div className="group relative h-72 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer">
      {/* Background color instead of image */}
      <div className="absolute inset-0 w-full h-full" style={{ backgroundColor: bgColor }}>
        {/* Dark overlay gradient - always visible, slightly stronger on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
      </div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <h3 className="text-xl sm:text-2xl font-bold mb-2 transition-transform duration-500">
          {title}
        </h3>
        
        <p className="text-sm text-gray-200 opacity-90 transition-all duration-500">
          {description}
        </p>
        
        {/* Button that appears on hover */}
        <div className="mt-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <a 
            href={projectUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2 bg-white text-black font-medium rounded-lg inline-block hover:bg-[#F77400] hover:text-white transition-colors duration-300"
          >
            Visit My Work
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsShowcase = () => {
  const projects = [
    {
      title: "Coach ZR",
      description: "A coaching platform that provides personalized training and performance analytics.",
      bgColor: "#3B82F6", // Blue
      projectUrl: "https://coachzr.com/"
    },
    {
      title: "Nala Art",
      description: "A digital art platform showcasing creative works and digital collectibles.",
      bgColor: "#8B5CF6", // Purple
      projectUrl: "https://nala.art/"
    },
    {
      title: "Pulse Frontier",
      description: "Empowering precision and performance for outdoor experiences with cutting-edge technology.",
      bgColor: "#10B981", // Green
      projectUrl: "http://pulsefrontier.com/"
    },
    {
      title: "Enliven AI",
      description: "AI-powered solutions for business intelligence and automation needs.",
      bgColor: "#F59E0B", // Amber
      projectUrl: "https://enlivensai.com/"
    },
    {
      title: "BeExcel.AI",
      description: "An AI-powered platform that enhances productivity and performance tracking.",
      bgColor: "#EF4444", // Red
      projectUrl: "https://www.beexcel.ai/"
    },
    {
      title: "ShotPulse",
      description: "A shooting analytics platform providing instant feedback and performance metrics.",
      bgColor: "#EC4899", // Pink
      projectUrl: "https://shotpulse.com/"
    },
    {
      title: "PMD Digital",
      description: "Digital marketing solutions optimized for performance and conversion.",
      bgColor: "#14B8A6", // Teal
      projectUrl: "https://www.pmd.digital/"
    }
  ];

  return (
    <section className="py-16 transition-colors duration-300">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-[#F77400]">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of my professional work across various industries and technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;