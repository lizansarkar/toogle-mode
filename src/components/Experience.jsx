import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Briefcase, Calendar } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

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
  const sectionRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      }
    )

    const items = sectionRef.current?.querySelectorAll('.exp-item')
    if (items) {
      gsap.set(items, { opacity: 0, x: -60 })
      gsap.to(items, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%'
        },
        opacity: 1,
        x: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: 'power2.out'
      })
    }
  }, [])

  return (
    <section ref={sectionRef} id="experience" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 ref={titleRef} className="text-5xl md:text-6xl font-black mb-6 text-slate-900 dark:text-white">Professional Journey</h2>
          <p className="text-xl text-slate-700 dark:text-slate-400 max-w-2xl mx-auto font-medium">3+ years of building exceptional web experiences</p>
        </motion.div>

        <div className="space-y-8 relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-indigo-500/0 md:w-0.5 -translate-x-1/2"></div>

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="exp-item relative md:grid md:grid-cols-2"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-8 -translate-x-1/2 w-5 h-5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full border-4 border-white dark:border-slate-950 shadow-lg"></div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:col-start-2'}`}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 dark:from-purple-500/40 dark:to-indigo-500/40 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  <div className="relative glass rounded-xl p-8 backdrop-blur-xl">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg">
                        <Briefcase className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                        <p className="text-purple-600 dark:text-purple-400 font-bold text-lg">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-500 mb-5 font-medium">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>

                    <p className="text-slate-700 dark:text-slate-400 mb-5 font-medium leading-relaxed">{exp.description}</p>

                    <div className="space-y-3">
                      <p className="text-sm font-bold text-slate-800 dark:text-slate-300">Key achievements:</p>
                      {exp.achievements.map((achievement, j) => (
                        <motion.div
                          key={j}
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-400 font-medium"
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
        </div>
      </div>
    </section>
  )
}
