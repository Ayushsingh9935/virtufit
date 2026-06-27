

import { motion } from 'framer-motion'

function FeatureCard({ 
  icon: Icon, 
  title, 
  description, 
  gradient = 'from-primary-500 to-secondary-500',
  delay = 0 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <div className={`absolute inset-0 bg-linear-to-r ${gradient} rounded-2xl 
                       blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
      
      {/* Card content */}
      <div className="relative glass-card p-6 md:p-8 rounded-2xl h-full 
                      transition-all duration-300 group-hover:border-white/20">
        
        {/* Icon container */}
        <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${gradient} 
                         flex items-center justify-center mb-5 
                         shadow-lg shadow-primary-500/20
                         group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-7 h-7 text-white" />
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary-300 
                       transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>
        
        {/* Decorative corner accent */}
        <div className={`absolute top-0 right-0 w-20 h-20 bg-linear-to-br ${gradient} 
                         opacity-5 rounded-bl-[100px] rounded-tr-2xl`} />
      </div>
    </motion.div>
  )
}

export default FeatureCard
