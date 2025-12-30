import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Linkedin, Github, Twitter, ExternalLink } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      }
    )

    const cards = sectionRef.current?.querySelectorAll('.cta-card')
    if (cards) {
      gsap.set(cards, { opacity: 0, y: 60 })
      gsap.to(cards, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      })
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, label: 'GitHub', url: '#', color: 'hover:text-slate-700 dark:hover:text-slate-300' },
    { icon: <Linkedin className="w-6 h-6" />, label: 'LinkedIn', url: '#', color: 'hover:text-blue-600' },
    { icon: <Twitter className="w-6 h-6" />, label: 'Twitter', url: '#', color: 'hover:text-sky-500' },
    { icon: <Mail className="w-6 h-6" />, label: 'Email', url: 'mailto:hello@example.com', color: 'hover:text-red-500' }
  ]

  return (
    <section ref={sectionRef} id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 dark:from-purple-600/30 dark:to-indigo-600/30 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 dark:from-cyan-600/30 dark:to-blue-600/30 rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div variants={itemVariants} className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-sm font-bold tracking-wide">Get in Touch</span>
          </motion.div>

          <motion.h2
            ref={titleRef}
            className="text-5xl md:text-6xl font-black mb-8 text-slate-900 dark:text-white"
          >
            Let's Build Something Amazing
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-700 dark:text-slate-400 max-w-2xl mx-auto font-medium"
          >
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20"
        >
          {/* Email CTA */}
          <motion.div
            className="cta-card group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/40 to-indigo-600/40 dark:from-purple-500/50 dark:to-indigo-500/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>

            <a href="mailto:hello@example.com" className="relative glass rounded-2xl p-8 backdrop-blur-xl h-full text-center flex flex-col items-center justify-center hover:-translate-y-2 transition group-hover:scale-105">
              <motion.div whileHover={{ scale: 1.1 }} className="inline-flex p-4 bg-purple-100 dark:bg-purple-900/50 rounded-xl mb-6">
                <Mail className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </motion.div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Email</h3>
              <p className="text-slate-700 dark:text-slate-400 mb-4 font-medium">hello@lizansarkar.com</p>
              <div className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold group-hover:gap-3 transition">
                Send Email <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          </motion.div>

          {/* Schedule Call CTA */}
          <motion.div
            className="cta-card group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600/40 to-cyan-600/40 dark:from-indigo-500/50 dark:to-cyan-500/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>

            <a href="#" className="relative glass rounded-2xl p-8 backdrop-blur-xl h-full text-center flex flex-col items-center justify-center hover:-translate-y-2 transition group-hover:scale-105">
              <motion.div whileHover={{ scale: 1.1 }} className="inline-flex p-4 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl mb-6">
                <ExternalLink className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              </motion.div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Schedule Call</h3>
              <p className="text-slate-700 dark:text-slate-400 mb-4 font-medium">15 min discovery call</p>
              <div className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold group-hover:gap-3 transition">
                Book Meeting <ExternalLink className="w-4 h-4" />
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-16"
        >
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              variants={itemVariants}
              href={social.url}
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className={`p-4 rounded-xl glass backdrop-blur-xl text-slate-700 dark:text-slate-300 transition border border-slate-200 dark:border-slate-700 ${social.color}`}
              title={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-700 dark:text-slate-400 font-medium mb-4">Connect with me on social media</p>
          <motion.p
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="text-sm text-slate-600 dark:text-slate-500"
          >
            ↓ Reach out today
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
