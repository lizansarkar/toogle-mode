import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Zap, Target, Users } from 'lucide-react'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Story */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">About Me</h2>

            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              Hi! I'm Lizan, a Full Stack Developer from India with a passion for building beautiful, functional web applications. I combine technical expertise with creative problem-solving to deliver solutions that make an impact.
            </p>

            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              My journey in web development started 3+ years ago, and since then, I've worked with startups and agencies to bring ideas to life. I specialize in modern JavaScript ecosystems and love working with React, Node.js, and cutting-edge tools.
            </p>

            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source, or sharing knowledge with the developer community.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold hover:shadow-lg transition"
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
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>

                <div className="relative glass rounded-xl p-6 backdrop-blur-xl bg-white/40 dark:bg-slate-800/40 border border-white/20 dark:border-slate-700/50 h-full">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-lg w-fit mb-4">
                    <div className="text-purple-600 dark:text-purple-400">
                      {feature.icon}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
