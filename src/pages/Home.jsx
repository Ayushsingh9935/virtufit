/**
 * Home.jsx - Landing Page
 * 
 * The main landing page combining all sections:
 * - Hero section
 * - Features overview
 * - How it works preview
 * - Testimonials
 * - FAQ
 * - Call to action
 */

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Camera, 
  Ruler, 
  Sparkles, 
  Zap, 
  Shield, 
  Globe,
  ArrowRight,
  ChevronRight,
  Quote,
  Plus,
  Minus,
  CheckCircle2,
  Star,
  Users,
  TrendingUp,
  Award
} from 'lucide-react'
import { useState } from 'react'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'

// Feature data
const features = [
  {
    icon: Camera,
    title: 'Virtual Try-On',
    description: 'Upload your photo and see how clothes look on you in real-time using advanced AI technology.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Ruler,
    title: 'Smart Size Recommender',
    description: 'Get accurate size recommendations based on your measurements and brand-specific sizing data.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Sparkles,
    title: 'AI-Powered Analysis',
    description: 'Our machine learning models analyze body proportions for the most accurate fit predictions.',
    gradient: 'from-primary-500 to-secondary-500',
  },
  {
    icon: Zap,
    title: 'Instant Results',
    description: 'Get try-on results and size recommendations within seconds, not minutes.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your photos are processed securely and never stored without your explicit consent.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Globe,
    title: 'Multi-Brand Support',
    description: 'Works with 100+ popular fashion brands with brand-specific sizing accuracy.',
    gradient: 'from-indigo-500 to-violet-500',
  },
]

// How it works steps
const steps = [
  {
    number: '01',
    title: 'Upload Your Photo',
    description: 'Take or upload a clear full-body photo in well-lit conditions.',
  },
  {
    number: '02',
    title: 'Choose Your Outfit',
    description: 'Browse and select the clothing items you want to try on virtually.',
  },
  {
    number: '03',
    title: 'AI Processing',
    description: 'Our AI analyzes your body shape and maps the clothing realistically.',
  },
  {
    number: '04',
    title: 'See Results',
    description: 'View the virtual try-on result and get personalized size recommendations.',
  },
]

// Testimonials data
const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Fashion Enthusiast',
    avatar: 'PS',
    content: 'VirtuFit has completely changed how I shop online. The virtual try-on is incredibly accurate, and I haven\'t had a single return since I started using it!',
    rating: 5,
  },
  {
    name: 'Rahul Verma',
    role: 'Tech Professional',
    avatar: 'RV',
    content: 'As someone who hates the hassle of returns, VirtuFit is a game-changer. The size recommendations are spot-on every time.',
    rating: 5,
  },
  {
    name: 'Anita Singh',
    role: 'Content Creator',
    avatar: 'AS',
    content: 'I recommend VirtuFit to all my followers. The AI technology is impressive, and it saves so much time when putting together outfits.',
    rating: 5,
  },
]

// FAQ data
const faqs = [
  {
    question: 'How accurate is the virtual try-on?',
    answer: 'Our AI achieves 98% accuracy in clothing visualization by using advanced deep learning models trained on millions of fashion images. The results are realistic and help you make confident purchasing decisions.',
  },
  {
    question: 'Is my photo data secure?',
    answer: 'Absolutely. We prioritize your privacy. Photos are processed using end-to-end encryption, and we never store your images without explicit consent. All processing happens in secure, isolated environments.',
  },
  {
    question: 'Which brands are supported?',
    answer: 'VirtuFit supports over 100 popular fashion brands including international and Indian brands. Our database includes brand-specific sizing data for accurate recommendations.',
  },
  {
    question: 'How does the size recommender work?',
    answer: 'The size recommender uses your body measurements (which you can input manually or let our AI estimate from your photo) and compares them against brand-specific size charts to suggest the best fit.',
  },
  {
    question: 'Is VirtuFit free to use?',
    answer: 'VirtuFit offers a free tier with limited try-ons per month. For unlimited access and premium features, we offer affordable subscription plans.',
  },
]

function Home() {
  // State for FAQ accordion
  const [openFaq, setOpenFaq] = useState(null)

  // Toggle FAQ item
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="section-container">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 
                       rounded-full text-sm font-medium text-primary-300 mb-4"
          >
            Powerful Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-heading"
          >
            <span className="text-white">Everything You Need to</span>{' '}
            <span className="gradient-text">Shop Confidently</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-subheading"
          >
            Experience the future of online fashion with our comprehensive suite of AI-powered tools.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="section-container">
        <div className="glass-card p-8 md:p-12 rounded-3xl overflow-hidden relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-primary-500/10 
                          to-secondary-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="section-heading"
              >
                <span className="text-white">How</span>{' '}
                <span className="gradient-text">VirtuFit Works</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="section-subheading mt-4"
              >
                Get started in just 4 simple steps
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative text-center"
                >
                  {/* Step number */}
                  <div className="text-6xl font-bold gradient-text opacity-20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                  
                  {/* Connector line (not on last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px 
                                    bg-linear-to-r from-primary-500/50 to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center mt-12"
            >
              <Link 
                to="/how-it-works" 
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-container">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 
                       rounded-full text-sm font-medium text-primary-300 mb-4"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-heading"
          >
            <span className="text-white">Loved by</span>{' '}
            <span className="gradient-text">Fashion Enthusiasts</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary-500/30 mb-4" />
              
              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary-500 to-secondary-500 
                                flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-heading"
            >
              <span className="text-white">Frequently Asked</span>{' '}
              <span className="gradient-text">Questions</span>
            </motion.h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 ml-4"
                  >
                    {openFaq === index ? (
                      <Minus className="w-5 h-5 text-primary-400" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400" />
                    )}
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-4 text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-linear-to-r from-primary-600 to-secondary-600" />
          
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[50px_50px]" />
          
          <div className="relative z-10 px-8 py-16 md:py-20 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            >
              Ready to Transform Your Shopping Experience?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/80 max-w-2xl mx-auto mb-8"
            >
              Join thousands of happy users who have revolutionized their online fashion shopping 
              with VirtuFit's AI-powered technology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                to="/signup"
                className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl 
                           hover:bg-white/90 transition-colors inline-flex items-center 
                           justify-center space-x-2 shadow-lg"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/contact"
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl 
                           border border-white/20 hover:bg-white/20 transition-colors"
              >
                Contact Sales
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  )
}

export default Home
