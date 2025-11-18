"use client";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export const Certification = () => {
  const certifications = [
    {
      title: "Web Development Essentials",
      provider: "IBM SkillsBuild",
      description:
        "Explored the foundations of front-end and back-end web development using HTML, CSS, and JavaScript. Gained practical skills to create responsive layouts and dynamic, user-friendly web interfaces from scratch.",
      year: "2025",
    },
    {
      title: "JavaScript Fundamentals",
      provider: "Great Stack",
      description:
        "Focused on JavaScript core concepts including functions, arrays, and events. Learned DOM manipulation and asynchronous programming to create interactive, efficient, and modern browser-based applications.",
      year: "2024",
    },
    {
      title: "HTML & CSS Bootcamp",
      provider: "LetsUpgrade",
      description:
        "Completed a hands-on program that emphasized responsive design and clean code practices. Developed pixel-perfect layouts and adaptive styles, ensuring smooth user experience across all screen sizes.",
      year: "2024",
    },
    {
      title: "HTML",
      provider: "Great Learning",
      description:
        "Covered the core structure of web pages including semantic elements, forms, and media embedding. Learned to build well-structured, accessible, and SEO-friendly web layouts following modern HTML5 standards.",
      year: "2022",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Professional <span className="text-amber-400">Credentials</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-amber-400 to-amber-600 mx-auto mb-12"></div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-amber-500/50 hover:shadow-amber-500/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-amber-500/20 rounded-lg border border-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                    <Award className="text-amber-400" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-amber-400 font-medium">
                      {cert.provider}
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed mb-4">
                  {cert.description}
                </p>
                <div className="text-right">
                  <span className="text-amber-500 font-semibold">
                    {cert.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
