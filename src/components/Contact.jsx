import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Twitter, ExternalLink } from 'lucide-react'

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, label: 'GitHub', url: '#', color: 'hover:text-slate-600 dark:hover:text-slate-300' },
    { icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn', url: '#', color: 'hover:text-blue-600' },
    { icon: <Twitter className="w-6 h-6" />, label: 'Twitter', url: '#', color: 'hover:text-sky-500' },
    { icon: <Mail className="w-6 h-6" />, label: 'Email', url: 'mailto:hello@example.com', color: 'hover:text-red-500' }
  ]

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold">Get in Touch</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 dark:from-purple-400 dark:via-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent"
          >
            Let's Build Something Amazing
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8"
          >
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16"
        >
          {/* Email CTA */}
          <motion.a
            variants={itemVariants}
            href="mailto:hello@example.com"
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-100 transition duration-1000"></div>

            <div className="relative glass rounded-2xl p-8 backdrop-blur-xl bg-white/40 dark:bg-slate-800/40 border border-white/20 dark:border-slate-700/50 text-center">
              <div className="inline-flex p-4 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl mb-4">
                <Mail className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Email</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">hello@lizansarkar.com</p>
              <div className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold group-hover:gap-3 transition">
                Send Email <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </motion.a>

          {/* Schedule Call CTA */}
          <motion.a
            variants={itemVariants}
            href="#"
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-100 transition duration-1000"></div>

            <div className="relative glass rounded-2xl p-8 backdrop-blur-xl bg-white/40 dark:bg-slate-800/40 border border-white/20 dark:border-slate-700/50 text-center">
              <div className="inline-flex p-4 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-xl mb-4">
                <ExternalLink className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Schedule Call</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">15 min discovery call</p>
              <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold group-hover:gap-3 transition">
                Book Meeting <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center gap-8 mb-16"
        >
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              variants={itemVariants}
              href={social.url}
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className={`p-4 rounded-xl glass backdrop-blur-xl bg-white/40 dark:bg-slate-800/40 border border-white/20 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 transition ${social.color}`}
              title={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-4">or connect with me on social media</p>
          <motion.p
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-sm text-slate-500 dark:text-slate-500"
          >
            ↓ More ways to reach me below
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
