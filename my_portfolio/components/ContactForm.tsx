"use client";
import { siteData } from "@/utils/data";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // show loading toast instantly
    const loadingToast = toast.loading("Sending message...");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.update(loadingToast, {
          render: "✅ Message sent successfully!",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });

        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.update(loadingToast, {
          render: "❌ " + (data.error || "Something went wrong"),
          type: "error",
          isLoading: false,
          autoClose: 2500,
        });
      }
    } catch (err) {
      toast.update(loadingToast, {
        render: "⚠️ Server error. Try again later.",
        type: "error",
        isLoading: false,
        autoClose: 2500,
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Get In <span className="text-amber-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-amber-400 to-amber-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Let's work together</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-amber-500/20 rounded-lg border border-amber-500/30">
                    <Mail className="text-amber-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <Link
                      href={`mailto:${siteData.email}`}
                      className="text-white hover:text-amber-400 transition-colors"
                    >
                      {siteData.email}
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-amber-500/20 rounded-lg border border-amber-500/30">
                    <Phone className="text-amber-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Phone</p>
                    <p className="text-white">{siteData.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-amber-500/20 rounded-lg border border-amber-500/30">
                    <MapPin className="text-amber-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Location</p>
                    <p className="text-white">{siteData.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center"
            >
              <div className="relative group">
                {/* Floating animation wrapper */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  <Image
                    src="/get_in_touch.png"
<<<<<<< HEAD
                    width={200}
                    height={200}
=======
                    width={180}
                    height={180}
>>>>>>> d9f30dc (new changes)
                    alt="Get in touch"
                    className="scale-x-[-1] drop-shadow-[0_0_15px_#fbbf24] sm:hidden md:block lg:block xl:block"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/*<motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label className="block text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-amber-500 focus:outline-none text-white transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-amber-500 focus:outline-none text-white transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Your Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:border-amber-500 focus:outline-none text-white transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.form>*/}
          </div>
        </motion.div>
      </div>
      <ToastContainer position="top-right" theme="dark" />
    </section>
  );
};
