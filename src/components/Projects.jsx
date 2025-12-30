import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Github, ExternalLink } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce app with real-time inventory, payment integration, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db0d?w=500&h=300&fit=crop',
    github: '#',
    live: '#'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task manager with real-time updates, drag-and-drop, and team features.',
    tech: ['Next.js', 'Firebase', 'Tailwind', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
    github: '#',
    live: '#'
  },
  {
    title: 'Analytics Dashboard',
    description: 'Interactive data visualization dashboard with real-time metrics and customizable reports.',
    tech: ['React', 'Node.js', 'Recharts', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    github: '#',
    live: '#'
  }
]

export default function Projects() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll('.project-card')
    if (cards) {
      gsap.set(cards, { opacity: 0, y: 80 })
      gsap.to(cards, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          markers: false
        },
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.2,
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
          start: 'top 70%'
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
    <section ref={sectionRef} id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-slate-900 dark:text-white">Featured Projects</h2>
          <p className="text-xl text-slate-700 dark:text-slate-400 max-w-2xl mx-auto font-medium">Crafting digital experiences with cutting-edge technologies and thoughtful design.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -15 }}
              className="project-card group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 dark:from-purple-500/40 dark:to-indigo-500/40 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative h-full glass rounded-2xl overflow-hidden backdrop-blur-xl">
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-125 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-end p-4 gap-3">
                    <motion.a
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github}
                      className="p-3 bg-white/20 backdrop-blur-md rounded-lg hover:bg-white/40 transition"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.live}
                      className="p-3 bg-white/20 backdrop-blur-md rounded-lg hover:bg-white/40 transition"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-slate-700 dark:text-slate-400 text-base mb-5 font-medium leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="px-3 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-xs font-bold border border-purple-200 dark:border-purple-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
