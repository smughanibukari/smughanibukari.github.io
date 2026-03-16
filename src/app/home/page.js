'use client';

import Link from 'next/link';
import Image from 'next/image';
import ProjectShowcase from './ProjectsShowcase.js';
import AnimatedButton from '../components/button/button.js';
import AboutMeSection from './AboutMeSection.js';
import ContactSection from './contact.js';

export default function HeroSection() {
  // Function to handle button clicks
  const handleButtonClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className='w-11/12 sm:w-10/12 lg:w-11/12 mx-auto screen-2200:w-10/12 screen-2200:mx-auto'>
        <div id="home" className="relative overflow-hidden">
          {/* No background color, just subtle pattern */}
          <div className="absolute inset-0 opacity-5 z-0">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center"></div>
          </div>
          
          <div className="relative z-10">
            <div className="p-4 flex flex-col lg:flex-row items-center justify-between min-h-screen py-10 sm:py-16 lg:py-20 screen-2200:min-h-max screen-2200:py-32">
              
              {/* Left side content - more responsive */}
              <div className="w-full lg:w-9/12 text-center lg:text-left lg:pr-8">
                <div className="mb-6">
                  <div className="inline-block transition-all duration-500">
                    <span className="text-xs sm:text-sm md:text-base lg:text-base-md xl:text-base-lg font-light px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-[#F77400]">
                      Senior Full Stack Engineer <span className="text-[#F77400]">|</span> Frontend Lead
                    </span>
                  </div>
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-heading-md xl:text-heading-lg 2xl:text-heading-xl font-medium mb-4 sm:mb-6 transition-all duration-500 delay-200">
                  Engineering <span className="text-[#F77400]">Scalable</span> SaaS Platforms & <span className="text-[#F77400]">AI-Powered</span> Web Experiences
                </h1>
                
                <p className="text-base sm:text-lg lg:text-base-md xl:text-base-lg 2xl:text-base-xl font-light mb-6 sm:mb-8 transition-all duration-500 delay-400 max-w-2xl mx-auto lg:mx-0">
                  I'm <strong>Syed Muhammad Usama</strong>, a Senior Full Stack Engineer & Frontend Lead with 4+ years of experience architecting multi-tenant SaaS platforms, leading frontend teams, and shipping production-grade systems. I bridge the full stack — from pixel-perfect React & Next.js interfaces to robust Python Django APIs, containerized Docker deployments, and real-time WebSocket systems — with a relentless focus on performance, security, and scalability.
                </p>
                
                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start transition-all duration-500 delay-600">
                  <span className="px-2 sm:px-3 py-1 bg-gray-100/30 rounded-full text-xs sm:text-sm border border-gray-200/30 hover:border-[#F77400]/30 transition-all duration-300 hover:transform hover:scale-105">React.js</span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-100/30 rounded-full text-xs sm:text-sm border border-gray-200/30 hover:border-[#F77400]/30 transition-all duration-300 hover:transform hover:scale-105">Next.js</span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-100/30 rounded-full text-xs sm:text-sm border border-gray-200/30 hover:border-[#F77400]/30 transition-all duration-300 hover:transform hover:scale-105">TypeScript</span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-100/30 rounded-full text-xs sm:text-sm border border-gray-200/30 hover:border-[#F77400]/30 transition-all duration-300 hover:transform hover:scale-105">Python Django</span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-100/30 rounded-full text-xs sm:text-sm border border-gray-200/30 hover:border-[#F77400]/30 transition-all duration-300 hover:transform hover:scale-105">Docker</span>
                  <span className="px-2 sm:px-3 py-1 bg-gray-100/30 rounded-full text-xs sm:text-sm border border-gray-200/30 hover:border-[#F77400]/30 transition-all duration-300 hover:transform hover:scale-105">JWT / OAuth2</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 justify-center lg:justify-start transition-all duration-500 delay-800">
                  <AnimatedButton
                     onClick={() => handleButtonClick('project')}
                     text='View Projects'
                    />
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
              
              {/* Right side image - more responsive */}
              <div className="w-full lg:w-3/12 mt-12 lg:mt-0 flex justify-center transition-all duration-500 delay-300">
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square">
                  {/* Replace with your profile image or a relevant illustration */}
                  <div className="w-full h-full rounded-full border-4 border-[#F77400]/30 p-2">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#F77400]/10 to-[#F77400]/5 overflow-hidden flex items-center justify-center">
                      <div className="text-[#F77400] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
                        <Image src="/smu1.jpeg" alt="Profile Image" width={500} height={500} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-[#F77400]/10 rounded-full blur-lg"></div>
                  <div className="absolute -bottom-6 -left-6 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 bg-[#F77400]/10 rounded-full blur-lg"></div>
                  
                  {/* Experience badge - responsive */}
                  <div className="absolute top-0 right-0 bg-white/70 rounded-full px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium shadow-lg">
                    4+ Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project showcase with ID for navigation */}
        <div id="project">
          <ProjectShowcase />
        </div>

        {/* About me section with ID for navigation */}
        <div id="about">
          <AboutMeSection />
        </div>

        {/* Contact section with ID for navigation */}
        <div id="contact">
          <ContactSection />
        </div>
      </div>
    </>
  );
}