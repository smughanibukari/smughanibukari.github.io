"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ThemeToggle from "../../themebutton/button"; // Path corrected

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    const handleScroll = () => {
      const sections = ["home", "project", "about", "contact"];
      const scrollPosition = window.scrollY + 100; // Add offset for header

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    handleResize(); // Initialize on mount
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for header height
        behavior: "smooth",
      });
    }
    setNavbarOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="sticky top-0 z-50 bg-[#EEEEEE] dark:bg-[#111111]">
      <nav className="border-b border-gray-200 dark:border-gray-700 px-4 lg:px-6 py-4">
        <div className="flex flex-wrap items-center justify-between mx-auto">
          <div className="flex items-center">
        <Image src='/logo.png' alt='logo' width={50} height={50} />


          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }} className="flex items-center">
            <span className="text-[#F77400] font-bold text-2xl">SMU</span>
          </a>
          </div>
          <div className="flex items-center lg:order-2">
            <ThemeToggle />

            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-[#F77400] dark:focus:ring-[#F77400]/70"
              aria-controls="mobile-menu"
              aria-expanded={navbarOpen}
            >
              <span className="sr-only">Open main menu</span>
              {navbarOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586 14.293 4.293a1 1 0 111.414 1.414L11.414 10 15.707 14.293a1 1 0 01-1.414 1.414L10 11.414 5.707 15.707a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5h14a1 1 0 110 2H3a1 1 0 010-2zm0 4h14a1 1 0 110 2H3a1 1 0 010-2zm0 4h14a1 1 0 110 2H3a1 1 0 010-2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          
          <div
            className={`${
              navbarOpen ? "block" : "hidden"
            } w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 font-light lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="#home"
                  onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}
                  className={`flex items-center block py-2 pl-3 pr-4 lg:border-0 lg:p-0 transition-colors duration-200 ${
                    activeSection === "home" 
                      ? "text-[#F77400] font-medium" 
                      : "hover:text-[#F77400]"
                  }`}
                >
                  <svg 
                    className={`${navbarOpen ? "block" : "hidden"} lg:hidden mr-2 w-5 h-5`}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  onClick={(e) => { e.preventDefault(); scrollToSection("project"); }}
                  className={`flex items-center block py-2 pl-3 pr-4 lg:border-0 lg:p-0 transition-colors duration-200 ${
                    activeSection === "project" 
                      ? "text-[#F77400] font-medium" 
                      : "hover:text-[#F77400]"
                  }`}
                >
                  <svg 
                    className={`${navbarOpen ? "block" : "hidden"} lg:hidden mr-2 w-5 h-5`}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                  </svg>
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}
                  className={`flex items-center block py-2 pl-3 pr-4 lg:border-0 lg:p-0 transition-colors duration-200 ${
                    activeSection === "about" 
                      ? "text-[#F77400] font-medium" 
                      : "hover:text-[#F77400]"
                  }`}
                >
                  <svg 
                    className={`${navbarOpen ? "block" : "hidden"} lg:hidden mr-2 w-5 h-5`}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                  </svg>
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
                  className={`flex items-center block py-2 pl-3 pr-4 lg:border-0 lg:p-0 transition-colors duration-200 ${
                    activeSection === "contact" 
                      ? "text-[#F77400] font-medium" 
                      : "hover:text-[#F77400]"
                  }`}
                >
                  <svg 
                    className={`${navbarOpen ? "block" : "hidden"} lg:hidden mr-2 w-5 h-5`}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  Contact
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;