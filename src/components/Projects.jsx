import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Playful Dashboard',
    desc: 'A motion-first analytics dashboard with buttery transitions and glassmorphism.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    link: '#'
  },
  {
    title: '3D Landing',
    desc: 'Interactive hero with Spline and parallax layers for a modern product site.',
    tags: ['Spline', 'Three.js', 'Vite'],
    link: '#'
  },
  {
    title: 'Micro SaaS',
    desc: 'Subscription-based tool with sleek onboarding and responsive UI.',
    tags: ['Stripe', 'React Router', 'Radix'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white">Selected work</motion.h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i, duration: 0.6 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-200 transition-colors">{p.title}</h3>
                  <p className="mt-2 text-slate-300 text-sm">{p.desc}</p>
                </div>
                <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-white transition-colors" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="px-2 py-1 rounded-md bg-slate-900/70 border border-white/10 text-xs text-slate-300">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -z-0 top-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </section>
  )
}
