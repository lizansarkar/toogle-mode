import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ArrowRight, Download } from 'lucide-react'

export default function Hero({ name = 'Your Name' }) {
  const titleRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    // Animate title letters on mount
    const titleChars = titleRef.current?.querySelectorAll('.char')
    if (titleChars) {
      gsap.fromTo(
        titleChars,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.05, ease: 'back.out' }
      )
    }

    // Parallax effect
    const handleScroll = () => {
      gsap.to(containerRef.current, {
        y: window.scrollY * 0.3,
        duration: 0.5,
        overwrite: 'auto'
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  return (
    <section ref={containerRef} className="min-h-screen relative overflow-hidden flex items-center justify-center pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold">✨ Welcome to my portfolio</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 dark:from-purple-400 dark:via-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">
                {name.split('').map((char, i) => (
                  <span key={i} className="char">{char}</span>
                ))}
              </span>
            </h1>

            <motion.p variants={itemVariants} className="text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl">
              I build <span className="font-bold text-purple-600 dark:text-purple-400">scalable, performant web applications</span> that solve real problems. Full-stack JavaScript specialist with a passion for clean code and exceptional UX.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(168, 85, 247, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-lg hover:shadow-xl transition group"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                className="flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-200 font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex gap-8">
              {[
                { label: 'Projects', value: '15+' },
                { label: 'Years', value: '3+' },
                { label: 'Happy Clients', value: '20+' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">{stat.value}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Card */}
          <motion.div variants={itemVariants}>
            <motion.div
              whileHover={{ y: -20 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              
              <div className="relative glass rounded-3xl p-8 backdrop-blur-xl bg-white/40 dark:bg-slate-800/40 border border-white/20 dark:border-slate-700/50">
                <div className="flex items-center gap-6 mb-8">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-28 h-28 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-4xl shadow-2xl"
                  >
                    LS
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{name}</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold">Full Stack Developer</p>
                  </div>
                </div>

                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  Turning ideas into elegant solutions. I combine modern tech with thoughtful design to create web experiences that matter.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {['React', 'Node.js', 'Next.js', 'MongoDB'].map((tech, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(168, 85, 247, 0.1)' }}
                      className="px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300 text-center"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex items-start justify-center p-2">
            <motion.div className="w-1 h-2 bg-slate-400 dark:bg-slate-600 rounded-full"></motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
