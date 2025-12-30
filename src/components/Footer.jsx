import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold">LS</div>
              <div>
                <div className="font-bold text-slate-900 dark:text-white">Lizan Sarkar</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">Full Stack Developer</div>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">Building beautiful web experiences with modern technology.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Experience'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {['Blog', 'GitHub', 'Resume', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {[
                { icon: <Github className="w-5 h-5" />, label: 'GitHub' },
                { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
                { icon: <Twitter className="w-5 h-5" />, label: 'Twitter' },
                { icon: <Mail className="w-5 h-5" />, label: 'Email' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  href="#"
                  className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition"
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-slate-200 dark:border-slate-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © {currentYear} Lizan Sarkar. All rights reserved.
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React, Tailwind & GSAP
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
