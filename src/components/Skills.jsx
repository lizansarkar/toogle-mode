import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiFirebase, SiNextdotjs, SiMongodb, SiExpress } from 'react-icons/si'
import gsap from 'gsap'

const skillGroups = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'HTML', icon: <FaHtml5 className="text-orange-500" />, level: 95 },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" />, level: 90 },
      { name: 'Tailwind', icon: <SiTailwindcss className="text-teal-400" />, level: 95 },
      { name: 'React', icon: <FaReact className="text-sky-400" />, level: 92 },
      { name: 'Next.js', icon: <SiNextdotjs className="text-slate-700 dark:text-slate-300" />, level: 88 }
    ]
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" />, level: 90 },
      { name: 'Express.js', icon: <SiExpress className="text-slate-600" />, level: 88 },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" />, level: 85 },
      { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" />, level: 82 }
    ]
  },
  {
    title: 'Tools & Others',
    icon: '🛠️',
    skills: [
      { name: 'Git', icon: <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">G</div>, level: 92 },
      { name: 'Docker', icon: <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">D</div>, level: 75 },
      { name: 'REST APIs', icon: <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">A</div>, level: 90 }
    ]
  }
]

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.skill-card')
    if (cards) {
      gsap.set(cards, { opacity: 0, y: 30 })
      gsap.to(cards, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%'
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      })
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const groupVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  return (
    <section ref={sectionRef} id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">Tech Stack</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Curated selection of technologies I excel at</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              variants={groupVariants}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="skill-card relative glass rounded-2xl p-8 backdrop-blur-xl bg-white/40 dark:bg-slate-800/40 border border-white/20 dark:border-slate-700/50 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="text-3xl">{group.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{group.title}</h3>
                </div>

                <div className="space-y-6">
                  {group.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.02 }}
                      className="group/skill"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 flex items-center justify-center text-lg">
                          {skill.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900 dark:text-white">{skill.name}</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">{skill.level}% proficiency</div>
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, ease: 'easeOut' }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
