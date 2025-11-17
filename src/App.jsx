import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_top,rgba(56,189,248,0.08),transparent),radial-gradient(800px_400px_at_bottom,rgba(59,130,246,0.08),transparent)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="relative border-t border-white/5 py-8 text-center text-slate-400">
        © {new Date().getFullYear()} Your Name. Built with React, Tailwind, Framer Motion, and Spline.
      </footer>
    </div>
  )
}

export default App
