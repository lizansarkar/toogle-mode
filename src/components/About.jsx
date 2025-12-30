import React from 'react'

export default function About() {
  return (
    <section id="about" className="mt-12">
      <div className="glass rounded-xl p-8">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="mt-4 text-slate-700 dark:text-slate-300">I tell a story, not a CV. I love solving real user problems with pragmatic, scalable code. I thrive working in cross-functional teams, shipping features end-to-end and iterating fast with feedback.</p>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Who I am</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">A Middle Stack Developer focused on JavaScript ecosystems and modern web architecture.</p>
          </div>
          <div>
            <h3 className="font-semibold">What I do best</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">Building full-stack apps that are performant, accessible, and delightful.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
