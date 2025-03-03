import Header from "./components/HeaderFooter/header";
// import Footer from "./components/HeaderFooter/footer";

import { Poppins } from "next/font/google";
import "../app/style/globals.css";

// Initialize the Poppins font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

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
    url: "https://www.syedmuhamadusama.com", 
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme') || 'light';
                if (savedTheme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`min-h-screen bg-[#EEEEEE] dark:bg-[#111111] text-black dark:text-[#EEEEEE] ${poppins.className} mx-auto`}
        style={{ maxWidth: "3250px" }} 
      >
        <Header />
        <hr className="border-b border-[#F77400]" />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}