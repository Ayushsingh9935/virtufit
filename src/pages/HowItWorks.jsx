/**
 * HowItWorks.jsx - How It Works Page
 *
 * Step-by-step guide showing:
 * - Virtual try-on process
 * - Size recommendation process
 * - Technical workflow
 * - User journey
 */

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Upload,
  Shirt,
  Cpu,
  CheckCircle,
  ArrowRight,
  ArrowDown,
  Camera,
  ScanLine,
  Ruler,
  Database,
  Calculator,
  ThumbsUp,
  Play,
} from 'lucide-react'

// Virtual try-on steps
const tryOnSteps = [
  {
    icon: Upload,
    title: 'Upload Your Photo',
    description:
      'Take or upload a clear, well-lit full-body photo. Stand straight facing the camera for best results.',
    tips: ['Good lighting', 'Full body visible', 'Plain background preferred'],
  },
  {
    icon: Shirt,
    title: 'Select Clothing',
    description:
      'Browse our catalog or upload an image of the clothing item you want to try on virtually.',
    tips: [
      'Front-facing product images work best',
      'Clear product shots',
      'Multiple items supported',
    ],
  },
  {
    icon: Cpu,
    title: 'AI Processing',
    description:
      'Our AI analyzes your body pose, extracts measurements, and maps the clothing realistically.',
    tips: [
      'Takes 3-5 seconds',
      'GPU-accelerated processing',
      'Deep learning models',
    ],
  },
  {
    icon: CheckCircle,
    title: 'View Results',
    description:
      'See the realistic virtual try-on result with size recommendations and fit analysis.',
    tips: [
      'Download high-res image',
      'Compare multiple outfits',
      'Share with friends',
    ],
  },
]

// Size recommender steps
const sizeSteps = [
  {
    icon: ScanLine,
    title: 'Input Measurements',
    description:
      'Enter your body measurements manually or let our AI estimate them from your photo.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Database,
    title: 'Brand Matching',
    description:
      'We match your measurements against brand-specific size charts from our database.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Calculator,
    title: 'AI Analysis',
    description:
      'Our ML model analyzes fit patterns and predicts the best size for you.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: ThumbsUp,
    title: 'Recommendation',
    description:
      'Get a personalized size recommendation with confidence score and fit details.',
    color: 'from-orange-500 to-red-500',
  },
]

// Technical pipeline steps
const technicalSteps = [
  { name: 'Image Input', description: 'Receive user photo' },
  { name: 'Preprocessing', description: 'Normalize and enhance' },
  { name: 'Pose Detection', description: 'MediaPipe/OpenPose' },
  { name: 'Segmentation', description: 'Body and clothing regions' },
  { name: 'Feature Extraction', description: 'Body measurements' },
  { name: 'GAN Processing', description: 'Realistic rendering' },
  { name: 'Post-processing', description: 'Quality enhancement' },
  { name: 'Output', description: 'Final result' },
]

function HowItWorks() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      {/* Page Header */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span
              className="inline-block px-4 py-2 bg-primary-500/10 
                         border border-primary-500/20 rounded-full 
                         text-sm font-medium text-primary-300 mb-4"
            >
              How It Works
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              <span className="text-white">Simple Steps,</span>{' '}
              <span className="gradient-text">Amazing Results</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Learn how VirtuFit&apos;s AI technology transforms your online
              shopping experience in just a few easy steps.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Virtual Try-On Process */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div
            className="inline-flex items-center space-x-2 px-4 py-2 
                       bg-purple-500/10 border border-purple-500/20 
                       rounded-full mb-4"
          >
            <Camera className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">
              Virtual Try-On
            </span>
          </div>

          <h2 className="section-heading">
            <span className="text-white">Virtual Try-On</span>{' '}
            <span className="gradient-text">Process</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tryOnSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  {/* Step Number */}
                  <div
                    className="absolute -top-4 -left-4 w-8 h-8 rounded-full 
                               bg-linear-to-br from-primary-500 to-secondary-500 
                               flex items-center justify-center text-white 
                               font-bold text-sm z-10"
                  >
                    {index + 1}
                  </div>

                  {/* Card */}
                  <div className="glass-card p-6 rounded-2xl h-full">
                    <div
                      className="w-14 h-14 rounded-xl bg-primary-500/20 
                                 flex items-center justify-center mb-4"
                    >
                      <Icon className="w-7 h-7 text-primary-400" />
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3">
                      {step.title}
                    </h3>

                    <p className="text-gray-400 mb-4">
                      {step.description}
                    </p>

                    <ul className="space-y-2">
                      {step.tips.map((tip) => (
                        <li
                          key={tip}
                          className="flex items-center space-x-2 
                                     text-sm text-gray-500"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Desktop Arrow */}
                  {index < tryOnSteps.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-1/2 -right-4 
                                 -translate-y-1/2 z-20"
                    >
                      <ArrowRight className="w-8 h-8 text-primary-500/50" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to="/try-on"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <Play className="w-5 h-5" />
            <span>Try It Now</span>
          </Link>
        </motion.div>
      </section>

      {/* Size Recommender Process */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div
            className="inline-flex items-center space-x-2 px-4 py-2 
                       bg-blue-500/10 border border-blue-500/20 
                       rounded-full mb-4"
          >
            <Ruler className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">
              Size Recommender
            </span>
          </div>

          <h2 className="section-heading">
            <span className="text-white">Size Recommendation</span>{' '}
            <span className="gradient-text">Process</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sizeSteps.map((step, index) => {
            const Icon = step.icon

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="glass-card p-6 rounded-2xl text-center h-full">
                  <div
                    className={`w-16 h-16 mx-auto rounded-2xl 
                                bg-linear-to-br ${step.color} 
                                flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-400">{step.description}</p>
                </div>

                {/* Mobile Arrow */}
                {index < sizeSteps.length - 1 && (
                  <div className="flex justify-center my-4 lg:hidden">
                    <ArrowDown className="w-6 h-6 text-gray-600" />
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to="/size-recommender"
            className="btn-secondary inline-flex items-center space-x-2"
          >
            <Ruler className="w-5 h-5" />
            <span>Get Your Size</span>
          </Link>
        </motion.div>
      </section>

      {/* Technical Pipeline */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-3xl"
        >
          <div className="text-center mb-10">
            <div
              className="inline-flex items-center space-x-2 px-4 py-2 
                         bg-green-500/10 border border-green-500/20 
                         rounded-full mb-4"
            >
              <Cpu className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-300">
                Technical Details
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Behind the Scenes: AI Pipeline
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto">
              Our sophisticated AI pipeline processes your images through
              multiple stages to achieve photorealistic results.
            </p>
          </div>

          <div className="overflow-x-auto pb-4">
            <div
              className="flex items-center justify-start md:justify-center 
                         space-x-4 min-w-max px-4"
            >
              {technicalSteps.map((step, index) => (
                <motion.div
                  key={step.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="text-center">
                    <div
                      className="w-16 h-16 rounded-xl 
                                 bg-linear-to-br from-primary-500/20 
                                 to-secondary-500/20 
                                 border border-primary-500/30 
                                 flex items-center justify-center mb-2"
                    >
                      <span className="text-lg font-bold gradient-text">
                        {index + 1}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-white">
                      {step.name}
                    </p>

                    <p className="text-xs text-gray-500 max-w-20 mx-auto">
                      {step.description}
                    </p>
                  </div>

                  {index < technicalSteps.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-primary-500/50 mx-2 shrink-0" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Video Demo */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div
            className="aspect-video bg-dark-200 flex items-center 
                       justify-center border border-white/10 
                       rounded-3xl"
          >
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="w-20 h-20 rounded-full 
                           bg-linear-to-br from-primary-500 
                           to-secondary-500 flex items-center 
                           justify-center mb-4 mx-auto 
                           shadow-lg shadow-primary-500/30"
              >
                <Play className="w-8 h-8 text-white ml-1" />
              </motion.button>

              <p className="text-xl font-semibold text-white">
                Watch Demo Video
              </p>

              <p className="text-gray-400">
                See VirtuFit in action
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-3xl text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>

          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Experience the magic of AI-powered virtual try-on and smart
            size recommendations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="btn-primary inline-flex items-center 
                         justify-center space-x-2"
            >
              <span>Create Free Account</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link to="/features" className="btn-secondary">
              Explore Features
            </Link>
          </div>
        </motion.div>
      </section>
    </motion.div>
  )
}

export default HowItWorks
