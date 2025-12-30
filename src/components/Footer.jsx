import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-16 py-8">
      <div className="container mx-auto text-center text-sm text-slate-600 dark:text-slate-400">© {new Date().getFullYear()} Lizan Sarkar — Middle Stack Developer</div>
    </footer>
  )
}
