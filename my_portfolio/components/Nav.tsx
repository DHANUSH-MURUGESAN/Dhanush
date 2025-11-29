'use client'
import Link from 'next/link'
import { useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="w-full fixed z-40 top-0 left-0 bg-black/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-1 py-4 flex items-center justify-between">
        <Link href="#" className="text-xl font-semibold text-amber-400">Dhanush M</Link>
        <div className="hidden md:flex gap-6 items-center">
          <a href="#about" className="hover:text-amber-400 hover:drop-shadow-[0_0_3px_#FFF3E2]">About</a>
          <a href="#skills" className="hover:text-amber-400 hover:drop-shadow-[0_0_3px_#FFF3E2]">Skills</a>
          <a href="#projects" className="hover:text-amber-400 hover:drop-shadow-[0_0_3px_#FFF3E2]">Projects</a>
          <a href="#experience" className="hover:text-amber-400 hover:drop-shadow-[0_0_3px_#FFF3E2]">Experience</a>
          <a href="#contact" className="hover:text-amber-400 hover:drop-shadow-[0_0_3px_#FFF3E2]">Contact</a>
          <a 
            href="/Dhanush Resume - MERN Stack Developer 1.pdf" 
            download="Dhanush_M_Resume.pdf" 
            className="px-4 py-2 border border-amber-400 rounded-md text-sm hover:bg-amber-400 hover:text-black transition-all"
          >
            Resume
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="menu">
            {open ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
        </div>
      </div>
      {/* {open && (
        <div className="md:hidden bg-neutral-900/80 backdrop-blur py-4">
          <div className="flex flex-col items-center gap-4">
            <Link href="#about" onClick={() => setOpen(false)}>About</Link>
            <Link href="#skills" onClick={() => setOpen(false)}>Skills</Link>
            <Link href="#projects" onClick={() => setOpen(false)}>Projects</Link>
            <Link href="#experience" onClick={() => setOpen(false)}>Experience</Link>
            <Link href="#contact" onClick={() => setOpen(false)}>Contact</Link>
            <Link 
              href="/Dhanush Resume - MERN Stack Developer 1.pdf" 
              download="Dhanush_M_Resume.pdf"
              className="px-4 py-2 border border-amber-400 rounded-md"
            >
              Resume
            </Link>
          </div>
        </div>
      )} */}
      {open && (
  <div className="md:hidden fixed top-16 right-0 w-40 bg-black/80 backdrop-blur py-6 rounded-bl-4xl shadow-xl">
    <div className="flex flex-col gap-4 px-2 justify-center items-center">
      <Link href="#about" onClick={() => setOpen(false)}>About</Link>
      <Link href="#skills" onClick={() => setOpen(false)}>Skills</Link>
      <Link href="#projects" onClick={() => setOpen(false)}>Projects</Link>
      <Link href="#experience" onClick={() => setOpen(false)}>Experience</Link>
      <Link href="#contact" onClick={() => setOpen(false)}>Contact</Link>

      <Link
        href="/Dhanush Resume - MERN Stack Developer 1.pdf"
        download="Dhanush_M_Resume.pdf"
        className="px-4 py-2 border border-amber-400 rounded-md  hover:bg-amber-400 hover:text-black"
      >
        Resume
      </Link>
    </div>
  </div>
)}
    </nav>
  )
}
