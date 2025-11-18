
// import AboutSection from '@/components/AboutSection'
// import ContactForm from '@/components/ContactForm'
// import Experience from '@/components/Experience'
// import Footer from '@/components/Footer'
// import Hero from '@/components/Hero'
// import Projects from '@/components/Projects'

"use client";
import { useEffect } from "react";
import { About } from "@/components/AboutSection";
import { Certification } from "@/components/Certification";
import { ContactForm } from "@/components/ContactForm";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Nav from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { WhatsAppButton } from "@/components/Whatsapp";


// export default function Home() {
//   return (
//     <main>
//       <Hero />
//       <section id="about">
//         <AboutSection />
//       </section>
//       <section id="projects">
//         <Projects />
//       </section>
//       <section id="experience">
//         <Experience />
//       </section>
//       <section id="contact">
//         <ContactForm />
//       </section>
//       <Footer />
//     </main>
//   )
// }


export default function Portfolio() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden no-scrollbar">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certification/>
      <ContactForm />
      <Footer />
      <WhatsAppButton/>
    </div>
  );
}