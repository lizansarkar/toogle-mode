import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import { toast } from 'react-toastify'
import { Mail, Linkedin, Github, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [loading, setLoading] = useState(false)

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim()) return toast.error('Please enter your name')
    if (!validateEmail(form.email)) return toast.error('Please enter a valid email')
    if (!form.message.trim()) return toast.error('Please enter a message')
    setLoading(true)
    try {
      // Simulate network request (replace with actual API call)
      await new Promise((r) => setTimeout(r, 900))
      toast.success('Message sent. I will get back to you soon!')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      toast.error('Failed to send message. Try again later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.section
      id="contact"
      className="py-20 px-6 border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-black"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black dark:text-white mb-4">Let's Work Together</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">I'm open to freelance projects, collaborations, and full-time opportunities. Send a message and I'll respond as soon as I can.</p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              aria-label="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-black dark:text-white"
              required
            />
            <input
              aria-label="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-black dark:text-white"
              required
            />
          </div>

          <div>
            <PhoneInput
              country={'us'}
              value={form.phone}
              onChange={(phone) => setForm({ ...form, phone })}
              inputProps={{ name: 'phone', required: false, 'aria-label': 'Phone number' }}
              containerClass="react-phone"
              inputClass="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-black dark:text-white"
            />
          </div>

          <textarea
            aria-label="Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Write your message"
            rows={6}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-black dark:text-white"
            required
          />

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-3 px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:opacity-90 transition-opacity duration-150"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            <a
              href="mailto:lizan@example.com"
              className="text-sm text-gray-600 dark:text-gray-300 hover:underline"
            >
              Or email: lizansarkar@example.com
            </a>
          </div>
        </form>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6">
          <p className="text-gray-600 dark:text-gray-300 mb-4">Connect with me:</p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/" aria-label="LinkedIn" className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <Linkedin className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            </a>
            <a href="https://github.com/lizansarkar" aria-label="GitHub" className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <Github className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            </a>
            <a href="https://twitter.com/" aria-label="Twitter" className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <Twitter className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

