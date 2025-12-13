import type { ReactNode } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
// import FireCursor from "@/app/FireCursor/FireCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dhanush Portfolio",
  description: "Dhanush is a MERN Stack Developer specializing in React, Next.js, Node.js, Express, and MongoDB. Experienced in building scalable, responsive web applications and e-commerce platforms,",
  keywords: [
    "Dhanush Portfolio",
    "dhanush portfoio",
    "Dhanush MERN Stack Developer",
    "Dhanush Full Stack Developer",
    "MERN Stack Developer Chennai",
    "mern stack developer chennai",
    "Full Stack Developer Portfolio",
    "React Developer Portfolio",
    "React.js Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Web Developer Chennai",
    "Web Developer",
    "Frontend Developer React",
    "Backend Developer Node.js",
    "MongoDB Developer",
    "E-commerce Web Developer",
    "Software Developer Fresher",
    "Junior Full Stack Developer",
    "Responsive Web Design",
    "Developer",
    "Portfolio of a Developer",
    "Portfolio website",
    "Freelance Web Developer India"
  ],
  authors: [{ name: "Dhanush" }],
  creator: "Dhanush",
  openGraph: {
    title: "Dhanush | MERN Stack Developer",
    description:
      "Portfolio of Dhanush, a MERN Stack Developer building modern, scalable, and responsive web applications using React, Next.js, Node.js, and MongoDB.",
    url: "https://dhanushm-nine.vercel.app",
    siteName: "Dhanush Portfolio",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Dhanush MERN Stack Developer Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* <FireCursor/> */}
        {children}
      </body>
    </html>
  );
}
