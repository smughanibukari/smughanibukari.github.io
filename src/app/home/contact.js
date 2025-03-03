'use client'

import { Mail, MapPin, Phone, Linkedin, Github, Code, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden ">
      {/* Background overlays */}
    
      
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl font-bold mb-6">
            Let's <span className="text-orange-500">Connect</span>
          </h2>
          <p className=" max-w-2xl mx-auto">
            I'm always interested in new projects and opportunities. Feel free to reach out through any of the channels below.
          </p>
        </div>
        
        {/* Contact Cards with Overlay Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Email Card */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:-translate-y-2">
            {/* Orange Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 opacity-90"></div>
            
            {/* Content */}
            <div className="relative p-8 z-10 h-full flex flex-col">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 text-orange-500 shadow-md group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6" />
              </div>
              
              <h3 className="text-white text-xl font-bold mb-2">Email Me</h3>
              <p className="text-orange-100 mb-6">Reach out via email for inquiries, proposals, or just to say hello!</p>
              
              <a 
                href="mailto:smusamag@gmail.com" 
                className="mt-auto text-white font-medium flex items-center"
              >
                smusamag@gmail.com
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
              </a>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-tl-full"></div>
            <div className="absolute top-12 left-0 w-4 h-12 bg-white/20 rounded-r-full"></div>
          </div>
          
          {/* WhatsApp Card */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-500 hover:-translate-y-2">
            {/* Green Gradient Overlay for WhatsApp */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 opacity-90"></div>
            
            {/* Content */}
            <div className="relative p-8 z-10 h-full flex flex-col">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 text-green-600 shadow-md group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6" />
              </div>
              
              <h3 className="text-white text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-green-100 mb-6">Send me a message on WhatsApp for a quick response to your queries.</p>
              
              <a 
                href="https://wa.me/923222229775" 
                className="mt-auto text-white font-medium flex items-center"
                target="_blank" 
                rel="noopener noreferrer"
              >
                +92 322 222 9775
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">→</span>
              </a>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-tl-full"></div>
            <div className="absolute top-12 left-0 w-4 h-12 bg-white/20 rounded-r-full"></div>
          </div>
          
          {/* Location Card */}

        </div>
        
        {/* Connect With Me Section with Orange Overlay Card */}
        <div className="relative overflow-hidden rounded-3xl shadow-lg mb-8 group">
    {/* Animated gradient background with extreme movement */}
    <div className="absolute inset-0 bg-gradient-to-r bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 bg-size-200 animate-gradient-extreme"></div>
    
    {/* Extreme moving animated elements */}
    <div className="absolute inset-0 overflow-hidden">
      {/* Larger floating circles with extreme movement */}
      <div className="absolute w-32 h-32 bg-white/20 rounded-full top-[10%] left-[10%] animate-orbit-large"></div>
      <div className="absolute w-24 h-24 bg-white/20 rounded-full top-[30%] right-[15%] animate-orbit-large animation-reverse animation-delay-2000"></div>
      <div className="absolute w-40 h-40 bg-white/20 rounded-full bottom-[15%] left-[25%] animate-orbit-large animation-delay-4000"></div>
      <div className="absolute w-28 h-28 bg-white/20 rounded-full bottom-[30%] right-[25%] animate-orbit-large animation-reverse animation-delay-6000"></div>
      
      {/* Rapidly moving lines */}
      <div className="absolute w-full h-1 bg-gradient-to-r from-white/0 via-white/30 to-white/0 top-[10%] left-0 animate-slide-fast"></div>
      <div className="absolute w-full h-1 bg-gradient-to-r from-white/0 via-white/30 to-white/0 top-[30%] left-0 animate-slide-fast animation-delay-1000"></div>
      <div className="absolute w-full h-1 bg-gradient-to-r from-white/0 via-white/30 to-white/0 top-[50%] left-0 animate-slide-fast animation-delay-2000"></div>
      <div className="absolute w-full h-1 bg-gradient-to-r from-white/0 via-white/30 to-white/0 top-[70%] left-0 animate-slide-fast animation-delay-3000"></div>
      <div className="absolute w-full h-1 bg-gradient-to-r from-white/0 via-white/30 to-white/0 top-[90%] left-0 animate-slide-fast animation-delay-4000"></div>
      
      {/* Spinning elements */}
      <div className="absolute w-40 h-40 border-2 border-white/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow"></div>
      <div className="absolute w-60 h-60 border-2 border-white/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow animation-reverse"></div>
      <div className="absolute w-80 h-80 border-2 border-white/5 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow animation-delay-2000"></div>
      
      {/* Flying particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div 
          key={i}
          className={`absolute w-2 h-2 bg-white/40 rounded-full animate-fly-diagonal animation-delay-${i * 200}`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${6 + Math.random() * 8}s`
          }}
        ></div>
      ))}
      
      {/* Pulsing blobs */}
      <div className="absolute w-24 h-24 bg-orange-300/30 rounded-full blur-xl top-1/4 left-1/4 animate-pulse-extreme"></div>
      <div className="absolute w-36 h-36 bg-orange-400/30 rounded-full blur-xl bottom-1/4 right-1/4 animate-pulse-extreme animation-delay-2000"></div>
    </div>
    
    {/* Dynamic light beam effect */}
    <div className="absolute top-0 left-1/2 w-40 h-full bg-gradient-to-b from-orange-200/60 via-white/30 to-orange-200/60 blur-xl -translate-x-1/2 animate-light-beam"></div>
    
    <div className="relative z-10 p-10 text-center backdrop-blur-sm">
      <h3 className="text-white text-3xl font-bold mb-10 text-shadow-glow animate-pulse-text">Connect With Me</h3>
      
      <div className="flex flex-wrap justify-center gap-8">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/smusamag"
          target="_blank"
          rel="noopener noreferrer"
          className="group/icon"
          aria-label="LinkedIn"
        >
          <div className="w-16 h-16 relative bg-gradient-to-br from-orange-200 to-orange-400 rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover/icon:scale-125 hover:shadow-orange-300/50 hover:rotate-6 overflow-hidden animate-float-extreme">
            <div className="absolute inset-0 bg-white opacity-90 group-hover/icon:opacity-100 transition-opacity"></div>
            <Linkedin className="w-7 h-7 text-blue-600 relative z-10 group-hover/icon:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 opacity-0 group-hover/icon:opacity-100 bg-gradient-to-r from-orange-200/0 via-orange-300/60 to-orange-200/0 animate-shine-fast"></div>
          </div>
        </a>
        
        {/* GitHub */}
        <a
          href="https://github.com/smusamag1"
          target="_blank"
          rel="noopener noreferrer"
          className="group/icon"
          aria-label="GitHub"
        >
          <div className="w-16 h-16 relative bg-gradient-to-br from-orange-200 to-orange-400 rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover/icon:scale-125 hover:shadow-orange-300/50 hover:-rotate-6 overflow-hidden animate-float-extreme animation-delay-300">
            <div className="absolute inset-0 bg-white opacity-90 group-hover/icon:opacity-100 transition-opacity"></div>
            <Github className="w-7 h-7 text-gray-800 relative z-10 group-hover/icon:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 opacity-0 group-hover/icon:opacity-100 bg-gradient-to-r from-orange-200/0 via-orange-300/60 to-orange-200/0 animate-shine-fast"></div>
          </div>
        </a>
        
        {/* Stack Overflow */}
        <a
          href="https://stackoverflow.com/users/15229464/syed-muhammad-usama"
          target="_blank"
          rel="noopener noreferrer"
          className="group/icon"
          aria-label="Stack Overflow"
        >
          <div className="w-16 h-16 relative bg-gradient-to-br from-orange-200 to-orange-400 rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover/icon:scale-125 hover:shadow-orange-300/50 hover:rotate-6 overflow-hidden animate-float-extreme animation-delay-600">
            <div className="absolute inset-0 bg-white opacity-90 group-hover/icon:opacity-100 transition-opacity"></div>
            <Code className="w-7 h-7 text-orange-500 relative z-10 group-hover/icon:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 opacity-0 group-hover/icon:opacity-100 bg-gradient-to-r from-orange-200/0 via-orange-300/60 to-orange-200/0 animate-shine-fast"></div>
          </div>
        </a>
        
        {/* WhatsApp */}
        <a
          href="https://wa.me/923222229775"
          target="_blank"
          rel="noopener noreferrer"
          className="group/icon"
          aria-label="WhatsApp"
        >
          <div className="w-16 h-16 relative bg-gradient-to-br from-orange-200 to-orange-400 rounded-xl flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover/icon:scale-125 hover:shadow-orange-300/50 hover:-rotate-6 overflow-hidden animate-float-extreme animation-delay-900">
            <div className="absolute inset-0 bg-white opacity-90 group-hover/icon:opacity-100 transition-opacity"></div>
            <MessageCircle className="w-7 h-7 text-green-600 relative z-10 group-hover/icon:scale-110 transition-transform duration-300" />
            <div className="absolute inset-0 opacity-0 group-hover/icon:opacity-100 bg-gradient-to-r from-orange-200/0 via-orange-300/60 to-orange-200/0 animate-shine-fast"></div>
          </div>
        </a>
      </div>
      
      {/* Call to action with extreme animation */}
      <div className="mt-12">
        <a 
          href="mailto:smusamag@gmail.com?subject=Let's Work Together" 
          className="relative inline-block px-10 py-5 bg-white text-orange-500 font-bold rounded-xl shadow-xl hover:shadow-orange-300/50 transition-all duration-300 hover:scale-110 active:scale-95 overflow-hidden group/cta"
        >
          <span className="relative z-10 group-hover/cta:animate-pulse-text transition-all duration-300">Let's Work Together</span>
          <span className="absolute inset-0 bg-gradient-to-r from-orange-100 to-amber-100"></span>
          <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-orange-200 to-amber-200 group-hover/cta:w-full transition-all duration-500 ease-out"></span>
          <span className="absolute top-0 right-0 w-12 h-full bg-white/40 skew-x-30 transform -translate-x-32 group-hover/cta:translate-x-96 transition-transform duration-700"></span>
          
          {/* Ripple effect on hover */}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-orange-300/40 rounded-full group-hover/cta:w-[300%] group-hover/cta:h-[300%] transition-all duration-700"></span>
        </a>
      </div>
    </div>
    
    {/* CSS for extreme animations */}
    <style jsx>{`
      @keyframes gradient-extreme {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      @keyframes orbit-large {
        0% { transform: rotate(0deg) translateX(50px) rotate(0deg); }
        100% { transform: rotate(360deg) translateX(50px) rotate(-360deg); }
      }
      
      @keyframes slide-fast {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      
      @keyframes spin-slow {
        0% { transform: translate(-50%, -50%) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(360deg); }
      }
      
      @keyframes fly-diagonal {
        0% { 
          transform: translate(0, 0);
          opacity: 0;
        }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { 
          transform: translate(calc(100vw - 100%), calc(100vh - 100%));
          opacity: 0;
        }
      }
      
      @keyframes pulse-extreme {
        0%, 100% { 
          transform: scale(0.8);
          opacity: 0.3;
        }
        50% { 
          transform: scale(1.5);
          opacity: 0.6;
        }
      }
      
      @keyframes pulse-text {
        0%, 100% { 
          transform: scale(1);
          opacity: 1;
        }
        50% { 
          transform: scale(1.1);
          opacity: 0.9;
        }
      }
      
      @keyframes float-extreme {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        25% { transform: translateY(-12px) rotate(5deg); }
        50% { transform: translateY(0) rotate(0deg); }
        75% { transform: translateY(12px) rotate(-5deg); }
      }
      
      @keyframes shine-fast {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      
      @keyframes light-beam {
        0%, 100% { 
          opacity: 0.3;
          transform: translateX(-50%) rotate(0deg);
        }
        50% { 
          opacity: 0.7;
          transform: translateX(-50%) rotate(180deg);
        }
      }
      
      .bg-size-200 {
        background-size: 200% 200%;
      }
      
      .animate-gradient-extreme {
        animation: gradient-extreme 8s ease infinite;
      }
      
      .animate-orbit-large {
        animation: orbit-large 15s linear infinite;
      }
      
      .animate-slide-fast {
        animation: slide-fast 3s linear infinite;
      }
      
      .animate-spin-slow {
        animation: spin-slow 20s linear infinite;
      }
      
      .animate-fly-diagonal {
        animation: fly-diagonal 10s linear infinite;
      }
      
      .animate-pulse-extreme {
        animation: pulse-extreme 6s ease-in-out infinite;
      }
      
      .animate-pulse-text {
        animation: pulse-text 2s ease-in-out infinite;
      }
      
      .animate-float-extreme {
        animation: float-extreme 2.5s ease-in-out infinite;
      }
      
      .animate-shine-fast {
        animation: shine-fast 1s linear infinite;
      }
      
      .animate-light-beam {
        animation: light-beam 8s ease-in-out infinite;
      }
      
      .text-shadow-glow {
        text-shadow: 0 0 10px rgba(255,255,255,0.7), 0 0 20px rgba(255,165,0,0.5);
      }
      
      .animation-reverse {
        animation-direction: reverse;
      }
      
      .animation-delay-200 {
        animation-delay: 0.2s;
      }
      
      .animation-delay-300 {
        animation-delay: 0.3s;
      }
      
      .animation-delay-600 {
        animation-delay: 0.6s;
      }
      
      .animation-delay-900 {
        animation-delay: 0.9s;
      }
      
      .animation-delay-1000 {
        animation-delay: 1s;
      }
      
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      
      .animation-delay-3000 {
        animation-delay: 3s;
      }
      
      .animation-delay-4000 {
        animation-delay: 4s;
      }
      
      .animation-delay-6000 {
        animation-delay: 6s;
      }
      
      .skew-x-30 {
        --tw-skew-x: 30deg;
        transform: var(--tw-transform);
      }
    `}</style>
  </div>
        
        {/* Map Integration */}
        <div className="relative overflow-hidden rounded-2xl shadow-lg">
          <div className="aspect-w-16 aspect-h-9 h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111160.2877895881!2d71.6140258752302!3d29.3828381896293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b90f02223c599%3A0x5f58de3c129ae53!2sBahawalpur%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1708698765293!5m2!1sen!2s" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Bahawalpur, Punjab, Pakistan"
              className="w-full h-full"
            ></iframe>
          </div>
          
          {/* Orange overlay on hover */}
          <div className="absolute inset-0 bg-orange-500 opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      </div>
      
      {/* Decorative bottom element */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64  rounded-full blur-3xl"></div>
    </section>
  );
};

export default ContactSection;