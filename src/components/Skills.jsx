import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiFirebase, SiNextdotjs, SiMongodb, SiExpress } from 'react-icons/si'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
      { name: 'Express.js', icon: <SiExpress className="text-slate-600 dark:text-slate-400" />, level: 88 },
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
  const titleRef = useRef(null)

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.skill-card')
    if (cards) {
      gsap.set(cards, { opacity: 0, y: 80 })
      gsap.to(cards, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          markers: false
        },
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power2.out'
      })
    }

    // Title animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      }
    )
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  return (
    <section ref={sectionRef} id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-slate-900 dark:text-white">Tech Stack</h2>
          <p className="text-xl text-slate-700 dark:text-slate-400 max-w-2xl mx-auto font-medium">Expertise in modern technologies and tools</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              className="skill-card group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 dark:from-purple-500/40 dark:to-indigo-500/40 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative glass rounded-2xl p-8 backdrop-blur-xl h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="text-4xl">{group.icon}</div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{group.title}</h3>
                </div>

                <div className="space-y-6">
                  {group.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="group/skill"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 flex items-center justify-center text-lg">
                          {skill.icon}
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-slate-900 dark:text-white text-sm">{skill.name}</div>
                          <div className="text-xs text-slate-600 dark:text-slate-500 font-medium">{skill.level}%</div>
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden border border-slate-300 dark:border-slate-600">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.2, ease: 'easeOut', delay: i * 0.1 }}
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
