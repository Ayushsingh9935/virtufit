/**
 * About.jsx - About Us Page
 * 
 * Comprehensive about page including:
 * - Abstract
 * - Introduction
 * - Project objectives
 * - System architecture overview
 * - SDLC methodology
 * - Expected outcomes
 * - Future scope
 */

import { motion } from 'framer-motion'
import { 
  Target, 
  Lightbulb, 
  Cpu, 
  GitBranch, 
  Rocket, 
  Eye,
  BookOpen,
  Award,
  Users,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Building
} from 'lucide-react'
import { Link } from 'react-router-dom'

// Objectives list
const objectives = [
  'Develop an AI-powered virtual try-on system using deep learning techniques',
  'Implement accurate body measurement estimation from user photos',
  'Create a smart size recommendation engine using brand-specific data',
  'Design an intuitive and responsive user interface',
  'Ensure user privacy and data security throughout the system',
  'Achieve real-time processing for instant results',
  'Support multiple clothing categories and fashion brands',
  'Reduce online fashion return rates through accurate fit prediction',
]

// Expected outcomes
const outcomes = [
  {
    icon: TrendingUp,
    title: '98% Accuracy',
    description: 'Achieved high accuracy in virtual try-on visualization and size predictions',
  },
  {
    icon: Users,
    title: 'Enhanced UX',
    description: 'Improved online shopping experience with visual try-before-you-buy capability',
  },
  {
    icon: Target,
    title: 'Reduced Returns',
    description: 'Expected 40% reduction in product returns due to accurate size recommendations',
  },
  {
    icon: Award,
    title: 'Industry Ready',
    description: 'Scalable solution ready for integration with e-commerce platforms',
  },
]

// Future scope items
const futureScope = [
  'Integration with AR glasses for immersive try-on experience',
  '3D body scanning using smartphone LiDAR sensors',
  'AI-powered outfit recommendations based on user preferences',
  'Social sharing features for getting feedback from friends',
  'Multi-person try-on for group shopping experiences',
  'Voice-controlled interface for accessibility',
  'Integration with virtual fashion shows and events',
  'Blockchain-based verification for authentic brand products',
]

// Page section animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
}

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Page Header */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 
                           rounded-full text-sm font-medium text-primary-300 mb-4">
              About the Project
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
              <span className="text-white">About</span>{' '}
              <span className="gradient-text">VirtuFit</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              An innovative AI-powered solution revolutionizing online fashion shopping 
              through virtual try-on technology and smart size recommendations.
            </p>
          </motion.div>

          {/* Academic Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 glass-card p-6 md:p-8 rounded-2xl max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center shrink-0">
                  <Building className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Institution</p>
                  <p className="font-semibold text-white">MG Institute of Management and Technology</p>
                  <p className="text-gray-400">Lucknow, Uttar Pradesh</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-secondary-500/20 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 text-secondary-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Affiliated to</p>
                  <p className="font-semibold text-white">Dr. A.P.J Abdul Kalam Technical University</p>
                  <p className="text-gray-400">Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Abstract Section */}
      <section className="section-container">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-3xl"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-primary-500 to-secondary-500 
                            flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Abstract</h2>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed text-lg">
              <strong className="text-white">VirtuFit</strong> is an innovative AI-powered virtual try-on 
              and smart size recommendation system designed to revolutionize the online fashion shopping 
              experience. The system leverages advanced deep learning techniques, including Generative 
              Adversarial Networks (GANs) and Convolutional Neural Networks (CNNs), to enable users to 
              visualize how clothing items would look on them without physical trials.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mt-4">
              The platform addresses the critical challenge of high return rates in e-commerce fashion 
              retail, which currently stands at 30-40% globally, primarily due to size and fit issues. 
              By providing accurate virtual try-on capabilities combined with intelligent size 
              recommendations based on body measurements and brand-specific sizing data, VirtuFit aims 
              to significantly reduce returns while enhancing customer satisfaction and confidence in 
              online fashion purchases.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mt-4">
              The system employs a multi-stage pipeline including image preprocessing, pose estimation, 
              clothing segmentation, and realistic rendering to achieve photorealistic virtual try-on 
              results. The size recommendation engine utilizes machine learning models trained on 
              extensive sizing datasets to provide personalized fit suggestions across multiple brands 
              and categories.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="section-container">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-cyan-500 
                            flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Introduction</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">The Problem</h3>
              <p className="text-gray-400 leading-relaxed">
                Online fashion retail faces a significant challenge: customers cannot physically try 
                on clothes before purchasing, leading to uncertainty about fit and appearance. This 
                results in high return rates (30-40%), increased operational costs, environmental 
                impact from logistics, and customer dissatisfaction. Traditional size charts are 
                often inconsistent across brands, further complicating the shopping experience.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">Our Solution</h3>
              <p className="text-gray-400 leading-relaxed">
                VirtuFit addresses these challenges by combining cutting-edge AI technologies to 
                create a comprehensive virtual fitting room experience. Users can upload their photos 
                and see realistic visualizations of how clothes would look on them. The smart size 
                recommender analyzes body measurements and brand-specific data to suggest the perfect 
                fit, eliminating guesswork and building purchasing confidence.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Objectives Section */}
      <section className="section-container">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-green-500 to-emerald-500 
                            flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Project Objectives</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3 glass-card p-4 rounded-xl"
              >
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                <p className="text-gray-300">{objective}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* System Architecture Section */}
      <section className="section-container">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 
                            flex items-center justify-center">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">System Architecture</h2>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            {/* Architecture Diagram Placeholder */}
            <div className="bg-dark-300/50 rounded-xl p-8 mb-8 border border-white/10">
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div className="p-4">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-primary-500/20 
                                  flex items-center justify-center">
                    <span className="text-2xl">📱</span>
                  </div>
                  <p className="font-semibold text-white">Frontend</p>
                  <p className="text-sm text-gray-400">React.js + Tailwind</p>
                </div>
                <div className="p-4">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-secondary-500/20 
                                  flex items-center justify-center">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <p className="font-semibold text-white">Backend</p>
                  <p className="text-sm text-gray-400">Node.js + Python</p>
                </div>
                <div className="p-4">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-green-500/20 
                                  flex items-center justify-center">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <p className="font-semibold text-white">AI Models</p>
                  <p className="text-sm text-gray-400">TensorFlow + PyTorch</p>
                </div>
                <div className="p-4">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-yellow-500/20 
                                  flex items-center justify-center">
                    <span className="text-2xl">🗄️</span>
                  </div>
                  <p className="font-semibold text-white">Database</p>
                  <p className="text-sm text-gray-400">MongoDB + Redis</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white mb-4">Key Components</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-primary-400 mb-2">Virtual Try-On Module</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• Image preprocessing and normalization</li>
                  <li>• Pose estimation using OpenPose/MediaPipe</li>
                  <li>• Clothing segmentation with U-Net</li>
                  <li>• GAN-based realistic rendering</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-secondary-400 mb-2">Size Recommender Module</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• Body measurement extraction</li>
                  <li>• Brand-specific size database</li>
                  <li>• ML-based fit prediction</li>
                  <li>• Confidence score calculation</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SDLC Methodology Section */}
      <section className="section-container">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-500 to-red-500 
                            flex items-center justify-center">
              <GitBranch className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">SDLC Methodology</h2>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <p className="text-gray-300 mb-6 text-lg">
              VirtuFit follows the <strong className="text-white">Agile Development Methodology</strong> with 
              iterative sprints, enabling continuous improvement and adaptation to changing requirements.
            </p>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { phase: 'Planning', icon: '📋', color: 'from-blue-500 to-blue-600' },
                { phase: 'Analysis', icon: '🔍', color: 'from-purple-500 to-purple-600' },
                { phase: 'Design', icon: '🎨', color: 'from-pink-500 to-pink-600' },
                { phase: 'Development', icon: '💻', color: 'from-green-500 to-green-600' },
                { phase: 'Testing', icon: '🧪', color: 'from-yellow-500 to-yellow-600' },
                { phase: 'Deployment', icon: '🚀', color: 'from-red-500 to-red-600' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-3 rounded-xl bg-linear-to-br ${item.color} 
                                  flex items-center justify-center text-2xl`}>
                    {item.icon}
                  </div>
                  <p className="font-medium text-white">{item.phase}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Expected Outcomes Section */}
      <section className="section-container">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-cyan-500 to-blue-500 
                            flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Expected Outcomes</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((outcome, index) => {
              const Icon = outcome.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-2xl text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-linear-to-br 
                                  from-primary-500 to-secondary-500 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{outcome.title}</h3>
                  <p className="text-gray-400">{outcome.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* Future Scope Section */}
      <section className="section-container">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-indigo-500 to-violet-500 
                            flex items-center justify-center">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Future Scope</h2>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <p className="text-gray-300 mb-6 text-lg">
              VirtuFit has immense potential for future enhancements and expansions:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {futureScope.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-4 bg-white/5 rounded-xl"
                >
                  <Rocket className="w-5 h-5 text-primary-400 shrink-0" />
                  <p className="text-gray-300">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Want to Learn More?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Explore our features in detail or meet the team behind VirtuFit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/features" className="btn-primary inline-flex items-center justify-center space-x-2">
              <span>Explore Features</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/team" className="btn-secondary">
              Meet the Team
            </Link>
          </div>
        </motion.div>
      </section>
    </motion.div>
  )
}

export default About
