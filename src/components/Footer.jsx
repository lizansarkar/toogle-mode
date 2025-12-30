import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 dark:border-slate-700/50 bg-white dark:bg-slate-950/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12"
        >
          {/* Brand */}
          <motion.div whileHover={{ y: -2 }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">LS</div>
              <div>
                <div className="font-bold text-slate-900 dark:text-white text-lg">Lizan Sarkar</div>
                <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Full Stack Developer</div>
              </div>
            </div>
            <p className="text-slate-700 dark:text-slate-400 font-medium leading-relaxed">Building beautiful web experiences with modern technology and thoughtful design.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div whileHover={{ y: -2 }}>
            <h4 className="font-bold text-slate-900 dark:text-white mb-5 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Projects', 'Experience'].map((link) => (
                <motion.li key={link} whileHover={{ x: 5 }}>
                  <a href={`#${link.toLowerCase()}`} className="text-slate-700 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition font-medium">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div whileHover={{ y: -2 }}>
            <h4 className="font-bold text-slate-900 dark:text-white mb-5 text-lg">Resources</h4>
            <ul className="space-y-3">
              {['Blog', 'GitHub', 'Resume', 'Contact'].map((link) => (
                <motion.li key={link} whileHover={{ x: 5 }}>
                  <a href="#" className="text-slate-700 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition font-medium">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div whileHover={{ y: -2 }}>
            <h4 className="font-bold text-slate-900 dark:text-white mb-5 text-lg">Follow</h4>
            <div className="flex gap-4">
              {[
                { icon: <Github className="w-5 h-5" />, label: 'GitHub' },
                { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
                { icon: <Twitter className="w-5 h-5" />, label: 'Twitter' },
                { icon: <Mail className="w-5 h-5" />, label: 'Email' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="text-slate-700 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50"
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-slate-200 dark:border-slate-700/50 pt-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-slate-700 dark:text-slate-400 font-medium">
            © {currentYear} Lizan Sarkar. All rights reserved.
          </p>
          <p className="text-slate-700 dark:text-slate-400 font-medium flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React, Tailwind & GSAP
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
