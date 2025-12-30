import React, { useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'

export default function Header({ theme, setTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 transition-colors duration-300 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-3 cursor-pointer hover:opacity-70 transition-opacity duration-300">
          <div className="w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-bold text-sm">LS</div>
          <div>
            <div className="text-base font-bold text-black dark:text-white">Lizan Sarkar</div>
            <div className="text-xs text-gray-500 dark:text-gray-500 font-medium">Full Stack Developer</div>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black dark:bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-300 text-black dark:text-white"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
          <div className="flex flex-col px-6 py-4 gap-4">
            {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
