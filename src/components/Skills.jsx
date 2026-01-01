import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiFirebase, SiNextdotjs, SiMongodb, SiExpress } from 'react-icons/si'
import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
      { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-600' },
      { name: 'React', icon: FaReact, color: 'text-sky-400' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white' },
      { name: 'Tailwind', icon: SiTailwindcss, color: 'text-teal-400' }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
      { name: 'Express.js', icon: SiExpress, color: 'text-gray-600' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
      { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' }
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: null, color: 'bg-red-600' },
      { name: 'Docker', icon: null, color: 'bg-blue-500' },
      { name: 'REST APIs', icon: null, color: 'bg-purple-600' }
    ]
  }
]

export default function Skills() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }
  return (
    <motion.section
      id="skills"
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
          Skills
        </motion.h2>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillGroups.map((group, i) => (
            <motion.div key={i} variants={cardVariants} whileHover={{ y: -8 }} className="group p-8 border border-gray-300 dark:border-gray-700 rounded-xl hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-900">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-8 group-hover:scale-105 transition-transform duration-300 origin-left">{group.title}</h3>
              <div className="space-y-6">
                {group.skills.map((skill, j) => {
                  const Icon = skill.icon
                  return (
                    <div key={j} className="flex items-center gap-4 group/skill cursor-pointer">
                      {Icon && <Icon className={`w-6 h-6 ${skill.color} group-hover/skill:scale-125 transition-transform duration-300`} />}
                      {!Icon && <div className={`w-6 h-6 rounded ${skill.color}`}></div>}
                      <span className="font-medium text-black dark:text-white group-hover/skill:translate-x-1 transition-transform duration-300">{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

