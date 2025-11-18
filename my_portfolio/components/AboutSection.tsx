'use client'
import { siteData } from '@/utils/data'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react';

// export default function AboutSection(){
//   return (
//     <div className="max-w-5xl mx-auto px-6 py-20">
//       <motion.div initial={{ y:30, opacity:0 }} whileInView={{ y:0, opacity:1 }} viewport={{once:true}} transition={{duration:0.6}}>
//         <h2 className="text-3xl font-semibold">About Me</h2>
//         <p className="mt-4 text-neutral-300">Enthusiastic and results-driven Information Technology undergraduate with hands-on experience in full-stack and UI/UX development. Skilled in React.js, Express.js, Node.js and MongoDB, with experience building e-commerce and service platforms.</p>

//         <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="glass p-6 rounded-xl">
//             <h3 className="font-medium">Contact</h3>
//             <p className="mt-2 text-sm">{siteData.location} • {siteData.phone} • <a href={`mailto:${siteData.email}`} className="underline">{siteData.email}</a></p>
//             <div className="mt-4 flex gap-3">
//               <a href={siteData.linkedin} className="text-xl"></a>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   )
// } 

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            About <span className="text-amber-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-amber-400 to-amber-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                {siteData.bio}
              </p>
              {/* <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in the MERN stack: React, Next.js, Express.js, Node.js, and MongoDB. 
                I build responsive, production-ready interfaces with a focus on performance and exceptional user experience.
              </p> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-6 text-amber-400">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MapPin className="text-amber-400" size={24} />
                  <span className="text-gray-300">{siteData.location}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-amber-400" size={24} />
                  <span className="text-gray-300">{siteData.phone}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="text-amber-400" size={24} />
                  <a href={`mailto:${siteData.email}`} className="text-gray-300 hover:text-amber-400 transition-colors">
                    {siteData.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};