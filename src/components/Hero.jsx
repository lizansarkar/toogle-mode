import React from 'react'
import { ArrowRight, Download, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero({ name = 'Your Name' }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }
  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6 bg-white dark:bg-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-black text-black dark:text-white mb-6 leading-tight tracking-tight">
            Hi, I'm {name}
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
            Full Stack Developer crafting elegant, performant web applications that solve real problems. Specializing in modern JavaScript and scalable architecture.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-16">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:opacity-80 transition-opacity duration-300"
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-black dark:border-white text-black dark:text-white font-semibold rounded-lg hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Resume
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 py-12 border-t border-b border-gray-300 dark:border-gray-700">
            <div>
              <div className="text-4xl font-black text-black dark:text-white mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">Projects</div>
            </div>
            <div>
              <div className="text-4xl font-black text-black dark:text-white mb-2">3+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">Years</div>
            </div>
            <div>
              <div className="text-4xl font-black text-black dark:text-white mb-2">20+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">Clients</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-black dark:text-white" />
      </motion.div>
    </section>
  )
}
