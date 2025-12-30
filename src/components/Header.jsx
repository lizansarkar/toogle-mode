import React from 'react'
import { Sun, Moon } from 'lucide-react'

export default function Header({ theme, setTheme }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-sm">
      <nav className="glass mx-auto container flex items-center justify-between px-6 py-3 rounded-b-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-indigo-400 flex items-center justify-center text-white font-bold">LS</div>
          <div>
            <div className="text-lg font-semibold">Lizan Sarkar</div>
            <div className="text-xs text-slate-600 dark:text-slate-300">Middle Stack Developer</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="#projects" className="text-sm text-slate-700 hover:text-primary dark:text-slate-300">Projects</a>
          <a href="#contact" className="text-sm text-slate-700 hover:text-primary dark:text-slate-300">Contact</a>

          <button
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </nav>
    </header>
  )
}
