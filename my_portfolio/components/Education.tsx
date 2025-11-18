"use client"
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export const Education = () => {
  
  const education = [
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Jeppiaar Institute Of Technology",
    period: "2021 - 2025",
    grade: "CGPA: 7.64/10"
  },
  {
    degree: "HSC",
    institution: "Revoor Padmanabha Chetty’s Matric Higher Secondary School",
    period: "2019 - 2021",
    grade: "Percentage: 78.32%"
  }
];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            <span className="text-amber-400">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-12"></div>

          <div className="max-w-3xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/20 rounded-lg border border-amber-500/30">
                    <GraduationCap className="text-amber-400" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-amber-400 text-lg font-medium mb-2">{edu.institution}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-400">
                      <span>{edu.period}</span>
                      <span className="font-semibold text-amber-400">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};