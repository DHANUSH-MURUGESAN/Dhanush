'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { siteData } from '@/utils/data'
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';


export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                {siteData.name}
              </span>
            </motion.h1>
            
            <motion.p
              className="text-2xl md:text-3xl text-gray-400 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {siteData.role}
            </motion.p>
            
            <motion.p
              className="text-lg text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              I’m an enthusiastic <span className="text-amber-400 font-medium">Full-Stack Developer </span> 
              with a passion for building <span className="text-amber-400">scalable and visually engaging web applications</span>. 
              Skilled in the <span className="text-amber-400">MERN stack</span>, I focus on crafting seamless user experiences, 
              writing clean and efficient code, and delivering modern digital products that blend performance with design precision.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-amber-500 text-amber-500 font-semibold rounded-full hover:bg-amber-500 hover:text-black transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              className="flex gap-6 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Link href={siteData.github} className="text-gray-400 hover:text-amber-400 transition-colors">
                <FaGithub size={28} />
              </Link>
              <Link href={siteData.linkedin} className="text-gray-400 hover:text-amber-400 transition-colors">
                <FaLinkedin size={28} />
              </Link>
              <Link href={`mailto:${siteData.email}`} className="text-gray-400 hover:text-amber-400 transition-colors">
                <Mail size={28} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="w-48 sm:w-52 md:w-72 lg:w-80 xl:w-96 aspect-square mx-auto relative">
              <div className="absolute inset-0 bg-linear-to-br from-amber-500 to-amber-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full bg-linear-to-br from-amber-500/20 to-amber-600/20 rounded-full border-2 border-amber-500/30 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-linear-to-br from-gray-800 to-gray-900 flex items-center justify-center text-6xl font-bold text-amber-400">
                  <Image src="/profiles.png" alt="Dhanush M" width={360} height={30} className="w-24 sm:w-40 md:w-56 lg:w-72 xl:w-76 absolute top-0 rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};