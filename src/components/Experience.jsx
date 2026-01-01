import React from 'react'
import { Briefcase, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Tech Startup XYZ',
    duration: '2023 - Present',
    description: 'Built and maintained scalable full-stack applications. Led frontend architecture and mentored developers.',
    achievements: ['Increased app performance by 40%', 'Led team of 3 developers', 'Shipped 15+ features']
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Agency ABC',
    duration: '2022 - 2023',
    description: 'Developed responsive web applications and optimized user interfaces.',
    achievements: ['Improved UX score by 35%', 'Reduced bundle size by 50%', 'Created design system']
  },
  {
    role: 'Junior Developer',
    company: 'Web Solutions Inc',
    duration: '2021 - 2022',
    description: 'Started journey in web development, worked on multiple client projects.',
    achievements: ['Built 5+ client websites', 'Mastered React fundamentals', 'Collaborated with design team']
  }
]

export default function Experience() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }
  return (
    <motion.section id="experience" className="py-28 px-6 border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-black" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-black dark:text-white mb-12 sm:mb-16 tracking-tight px-2 sm:px-0"
        >
          Experience
        </motion.h2>
        
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, i) => (
            <motion.div key={i} variants={itemVariants} className="group border-l-2 border-gray-300 dark:border-gray-700 pl-8 pb-8 hover:border-gray-400 dark:hover:border-gray-600 transition-colors duration-300">
              <div className="flex items-start gap-4 mb-4">
                <Briefcase className="w-6 h-6 text-black dark:text-white mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black dark:text-white group-hover:translate-x-1 transition-transform duration-300">{exp.role}</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium text-lg">{exp.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4 ml-10">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium">{exp.duration}</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-5 ml-10 leading-relaxed font-medium">{exp.description}</p>
              <ul className="ml-10 space-y-2">
                {exp.achievements.map((achievement, j) => (
                  <li key={j} className="text-gray-600 dark:text-gray-400 text-sm flex items-start gap-3">
                    <span className="text-black dark:text-white font-bold mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

