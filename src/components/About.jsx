import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code2, Zap, Target, Users } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
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

    const cards = sectionRef.current?.querySelectorAll('.feature-card')
    if (cards) {
      gsap.set(cards, { opacity: 0, y: 60 })
      gsap.to(cards, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  const features = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Clean Code',
      description: 'I write maintainable, scalable code that stands the test of time.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Fast Performance',
      description: 'Optimized applications that load quickly and run smoothly.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'User-Focused',
      description: 'Every pixel matters. I design with the user experience in mind.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Great Collaborator',
      description: 'I thrive in teams and love mentoring junior developers.'
    }
  ]

  return (
    <section ref={sectionRef} id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Story */}
          <motion.div variants={itemVariants}>
            <h2 ref={titleRef} className="text-5xl md:text-6xl font-black mb-8 text-slate-900 dark:text-white">About Me</h2>

            <p className="text-lg text-slate-700 dark:text-slate-400 mb-6 leading-relaxed font-medium">
              Hi! I'm Lizan, a Full Stack Developer from India with a passion for building beautiful, functional web applications. I combine technical expertise with creative problem-solving to deliver solutions that make an impact.
            </p>

            <p className="text-lg text-slate-700 dark:text-slate-400 mb-6 leading-relaxed font-medium">
              My journey in web development started 3+ years ago, and since then, I've worked with startups and agencies to bring ideas to life. I specialize in modern JavaScript ecosystems and love working with React, Node.js, and cutting-edge tools.
            </p>

            <p className="text-lg text-slate-700 dark:text-slate-400 mb-8 leading-relaxed font-medium">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source, or sharing knowledge with the developer community.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold hover:shadow-lg transition dark:from-purple-500 dark:to-indigo-500"
            >
              Let's work together →
            </motion.a>
          </motion.div>

          {/* Right: Features Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="feature-card group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 dark:from-purple-500/40 dark:to-indigo-500/40 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative glass rounded-xl p-6 backdrop-blur-xl h-full hover:scale-105 transition">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/50 rounded-lg w-fit mb-4">
                    <div className="text-purple-600 dark:text-purple-400">
                      {feature.icon}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-700 dark:text-slate-400 text-sm font-medium">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
