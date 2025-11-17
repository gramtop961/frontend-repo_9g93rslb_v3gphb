import { Menu, Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/5"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
          <span className="text-white font-semibold tracking-tight group-hover:text-cyan-200 transition-colors">Your Name</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#projects" className="text-slate-300 hover:text-white transition-colors">Projects</a>
          <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/5 text-slate-300 hover:text-white transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/5 text-slate-300 hover:text-white transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-shadow">
            <Mail className="h-4 w-4" /> Hire Me
          </a>
          <button className="md:hidden p-2 rounded-md hover:bg-white/5 text-slate-300 hover:text-white transition-colors" aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </motion.header>
  )
}
