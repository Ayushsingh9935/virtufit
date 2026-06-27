/**
 * Navbar.jsx - Navigation Bar Component
 * 
 * A responsive navigation bar with:
 * - Logo and brand name
 * - Desktop navigation links
 * - Mobile hamburger menu
 * - Authentication buttons
 * - Glassmorphism styling
 */

// Import useState for managing mobile menu state
import { useState, useEffect } from 'react'

// Import Link and useLocation for navigation
import { Link, useLocation } from 'react-router-dom'

// Import Framer Motion for animations
import { motion, AnimatePresence } from 'framer-motion'

// Import icons from Lucide React
import { 
  Menu, 
  X, 
  Sparkles, 
  Home, 
  Info, 
  Layers, 
  HelpCircle, 
  Users, 
  Mail,
  LogIn,
  UserPlus,
  LayoutDashboard
} from 'lucide-react'

// Navigation links configuration
const navLinks = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/about', label: 'About', icon: Info },
  { path: '/features', label: 'Features', icon: Layers },
  { path: '/how-it-works', label: 'How It Works', icon: HelpCircle },
  { path: '/team', label: 'Team', icon: Users },
  { path: '/contact', label: 'Contact', icon: Mail },
]

function Navbar() {
  // State to control mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // State to track if page has scrolled (for navbar styling)
  const [isScrolled, setIsScrolled] = useState(false)
  
  // Get current location to highlight active link
  const location = useLocation()

  // Effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state when page is scrolled more than 20px
      setIsScrolled(window.scrollY > 20)
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)
    
    // Cleanup: remove event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Effect to close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  // Effect to prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Check if a link is currently active
  const isActiveLink = (path) => location.pathname === path

  return (
    <>
      {/* Main navbar - fixed at top */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-dark-200/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Logo and Brand Name */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
            >
              {/* Animated logo icon */}
              <motion.div 
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="w-10 h-10 rounded-xl bg-linear-to-br from-primary-500 to-secondary-500 
                           flex items-center justify-center shadow-lg shadow-primary-500/30"
              >
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>
              
              {/* Brand name with gradient */}
              <span className="text-xl md:text-2xl font-bold font-display">
                <span className="gradient-text">Virtu</span>
                <span className="text-white">Fit</span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${isActiveLink(link.path)
                      ? 'text-white bg-white/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link 
                to="/login"
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white 
                           hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                Log In
              </Link>
              <Link 
                to="/signup"
                className="btn-primary text-sm"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-300 hover:text-white hover:bg-white/5 
                         rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-dark-200 
                         border-l border-white/10 z-50 lg:hidden overflow-y-auto"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <Link 
                  to="/" 
                  className="flex items-center space-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="w-8 h-8 rounded-lg bg-linear-to-br from-primary-500 to-secondary-500 
                                  flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-bold font-display">
                    <span className="gradient-text">Virtu</span>
                    <span className="text-white">Fit</span>
                  </span>
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/5 
                             rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <div className="p-4 space-y-1">
                {navLinks.map((link, index) => {
                  const Icon = link.icon
                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-xl 
                                    transition-all duration-200 ${
                          isActiveLink(link.path)
                            ? 'bg-primary-500/20 text-white'
                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{link.label}</span>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              {/* Mobile Menu Divider */}
              <div className="mx-4 border-t border-white/10" />

              {/* Mobile Auth Links */}
              <div className="p-4 space-y-2">
                <Link
                  to="/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-400 
                             hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  <LayoutDashboard className="w-5 h-5" />
                  <span className="font-medium">Dashboard</span>
                </Link>
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-400 
                             hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  <LogIn className="w-5 h-5" />
                  <span className="font-medium">Log In</span>
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 w-full py-3 
                             bg-linear-to-r from-primary-600 to-secondary-600 
                             text-white font-semibold rounded-xl shadow-lg 
                             shadow-primary-500/25 transition-all hover:shadow-primary-500/40"
                >
                  <UserPlus className="w-5 h-5" />
                  <span>Get Started</span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16 md:h-20" />
    </>
  )
}

export default Navbar
