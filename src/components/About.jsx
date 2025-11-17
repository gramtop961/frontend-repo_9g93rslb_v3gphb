import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white">About me</motion.h2>
        <motion.p initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-6 text-lg text-slate-300">
          I design and build immersive, animated web experiences. My work blends delightful micro-interactions with clean, accessible UI. I love pushing what’s possible in the browser with performance in mind.
        </motion.p>
        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-8 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 text-white border border-white/10">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for freelance projects
        </motion.div>
      </div>
    </section>
  )
}
