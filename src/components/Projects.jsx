import React, { useEffect, useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import projectsData from '../data/projects'

gsap.registerPlugin(ScrollTrigger)

const projects = projectsData || []

export default function Projects() {
  const cardsRef = useRef([])

  useEffect(() => {
    // GSAP ScrollTrigger: Parallax effect on project cards
    cardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
          markers: false
        },
        opacity: 0,
        y: 60,
        duration: 1
      })
    })

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  }, [])
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }
  return (
    <motion.section
      id="projects"
      className="py-28 px-6 border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white mb-12 sm:mb-16 tracking-tight px-2 sm:px-0"
        >
          Featured Projects
        </motion.h2>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, i) => (
            <motion.div ref={(el) => (cardsRef.current[i] = el)} key={i} variants={cardVariants} whileHover={{ y: -8, transition: { duration: 0.2 } }} className="group border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-900">
              <div className="overflow-hidden bg-gray-200 dark:bg-gray-800 h-48">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-black dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-400 mb-5 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, j) => (
                    <span key={j} className="text-xs px-3 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full font-medium transition-colors duration-300 group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pt-6 border-t border-gray-300 dark:border-gray-700">
                  <a href="#" className="inline-flex items-center gap-2 text-black dark:text-white hover:opacity-70 transition-opacity duration-300">
                    <Github className="w-5 h-5" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 text-black dark:text-white hover:opacity-70 transition-opacity duration-300">
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm font-medium">Live</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

