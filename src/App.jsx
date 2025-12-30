import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'

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
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    try { localStorage.setItem('theme', theme) } catch (e) {}
  }, [theme])

  return (
    <div className="min-h-screen">
      <Header theme={theme} setTheme={setTheme} />
      <main className="container mx-auto px-6 py-12">
        <Hero name="Lizan Sarkar" />
        <About />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}
