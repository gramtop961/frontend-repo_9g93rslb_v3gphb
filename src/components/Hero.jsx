import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center min-h-[70vh]">
          <div className="lg:col-span-6">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
            >
              Crafting playful, modern web experiences
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="mt-6 text-lg sm:text-xl text-slate-300"
            >
              I’m a frontend engineer who blends code, motion, and 3D to build interactive portfolios and products.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a href="#projects" className="px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all">See Projects</a>
              <a href="#contact" className="px-5 py-3 rounded-lg bg-white/10 text-white hover:bg-white/15 border border-white/10 transition-all">Get in touch</a>
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6"
            >
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'React', v: 95 },
                  { label: 'Framer Motion', v: 90 },
                  { label: 'Three/Spline', v: 85 },
                ].map((s, i) => (
                  <motion.div key={s.label} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 * i }} className="rounded-xl bg-slate-900/70 border border-white/10 p-4">
                    <div className="text-xs text-slate-400">{s.label}</div>
                    <div className="mt-2 h-2 rounded-full bg-slate-700">
                      <div className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: `${s.v}%` }} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[120vw] h-64 rounded-[50%] bg-gradient-to-t from-blue-500/20 to-transparent blur-3xl pointer-events-none" />
    </section>
  )
}
