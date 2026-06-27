/**
 * Features.jsx - Features Page
 * 
 * Detailed showcase of all VirtuFit features:
 * - Virtual Try-On capabilities
 * - Size Recommender technology
 * - AI/ML features
 * - Privacy and security
 * - Integration capabilities
 */

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Camera, 
  Ruler, 
  Sparkles, 
  Zap, 
  Shield, 
  Globe,
  Palette,
  BarChart3,
  Lock,
  Smartphone,
  CloudUpload,
  RefreshCw,
  Eye,
  Heart,
  Share2,
  Download,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'

// Main features with detailed info
const mainFeatures = [
  {
    icon: Camera,
    title: 'AI Virtual Try-On',
    description: 'See how clothes look on you before buying using advanced AI visualization technology.',
    gradient: 'from-purple-500 to-pink-500',
    details: [
      'Upload any full-body photo',
      'Realistic clothing visualization',
      'Multiple angle support',
      'High-resolution output',
      'Fast processing (< 5 seconds)',
    ],
  },
  {
    icon: Ruler,
    title: 'Smart Size Recommender',
    description: 'Get accurate size recommendations based on your body measurements and brand data.',
    gradient: 'from-blue-500 to-cyan-500',
    details: [
      'AI body measurement extraction',
      'Brand-specific sizing data',
      '98% accuracy rate',
      'Confidence score display',
      'Size comparison tools',
    ],
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Analysis',
    description: 'Our machine learning models analyze body proportions for accurate predictions.',
    gradient: 'from-primary-500 to-secondary-500',
    details: [
      'Deep learning algorithms',
      'Pose estimation technology',
      'Body shape classification',
      'Continuous model improvement',
      'Real-time processing',
    ],
  },
]

// Additional features grid
const additionalFeatures = [
  {
    icon: Zap,
    title: 'Instant Results',
    description: 'Get try-on results within seconds with our optimized AI pipeline.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your photos are encrypted and never stored without explicit consent.',
  },
  {
    icon: Globe,
    title: '100+ Brands',
    description: 'Support for major international and Indian fashion brands.',
  },
  {
    icon: Palette,
    title: 'Color Variations',
    description: 'See the same outfit in different colors instantly.',
  },
  {
    icon: BarChart3,
    title: 'Fit Analytics',
    description: 'Detailed breakdown of how each size would fit you.',
  },
  {
    icon: Lock,
    title: 'Secure Processing',
    description: 'End-to-end encryption for all image processing.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Optimized',
    description: 'Full functionality on mobile devices with touch support.',
  },
  {
    icon: CloudUpload,
    title: 'Cloud Sync',
    description: 'Save your favorites and measurements across devices.',
  },
  {
    icon: RefreshCw,
    title: 'Version History',
    description: 'Access previous try-on sessions and comparisons.',
  },
  {
    icon: Eye,
    title: 'Multiple Views',
    description: 'View try-on results from different angles.',
  },
  {
    icon: Heart,
    title: 'Wishlist',
    description: 'Save items you love for future reference.',
  },
  {
    icon: Share2,
    title: 'Easy Sharing',
    description: 'Share try-on results with friends for opinions.',
  },
]

// Technology stack
const techStack = [
  { name: 'TensorFlow', category: 'AI/ML' },
  { name: 'PyTorch', category: 'AI/ML' },
  { name: 'OpenCV', category: 'Computer Vision' },
  { name: 'MediaPipe', category: 'Pose Estimation' },
  { name: 'React.js', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'AI Processing' },
  { name: 'MongoDB', category: 'Database' },
]

function Features() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Page Header */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 
                           rounded-full text-sm font-medium text-primary-300 mb-4">
              Features
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              <span className="text-white">Powerful</span>{' '}
              <span className="gradient-text">Features</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Discover the cutting-edge technology powering VirtuFit's virtual try-on 
              and size recommendation system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features - Detailed Cards */}
      <section className="section-container">
        <div className="space-y-16">
          {mainFeatures.map((feature, index) => {
            const Icon = feature.icon
            const isReversed = index % 2 !== 0

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={isReversed ? 'lg:order-2' : ''}>
                  <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${feature.gradient} 
                                  flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-gray-400 mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span className="text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={isReversed ? 'lg:order-1' : ''}>
                  <div className="relative">
                    <div className={`absolute inset-0 bg-linear-to-r ${feature.gradient} 
                                    rounded-3xl blur-3xl opacity-20`} />
                    <div className="relative glass-card-strong p-8 rounded-3xl">
                      {/* Feature illustration placeholder */}
                      <div className="aspect-video bg-dark-300/50 rounded-xl flex items-center 
                                      justify-center border border-white/10">
                        <Icon className={`w-24 h-24 text-transparent bg-linear-to-br 
                                         ${feature.gradient} bg-clip-text`} 
                              style={{ color: 'transparent', backgroundClip: 'text', 
                                       WebkitBackgroundClip: 'text' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">
            <span className="text-white">And</span>{' '}
            <span className="gradient-text">Much More</span>
          </h2>
          <p className="section-subheading mt-4">
            Explore all the features that make VirtuFit the ultimate virtual fitting solution.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {additionalFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-xl group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center 
                                mb-4 group-hover:bg-primary-500/30 transition-colors">
                  <Icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-3xl"
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Built with Modern Technology
            </h2>
            <p className="text-gray-400">
              VirtuFit leverages industry-leading technologies for optimal performance.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl"
              >
                <p className="font-semibold text-white">{tech.name}</p>
                <p className="text-xs text-gray-500">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Experience These Features?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Try VirtuFit today and transform your online shopping experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/try-on" className="btn-primary inline-flex items-center justify-center space-x-2">
              <span>Try Virtual Try-On</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/size-recommender" className="btn-secondary">
              Get Size Recommendation
            </Link>
          </div>
        </motion.div>
      </section>
    </motion.div>
  )
}

export default Features
