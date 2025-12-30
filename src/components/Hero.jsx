import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Download } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Hero({ name = 'Your Name' }) {
  const titleRef = useRef(null)
  const containerRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    // Animate title letters on mount
    const titleChars = titleRef.current?.querySelectorAll('.char')
    if (titleChars) {
      gsap.fromTo(
        titleChars,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.08, ease: 'back.out' }
      )
    }

    // Parallax effect on scroll
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1.5,
        markers: false
      },
      y: 100,
      opacity: 0.8,
      ease: 'power2.inOut'
    })
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: 'easeOut' }
    }
  }

  return (
    <section ref={sectionRef} className="min-h-screen relative overflow-hidden flex items-center justify-center pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 -right-20 w-96 h-96 bg-gradient-to-br from-purple-400/15 to-indigo-400/15 dark:from-purple-600/25 dark:to-indigo-600/25 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-br from-cyan-400/15 to-blue-400/15 dark:from-cyan-600/25 dark:to-blue-600/25 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div ref={containerRef} className="container mx-auto px-6 relative z-10">
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
              transition={{ duration: 0.7 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-sm font-bold tracking-wide">✨ Welcome to my portfolio</span>
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6 text-slate-900 dark:text-white">
              <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 dark:from-purple-400 dark:via-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">
                {name.split('').map((char, i) => (
                  <span key={i} className="char">{char}</span>
                ))}
              </span>
            </h1>

            <motion.p variants={itemVariants} className="text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl font-medium">
              I create <span className="font-bold text-purple-600 dark:text-purple-400">scalable, performant web applications</span> that solve real problems. Full-stack JavaScript specialist with a passion for clean code and exceptional UX.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(168, 85, 247, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-lg hover:shadow-2xl transition group dark:from-purple-500 dark:to-indigo-500"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                className="flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 font-bold hover:bg-slate-100 dark:hover:bg-slate-900/50 transition"
              >
                <Download className="w-5 h-5" />
                Resume
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex gap-8">
              {[
                { label: 'Projects', value: '15+' },
                { label: 'Years', value: '3+' },
                { label: 'Clients', value: '20+' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">{stat.value}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold">{stat.label}</div>
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
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 rounded-3xl blur-2xl opacity-20 dark:opacity-30 group-hover:opacity-40 transition duration-1000"></div>
              
              <div className="relative glass rounded-3xl p-8 backdrop-blur-xl">
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
                    <p className="text-purple-600 dark:text-purple-400 font-bold">Full Stack Developer</p>
                  </div>
                </div>

                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed font-medium">
                  Turning ideas into elegant solutions. I combine modern tech with thoughtful design to create experiences that matter.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {['React', 'Node.js', 'Next.js', 'MongoDB'].map((tech, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.08, backgroundColor: 'rgba(168, 85, 247, 0.15)' }}
                      className="px-4 py-3 rounded-lg bg-slate-100 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200 text-sm font-semibold text-center transition border border-slate-200 dark:border-slate-700"
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
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="text-center">
          <p className="text-sm text-slate-600 dark:text-slate-500 mb-2 font-medium">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex items-start justify-center p-2">
            <motion.div className="w-1 h-2 bg-slate-400 dark:bg-slate-600 rounded-full"></motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
