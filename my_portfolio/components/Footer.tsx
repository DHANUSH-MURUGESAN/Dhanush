'use client'
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { siteData } from '@/utils/data'
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-8 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © {new Date().getFullYear()} <span className="text-amber-400 font-semibold">{siteData.name}</span>. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <Link href={siteData.github} className="text-gray-400 hover:text-amber-400 transition-colors">
              <FaGithub size={24} />
            </Link>
            <Link href={siteData.linkedin} className="text-gray-400 hover:text-amber-400 transition-colors">
              <FaLinkedin size={24} />
            </Link>
            <Link href={`mailto:${siteData.email}`} className="text-gray-400 hover:text-amber-400 transition-colors">
              <Mail size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};