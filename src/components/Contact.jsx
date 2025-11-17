import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function Contact() {
  const action = `${import.meta.env.VITE_BACKEND_URL || ''}/contact`

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white text-center">Let’s talk</motion.h2>
        <motion.form
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          method="post"
          action={action}
          className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-300">Name</label>
              <input name="name" required className="mt-1 w-full rounded-lg bg-slate-900/70 border border-white/10 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Email</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-lg bg-slate-900/70 border border-white/10 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm text-slate-300">Message</label>
            <textarea name="message" rows="5" required className="mt-1 w-full rounded-lg bg-slate-900/70 border border-white/10 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-cyan-500" />
          </div>
          <button type="submit" className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all">
            <Send className="h-4 w-4" /> Send message
          </button>
        </motion.form>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </section>
  )
}
