/**
 * Footer.jsx - Website Footer Component
 *
 * Complete corrected footer with proper lucide-react imports
 */

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Mail,
  MapPin,
  Phone,
  Globe,
  Heart,
  Send,
  ArrowUpRight,
} from 'lucide-react'

// Footer link columns configuration
const footerLinks = {
  product: {
    title: 'Product',
    links: [
      { label: 'Features', path: '/features' },
      { label: 'How It Works', path: '/how-it-works' },
      { label: 'Virtual Try-On', path: '/try-on' },
      { label: 'Size Recommender', path: '/size-recommender' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Team', path: '/team' },
      { label: 'Contact', path: '/contact' },
      { label: 'Careers', path: '#' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Documentation', path: '#' },
      { label: 'API Reference', path: '#' },
      { label: 'Blog', path: '#' },
      { label: 'Support', path: '/contact' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', path: '#' },
      { label: 'Terms of Service', path: '#' },
      { label: 'Cookie Policy', path: '#' },
      { label: 'GDPR', path: '#' },
    ],
  },
}

// Social media links configuration
const socialLinks = [
  { icon: Globe, href: '#', label: 'Website' },
  { icon: Globe, href: '#', label: 'LinkedIn' },
  { icon: Globe, href: '#', label: 'Twitter' },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative mt-auto">
      {/* Gradient divider line */}
      <div className="h-px bg-linear-to-r from-transparent via-primary-500/50 to-transparent" />

      {/* Main footer content */}
      <div className="bg-dark-200/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12">

            {/* Brand Info */}
            <div className="space-y-6">

              {/* Logo */}
              <Link to="/" className="inline-flex items-center space-x-2 group">
                <motion.div
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                  className="w-10 h-10 rounded-xl bg-linear-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg shadow-primary-500/30"
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </motion.div>

                <span className="text-2xl font-bold font-display">
                  <span className="bg-linear-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                    Virtu
                  </span>
                  <span className="text-white">Fit</span>
                </span>
              </Link>

              {/* Description */}
              <p className="text-gray-400 max-w-md leading-relaxed">
                Revolutionizing online fashion shopping with AI-powered virtual
                try-on technology and smart size recommendations.
                Experience the future of e-commerce today.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-primary-500" />
                  <span>MG Institute of Management and Technology, Lucknow</span>
                </div>

                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-5 h-5 text-primary-500" />
                  <a
                    href="mailto:contact@virtufit.ai"
                    className="hover:text-white transition-colors"
                  >
                    contact@virtufit.ai
                  </a>
                </div>

                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-5 h-5 text-primary-500" />
                  <a
                    href="tel:+911234567890"
                    className="hover:text-white transition-colors"
                  >
                    +91 123 456 7890
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="lg:pl-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Stay Updated
              </h3>

              <p className="text-gray-400 mb-6">
                Subscribe to our newsletter for the latest updates,
                features, and AI fashion insights.
              </p>

              {/* Newsletter Form */}
              <form
                className="flex flex-col sm:flex-row gap-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="relative grow">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-6 py-3 bg-linear-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-xl shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Subscribe</span>
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>

              {/* Social Links */}
              <div className="mt-8">
                <p className="text-sm text-gray-500 mb-4">
                  Follow us on social media
                </p>

                <div className="flex space-x-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon

                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-500/20 hover:border-primary-500/50 transition-all duration-200"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/5">
            {Object.values(footerLinks).map((column) => (
              <div key={column.title}>
                <h4 className="text-white font-semibold mb-4">
                  {column.title}
                </h4>

                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                      >
                        <span>{link.label}</span>

                        <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

            {/* Copyright */}
            <div className="text-gray-500 text-sm text-center md:text-left">
              <p>© {currentYear} VirtuFit. All rights reserved.</p>

              <p className="mt-1 flex items-center justify-center md:justify-start">
                Made with
                <Heart className="w-4 h-4 text-red-500 mx-1" />
                by Team VirtuFit
              </p>
            </div>

            {/* Academic Info */}
            <div className="text-gray-500 text-sm text-center md:text-right">
              <p>MG Institute of Management and Technology, Lucknow</p>
              <p className="mt-1">
                Dr. A.P.J Abdul Kalam Technical University
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Gradient */}
      <div className="h-1 bg-linear-to-r from-primary-600 via-purple-500 to-secondary-600" />
    </footer>
  )
}

export default Footer