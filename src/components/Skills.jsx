import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiFirebase, SiNextdotjs, SiMongodb, SiExpress } from 'react-icons/si'

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-600" /> },
      { name: 'Tailwind', icon: <SiTailwindcss className="text-teal-400" /> },
      { name: 'React', icon: <FaReact className="text-sky-400" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-slate-700" /> }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
      { name: 'Express.js', icon: <SiExpress className="text-slate-600" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> }
    ]
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', icon: <div className="w-5 h-5 bg-slate-300 rounded-sm" /> },
      { name: 'Design', icon: <div className="w-5 h-5 bg-slate-300 rounded-sm" /> }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="mt-12">
      <h2 className="text-2xl font-bold">Skills</h2>
      <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">Categorized and focused — with subtle animations.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {skillGroups.map(group => (
          <div key={group.title} className="glass p-6 rounded-xl hover:scale-105 transform transition">
            <h3 className="font-semibold mb-3">{group.title}</h3>
            <div className="grid grid-cols-2 gap-3">
              {group.skills.map(s => (
                <div key={s.name} className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800">
                  <div className="w-8 h-8 flex items-center justify-center text-lg">{s.icon}</div>
                  <div>
                    <div className="text-sm font-medium">{s.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
