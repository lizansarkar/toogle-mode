import React from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import projectsData from '../data/projects'

const projects = projectsData.map(p => ({
  ...p,
  image: p.image || 'https://images.unsplash.com/photo-1460925895917-adf4e565db0d?w=500&h=300&fit=crop'
}))

const oldProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory and payment integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db0d?w=500&h=300&fit=crop'
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task manager with drag-and-drop and real-time updates.',
    tech: ['Next.js', 'Firebase', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop'
  },
  {
    title: 'Analytics Dashboard',
    description: 'Interactive data visualization dashboard with real-time metrics.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop'
  }
]

export default function Projects() {
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
          className="text-4xl md:text-5xl font-black text-black dark:text-white mb-16 tracking-tight"
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
            <motion.div key={i} variants={cardVariants} whileHover={{ y: -8, transition: { duration: 0.2 } }} className="group border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-900">
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

