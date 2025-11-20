import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-[#0D0D0D] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark vignette + gradient glow overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(200,167,95,0.12),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(0,196,180,0.12),transparent_40%)]"></div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 sm:pt-36 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md"
        >
          <span className="h-2 w-2 rounded-full bg-[#00C4B4] shadow-[0_0_12px_#00C4B4]"></span>
          <span className="text-sm text-white/80">Opes Digital</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9 }}
          className="mt-6 bg-gradient-to-br from-white via-white to-[#C8A75F] bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl"
        >
          The Future of Digital Wealth Is Here
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg"
        >
          Custody. Currency. Blockchain. Legacy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#ecosystem" className="group inline-flex items-center justify-center rounded-lg bg-[#C8A75F] px-6 py-3 text-sm font-medium text-black shadow-[0_10px_30px_rgba(200,167,95,0.25)] transition hover:brightness-110">
            Explore the Ecosystem
          </a>
          <a href="#access" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/10">
            Request Access
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
