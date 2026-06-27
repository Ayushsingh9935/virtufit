/**
 * Contact.jsx - FIXED for older lucide-react versions
 * Removed unsupported:
 * ❌ Github
 * ❌ Linkedin
 *
 * Replaced with:
 * ✅ Globe
 * ✅ Twitter
 * ✅ Mail
 */

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Globe,
} from 'lucide-react'


// Contact info cards data
const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    content: 'contact@virtufit.ai',
    subContent: 'We reply within 24 hours',
    link: 'mailto:contact@virtufit.ai',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+91 123 456 7890',
    subContent: 'Mon-Fri, 9 AM - 6 PM IST',
    link: 'tel:+911234567890',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    content: 'MG Institute of Management and Technology',
    subContent: 'Lucknow, Uttar Pradesh, India',
    link: '#',
    gradient: 'from-green-500 to-emerald-500',
  },
]

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setFormStatus({
      loading: true,
      success: false,
      error: false,
    })

    setTimeout(() => {
      setFormStatus({
        loading: false,
        success: true,
        error: false,
      })

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })

      setTimeout(() => {
        setFormStatus({
          loading: false,
          success: false,
          error: false,
        })
      }, 5000)
    }, 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-sm font-medium text-primary-300 mb-4">
            Contact Us
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Get in </span>
            <span className="gradient-text">Touch</span>
          </h1>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Have questions about VirtuFit? We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-container pt-0">
        <div className="grid md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon

            return (
              <motion.a
                key={index}
                href={info.link}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-2xl group block"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-line-to-br ${info.gradient} flex items-center justify-center mb-4`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {info.title}
                </h3>

                <p className="text-primary-400 font-medium mb-1">
                  {info.content}
                </p>

                <p className="text-sm text-gray-500">
                  {info.subContent}
                </p>
              </motion.a>
            )
          })}
        </div>
      </section>

      {/* Main Section */}
      <section className="section-container">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Form */}
          <div className="glass-card p-8 rounded-3xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">
                  Send a Message
                </h2>

                <p className="text-gray-400 text-sm">
                  Fill out the form below
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="input-field"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="input-field"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
                className="input-field"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Write your message..."
                className="input-field resize-none"
              />

              <button
                type="submit"
                disabled={formStatus.loading}
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                {formStatus.loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {formStatus.success && (
                <div className="flex items-center space-x-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully!</span>
                </div>
              )}

              {formStatus.error && (
                <div className="flex items-center space-x-2 text-red-400">
                  <AlertCircle className="w-5 h-5" />
                  <span>Something went wrong.</span>
                </div>
              )}
            </form>
          </div>

          {/* Right Side */}
          <div className="space-y-8">

            {/* Map */}
            <div className="glass-card p-6 rounded-3xl text-center">
              <MapPin className="w-12 h-12 text-primary-500/50 mx-auto mb-3" />
              <p className="text-gray-400">Interactive Map</p>
              <p className="text-gray-500 text-sm">
                MG Institute of Management and Technology, Lucknow
              </p>
            </div>

            {/* Office Hours */}
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-primary-400" />
                <h3 className="text-lg font-semibold text-white">
                  Office Hours
                </h3>
              </div>

              <p className="text-gray-400">Mon - Fri: 9 AM - 6 PM</p>
              <p className="text-gray-400">Saturday: 10 AM - 4 PM</p>
              <p className="text-gray-500">Sunday: Closed</p>
            </div>

            {/* Social Links */}
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-white mb-4">
                Connect With Us
              </h3>

              <div className="flex space-x-3">
                {[
                  { icon: Globe, href: '#', label: 'Website' },
                  { icon: Twitter, href: '#', label: 'Twitter' },
                  { icon: Mail, href: 'mailto:contact@virtufit.ai', label: 'Email' },
                ].map((social, i) => {
                  const Icon = social.icon

                  return (
                    <a
                      key={i}
                      href={social.href}
                      className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-gray-400 hover:text-white"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact