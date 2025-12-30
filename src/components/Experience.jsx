import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Tech Startup XYZ',
    duration: '2023 - Present',
    description: 'Built and maintained scalable full-stack applications. Led frontend architecture decisions and mentored junior developers.',
    achievements: ['Increased app performance by 40%', 'Led team of 3 developers', 'Shipped 15+ features']
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Agency ABC',
    duration: '2022 - 2023',
    description: 'Developed responsive web applications and optimized user interfaces for better engagement.',
    achievements: ['Improved UX score by 35%', 'Reduced bundle size by 50%', 'Created design system']
  },
  {
    role: 'Junior Developer',
    company: 'Web Solutions Inc',
    duration: '2021 - 2022',
    description: 'Started journey in web development, worked on multiple client projects and learned modern tech stack.',
    achievements: ['Built 5+ client websites', 'Mastered React fundamentals', 'Collaborated with design team']
  }
]

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  }

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">Professional Journey</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">3+ years of building exceptional web experiences</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-indigo-500/0 md:w-0.5"></div>

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`relative md:grid md:grid-cols-2 ${i % 2 === 0 ? 'md:text-right' : ''}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-6 -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full border-4 border-white dark:border-slate-900 shadow-lg"></div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:col-start-2'}`}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>

                  <div className="relative glass rounded-xl p-6 backdrop-blur-xl bg-white/40 dark:bg-slate-800/40 border border-white/20 dark:border-slate-700/50">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-lg">
                        <Briefcase className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                        <p className="text-purple-600 dark:text-purple-400 font-semibold">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>

                    <p className="text-slate-700 dark:text-slate-300 mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-400">Key achievements:</p>
                      {exp.achievements.map((achievement, j) => (
                        <motion.div
                          key={j}
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                        >
                          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></span>
                          {achievement}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
