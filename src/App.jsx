import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'light'
    } catch (e) {
      return 'light'
    }
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    try { localStorage.setItem('theme', theme) } catch (e) {}
  }, [theme])

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-black">
      <div className="relative z-10">
        <Header theme={theme} setTheme={setTheme} />
        <Hero name="Lizan Sarkar" />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <ToastContainer />
        <Footer />
      </div>
    </div>
  )
}
