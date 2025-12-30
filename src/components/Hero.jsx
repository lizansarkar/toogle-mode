import React from 'react'
import { motion } from 'framer-motion'

export default function Hero({ name = 'Your Name' }) {
  return (
    <section className="py-16 flex flex-col lg:flex-row items-center gap-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1"
      >
        <p className="text-sm text-primary font-medium">Hi, my name is</p>
        <h1 className="text-4xl md:text-6xl font-extrabold mt-3 leading-tight">{name}</h1>
        <p className="mt-4 text-lg text-slate-700 dark:text-slate-300 max-w-xl">Middle Stack Developer who builds fast, scalable & user-focused web apps. I specialize in full-stack JavaScript technologies and modern UI/UX.</p>

        <div className="mt-6 flex gap-4">
          <a href="#projects" className="px-5 py-3 rounded-md bg-primary text-white font-medium shadow hover:opacity-95">View Projects</a>
          <a href="/public/resume.pdf" className="px-5 py-3 rounded-md border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200">Download Resume</a>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0.98, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="flex-1"
      >
        <div className="glass rounded-2xl p-6 w-full max-w-md mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-indigo-400 flex items-center justify-center text-white font-bold text-2xl">LS</div>
            <div>
              <div className="font-semibold text-lg">Lizan Sarkar</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">Middle Stack Developer</div>
            </div>
          </div>

          <div className="mt-4 text-sm text-slate-700 dark:text-slate-300">
            I craft elegant, maintainable systems using React, Node.js and modern databases. I enjoy building delightful user experiences and robust backends.
          </div>

        </div>
      </motion.div>
    </section>
  )
}
