import React from 'react'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-black py-16 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-bold text-sm">LS</div>
              <div>
                <div className="font-bold text-black dark:text-white">Lizan Sarkar</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">Developer</div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Building elegant web experiences with modern technology.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-black dark:text-white mb-6 text-sm uppercase tracking-wider">Links</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#about" className="hover:text-black dark:hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="#projects" className="hover:text-black dark:hover:text-white transition-colors duration-300">Projects</a></li>
              <li><a href="#skills" className="hover:text-black dark:hover:text-white transition-colors duration-300">Skills</a></li>
              <li><a href="#contact" className="hover:text-black dark:hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-black dark:text-white mb-6 text-sm uppercase tracking-wider">Social</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors duration-300">LinkedIn</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors duration-300">GitHub</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors duration-300">Twitter</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-black dark:text-white mb-6 text-sm uppercase tracking-wider">Contact</h4>
            <a href="mailto:lizan@example.com" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300 text-sm">
              lizan@example.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-gray-700 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
          <p className="text-sm text-gray-600 dark:text-gray-400">&copy; {currentYear} Lizan Sarkar. All rights reserved.</p>
          <div className="flex gap-4">
            {[
              { icon: Github, label: 'GitHub' },
              { icon: Linkedin, label: 'LinkedIn' },
              { icon: Twitter, label: 'Twitter' },
              { icon: Mail, label: 'Email' }
            ].map((social, i) => {
              const Icon = social.icon
              return (
                <a
                  key={i}
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                  title={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

