"use client"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "KSmacc Software India Private Limited",
      period: "Dec 2025 – Present",
      description:
        "Worked on the development and enhancement of cloud-based business management and accounting software solutions. Contributed to building responsive web interfaces and backend APIs to support accounting, billing, and inventory management modules.",
      achievements: [
        "Developed and maintained web application features using React.js, Next.js, Node.js and MongoDB.",
        "Built reusable and responsive UI components to improve user experience across desktop and mobile devices.",
        "Integrated RESTful APIs to handle business operations such as billing, inventory, and user management.",
        "Collaborated with team members using Git and GitHub for version control and code reviews.",
        "Identified and fixed bugs to improve application performance and reliability."
  ],

    },
    {
      role: "Full Stack Developer Intern",
      company: "Why Global Services",
      period: "Jan 2025 – Nov 2025",
      description:
        "Contributing to the development of responsive and user-friendly E-commerce web applications using the MERN stack. Focused on building reusable UI components and optimizing performance for a seamless user experience.",
      achievements: [
        "Developed scalable web modules using React.js, Node.js, Express.js, and MongoDB.",
        "Implemented secure authentication and authorization using JWT and bcrypt.",
        "Collaborated with developers using Git & GitHub for smooth version control.",
        "Enhanced frontend performance and responsiveness across all device sizes."
      ],
    },
    {
      role: "Web Developer Intern",
      company: "Bharat Intern",
      period: "July 2024 – Aug 2024",
      description:
        "Worked on building responsive and interactive web pages using modern front-end technologies. Focused on transforming Figma designs into production-ready, mobile-first web interfaces.",
      achievements: [
        "Developed a responsive homepage for an E-commerce platform using HTML, CSS, and JavaScript.",
        "Optimized page structure and loading speed by applying modern CSS techniques.",
        "Collaborated with team members through GitHub for code reviews and version control.",
        "Improved mobile usability and cross-browser compatibility."
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Work <span className="text-amber-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-12"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <p className="text-amber-400 text-lg font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 mt-2 md:mt-0">{exp.period}</span>
                </div>
                
                <p className="text-gray-300 mb-4">{exp.description}</p>
                
                <div className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <ChevronRight className="text-amber-400 mt-1 flex-shrink-0" size={20} />
                      <span className="text-gray-400">{achievement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
