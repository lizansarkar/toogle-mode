import React from 'react'
import { Code2, Zap, Target, Users } from 'lucide-react'
import { motion } from 'framer-motion'

export default function About() {
  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Well-structured, maintainable code that follows best practices and design patterns.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Fast, optimized applications that deliver excellent user experience.'
    },
    {
      icon: Target,
      title: 'User-Focused',
      description: 'Designs centered on user needs with intuitive interfaces and smooth interactions.'
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Team player who communicates well and enjoys working with diverse teams.'
    }
  ]

  return (
    <motion.section
      id="about"
      className="py-28 px-6 border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-black dark:text-white mb-16 tracking-tight"
        >
          About Me
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-16 leading-relaxed font-medium max-w-3xl"
        >
          I'm a full-stack developer with a passion for building elegant, performant web applications. With 3+ years of experience, I've worked on projects ranging from small startups to established companies, always focusing on delivering exceptional value.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.2 }}
        >
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group p-8 border border-gray-300 dark:border-gray-700 rounded-xl hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-900"
              >
                <Icon className="w-8 h-8 text-black dark:text-white mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-black dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-700 dark:text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}
