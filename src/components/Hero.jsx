/**
 * Hero.jsx - Hero Section Component
 * 
 * A stunning hero section with:
 * - Animated headline and subtext
 * - Call-to-action buttons
 * - Floating decorative elements
 * - 3D-like visual mockup
 * - Stats display
 */

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  ArrowRight, 
  Play, 
  ShoppingBag, 
  Ruler, 
  Cpu,
  CheckCircle2,
  Star
} from 'lucide-react'

// Stats to display
const stats = [
  { value: '98%', label: 'Accuracy Rate' },
  { value: '50K+', label: 'Happy Users' },
  { value: '100+', label: 'Brands Supported' },
  { value: '4.9', label: 'User Rating', icon: Star },
]

// Features highlight list
const features = [
  'AI-Powered Virtual Try-On',
  'Smart Size Recommendations',
  'Real-Time Visualization',
  'Cross-Platform Support',
]

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary-500/30 rounded-full blur-3xl"
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[100px_100px]" />
      </div>
      
      {/* Main Content Container */}
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-500/10 
                         border border-primary-500/20 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-primary-300">
                Final Year Major Project 2024
              </span>
            </motion.div>
            
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display 
                         leading-tight mb-6"
            >
              <span className="text-white">Try Before You</span>
              <br />
              <span className="gradient-text-animated">Buy, Virtually</span>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Experience the future of online fashion shopping with AI-powered virtual try-on 
              and smart size recommendations. Never worry about fit again.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <Link to="/try-on" className="btn-primary inline-flex items-center justify-center space-x-2">
                <span>Start Virtual Try-On</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/how-it-works" 
                className="btn-secondary inline-flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </Link>
            </motion.div>
            
            {/* Feature List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 gap-3"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-gray-400">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main visual container */}
            <div className="relative">
              
              {/* Glow effect behind */}
              <div className="absolute inset-0 bg-linear-to-r from-primary-500/20 to-secondary-500/20 
                              rounded-3xl blur-3xl" />
              
              {/* Main card */}
              <div className="relative glass-card-strong p-8 rounded-3xl">
                
                {/* Mock interface header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs text-gray-500 font-mono">virtufit.ai/try-on</div>
                </div>
                
                {/* Mock interface content */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* User photo placeholder */}
                  <div className="aspect-3/4 bg-linear-to-br from-primary-500/20 to-secondary-500/20 
                                  rounded-xl flex items-center justify-center border border-white/10">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/10 
                                      flex items-center justify-center">
                        <ShoppingBag className="w-8 h-8 text-primary-400" />
                      </div>
                      <p className="text-sm text-gray-400">Your Photo</p>
                    </div>
                  </div>
                  
                  {/* Virtual outfit placeholder */}
                  <div className="aspect-3/4 bg-linear-to-br from-secondary-500/20 to-primary-500/20 
                                  rounded-xl flex items-center justify-center border border-white/10">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/10 
                                      flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-secondary-400" />
                      </div>
                      <p className="text-sm text-gray-400">Virtual Result</p>
                    </div>
                  </div>
                </div>
                
                {/* Size recommendation bar */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Ruler className="w-5 h-5 text-primary-400" />
                      <span className="text-sm font-medium text-white">Recommended Size</span>
                    </div>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-bold rounded-full">
                      M
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    {['XS', 'S', 'M', 'L', 'XL'].map((size, i) => (
                      <div 
                        key={size}
                        className={`flex-1 py-2 text-center text-xs font-medium rounded-lg 
                                    ${size === 'M' 
                                      ? 'bg-primary-500 text-white' 
                                      : 'bg-white/5 text-gray-400'}`}
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 w-20 h-20 glass-card rounded-2xl 
                           flex items-center justify-center"
              >
                <Cpu className="w-10 h-10 text-primary-400" />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 px-4 py-3 glass-card rounded-xl 
                           flex items-center space-x-2"
              >
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-white">AI Processing</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 lg:mt-24"
        >
          <div className="glass-card p-6 md:p-8 rounded-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center"
                >
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    <span className="text-3xl md:text-4xl font-bold gradient-text">
                      {stat.value}
                    </span>
                    {stat.icon && <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />}
                  </div>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
