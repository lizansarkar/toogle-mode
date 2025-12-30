import React, { useEffect, useRef } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import gsap from 'gsap'
import { motion } from 'framer-motion'

export default function Header({ theme, setTheme }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    gsap.to(headerRef.current, {
      scrollTrigger: {
        trigger: 'body',
        onUpdate: (self) => {
          if (self.getVelocity() < -500) {
            gsap.to(headerRef.current, { y: -100, duration: 0.4 })
          } else if (self.getVelocity() > 500) {
            gsap.to(headerRef.current, { y: 0, duration: 0.4 })
          }
        }
      }
    })
  }, [])

  return (
    <header ref={headerRef} className="sticky top-0 z-40 backdrop-blur-lg border-b border-slate-200 dark:border-slate-700 transition-all duration-300">
      <nav className="mx-auto container flex items-center justify-between px-6 py-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition"
        >
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-purple-500 via-purple-400 to-indigo-400 flex items-center justify-center text-white font-bold text-sm shadow-lg">LS</div>
          <div>
            <div className="text-base font-bold bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">Lizan Sarkar</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Full Stack Developer</div>
          </div>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:flex items-center gap-8"
        >
          {['About', 'Projects', 'Experience', 'Contact'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.05 }}
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </motion.div>

        {/* Theme Toggle */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
        >
          <div className="flex flex-col px-6 py-4 gap-4">
            {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-purple-600"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  )
}
