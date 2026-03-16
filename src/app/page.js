// app/page.js

import HomePageContent from "./home/page";

export const metadata = {
  title: "Syed Muhammad Usama | Frontend Software Engineer",
  description: 
    "Professional Frontend Developer specializing in React.js, Next.js, and modern CSS frameworks with 4+ years of experience building high-performance web applications.",
  keywords: [
    "Frontend Developer",
    "Software Engineer",
    "React.js Developer",
    "Next.js Expert",
    "Web Development",
    "Tailwind CSS",
    "UI/UX Development",
    "Performance Optimization",
    "Frontend Architecture",
    "API Integration",
    "Responsive Web Design",
    "JavaScript Developer",
    "Frontend Specialist"
  ],

  openGraph: {
    title: "Syed Muhammad Usama | Frontend Software Engineer",
    description: 
      "Professional Frontend Developer with expertise in React.js, Next.js, and modern CSS frameworks. Building high-performance web applications with exceptional user experiences.",
    url: "https://www.syedmuhamadusama.com", // Replace with your actual URL
    images: [
      {
        url: "/logo.png",
        width: 48,
        height: 48,
        alt: "Syed Muhammad Usama - Frontend Developer"
      },
    ],
  },
};

export default function HomePage() {
  return <HomePageContent />;
}