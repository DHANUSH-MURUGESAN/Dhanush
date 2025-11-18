"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
  const projects = [
    {
      title: "Sweet Heart",
      description:
        "Developed a full-stack e-commerce platform for sweets and savouries, featuring product browsing, ordering, and user authentication.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      image:
        "https://royalsweetbakery.net/storage/gallery/May2019/atibB78OWqgjpwB3FMHj.jpg",
      github: "https://github.com/DHANUSH-MURUGESAN/Sweet-Heart",
      live: "#",
    },
    {
      title: "Dreamland Kids",
      description:
        "Built a responsive full-stack web app for a play school, enabling parents to explore facilities, view events, and enroll online.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      image:
        "https://www.parentmap.com/sites/default/files/styles/1180x660_scaled_cropped/public/2018-06/iStock-901208614.jpg?itok=qMuoY-Uc",
      github: "https://github.com/DHANUSH-MURUGESAN/Play_School",
      live: "#",
    },
    {
      title: "Spark Servicing",
      description:
        "Created a responsive loan servicing platform with advanced navigation features and modern design aesthetics.",
      tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React.js"],
      image:
        "https://wp.pgames.guru/wp-content/uploads/2022/06/loan_management_systems-1.jpg",
      github: "https://github.com/DHANUSH-MURUGESAN/Spark",
      live: "#",
    },
    {
      title: "Food Hub Platform",
      description:
        "Developed a dynamic and user-friendly groceries ordering platform for browsing, searching, and ordering grocery products online.",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
      image:
        "https://rachaelsrawfood.com/wp-content/uploads/2024/11/affordable_raw_food_strategies.jpg",
      github: "https://github.com/sherril203/food",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-amber-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-amber-400 to-amber-600 mx-auto mb-12"></div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-gray-800/50 backdrop-blur-md border border-gray-700 hover:border-amber-600 hover:border-2 rounded-2xl overflow-hidden group shadow-lg"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-amber-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm border border-amber-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <Link
                    href={project.github}
                    // target="_blank"
                    className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    <FaGithub size={20} />
                    <span>Code</span>
                  </Link>

                  <Link
                    href={project.live}
                    // target="_blank"
                    className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};