// /**
//  * Team.jsx - Team Page
//  *
//  * Showcases the project team members:
//  * - Team member cards with photos
//  * - Roles and responsibilities
//  * - Contact information
//  * - Academic details
//  */

// import { motion } from 'framer-motion'
// import { Link } from 'react-router-dom'
// import {
//   Github,
//   Linkedin,
//   Mail,
//   GraduationCap,
//   Code,
//   Brain,
//   Palette,
//   Database,
//   ArrowRight,
//   Award,
//   BookOpen
// } from 'lucide-react'

// // Team members data
// const teamMembers = [
//   {
//     name: 'Yashveer Pratap Singh',
//     rollNo: '2206490100063',
//     role: 'Full Stack Developer & AI Lead',
//     avatar: 'YS',
//     bio: 'Passionate about AI/ML and web development. Leading the development of VirtuFit\'s core AI models and frontend architecture.',
//     skills: ['React.js', 'Python', 'TensorFlow', 'Node.js'],
//     responsibilities: [
//       'AI model development and training',
//       'Frontend architecture and UI/UX',
//       'System integration',
//       'Performance optimization',
//     ],
//     social: {
//       github: '#',
//       linkedin: '#',
//       email: 'yashveer@example.com',
//     },
//     gradient: 'from-purple-500 to-pink-500',
//   },
//   {
//     name: 'Ayush Singh',
//     rollNo: '2206490100020',
//     role: 'Backend Developer & ML Engineer',
//     avatar: 'AS',
//     bio: 'Focused on backend systems and machine learning. Building robust APIs and implementing size recommendation algorithms.',
//     skills: ['Python', 'PyTorch', 'MongoDB', 'FastAPI'],
//     responsibilities: [
//       'Backend API development',
//       'Database architecture',
//       'ML model implementation',
//       'Security and authentication',
//     ],
//     social: {
//       github: '#',
//       linkedin: '#',
//       email: 'ayush@example.com',
//     },
//     gradient: 'from-blue-500 to-cyan-500',
//   },
// ]

// // Roles icons mapping
// const roleIcons = {
//   'Full Stack Developer & AI Lead': Brain,
//   'Backend Developer & ML Engineer': Database,
// }

// // Project guide info
// const projectGuide = {
//   name: 'Project Guide',
//   institution: 'MG Institute of Management and Technology',
//   department: 'Computer Science & Engineering',
// }

// function Team() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.3 }}
//     >
//       {/* Page Header */}
//       <section className="relative py-16 md:py-24 overflow-hidden">
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
//           <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl" />
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center"
//           >
//             <span className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20
//                            rounded-full text-sm font-medium text-primary-300 mb-4">
//               Our Team
//             </span>
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">
//               <span className="text-white">Meet the</span>{' '}
//               <span className="gradient-text">Team</span>
//             </h1>
//             <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
//               The talented individuals behind VirtuFit, working together to revolutionize
//               online fashion shopping with AI technology.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Team Members */}
//       <section className="section-container">
//         <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//           {teamMembers.map((member, index) => {
//             const RoleIcon = roleIcons[member.role] || Code
//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 className="group"
//               >
//                 <div className="relative">
//                   {/* Glow effect */}
//                   <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-3xl
//                                   blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

//                   {/* Card */}
//                   <div className="relative glass-card-strong p-8 rounded-3xl">
//                     {/* Header */}
//                     <div className="flex items-start space-x-4 mb-6">
//                       {/* Avatar */}
//                       <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient}
//                                       flex items-center justify-center text-2xl font-bold text-white
//                                       shadow-lg flex-shrink-0`}>
//                         {member.avatar}
//                       </div>

//                       <div className="flex-grow">
//                         <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
//                         <p className="text-primary-400 font-medium mb-1">{member.role}</p>
//                         <p className="text-sm text-gray-500">Roll No: {member.rollNo}</p>
//                       </div>
//                     </div>

//                     {/* Bio */}
//                     <p className="text-gray-400 mb-6 leading-relaxed">{member.bio}</p>

//                     {/* Skills */}
//                     <div className="mb-6">
//                       <h4 className="text-sm font-semibold text-gray-300 mb-3">Skills</h4>
//                       <div className="flex flex-wrap gap-2">
//                         {member.skills.map((skill, i) => (
//                           <span
//                             key={i}
//                             className="px-3 py-1 bg-white/5 border border-white/10 rounded-full
//                                        text-sm text-gray-300"
//                           >
//                             {skill}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Responsibilities */}
//                     <div className="mb-6">
//                       <h4 className="text-sm font-semibold text-gray-300 mb-3">Responsibilities</h4>
//                       <ul className="space-y-2">
//                         {member.responsibilities.map((resp, i) => (
//                           <li key={i} className="flex items-center space-x-2 text-sm text-gray-400">
//                             <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${member.gradient}`} />
//                             <span>{resp}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     {/* Social Links */}
//                     <div className="flex space-x-3 pt-4 border-t border-white/10">
//                       <a
//                         href={member.social.github}
//                         className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center
//                                    text-gray-400 hover:text-white hover:bg-white/10 transition-all"
//                         aria-label="GitHub"
//                       >
//                         <Github className="w-5 h-5" />
//                       </a>
//                       <a
//                         href={member.social.linkedin}
//                         className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center
//                                    text-gray-400 hover:text-white hover:bg-white/10 transition-all"
//                         aria-label="LinkedIn"
//                       >
//                         <Linkedin className="w-5 h-5" />
//                       </a>
//                       <a
//                         href={`mailto:${member.social.email}`}
//                         className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center
//                                    text-gray-400 hover:text-white hover:bg-white/10 transition-all"
//                         aria-label="Email"
//                       >
//                         <Mail className="w-5 h-5" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             )
//           })}
//         </div>
//       </section>

//       {/* Academic Info */}
//       <section className="section-container">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="glass-card p-8 md:p-12 rounded-3xl"
//         >
//           <div className="text-center mb-8">
//             <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-500/10
//                             border border-primary-500/20 rounded-full mb-4">
//               <GraduationCap className="w-4 h-4 text-primary-400" />
//               <span className="text-sm font-medium text-primary-300">Academic Details</span>
//             </div>
//             <h2 className="text-2xl md:text-3xl font-bold text-white">
//               Project Information
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Institution Details */}
//             <div className="space-y-4">
//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center flex-shrink-0">
//                   <BookOpen className="w-6 h-6 text-primary-400" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-white mb-1">Institution</h3>
//                   <p className="text-gray-400">MG Institute of Management and Technology</p>
//                   <p className="text-gray-500 text-sm">Lucknow, Uttar Pradesh</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 rounded-xl bg-secondary-500/20 flex items-center justify-center flex-shrink-0">
//                   <Award className="w-6 h-6 text-secondary-400" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-white mb-1">University</h3>
//                   <p className="text-gray-400">Dr. A.P.J Abdul Kalam Technical University</p>
//                   <p className="text-gray-500 text-sm">Uttar Pradesh, India</p>
//                 </div>
//               </div>
//             </div>

//             {/* Project Details */}
//             <div className="space-y-4">
//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
//                   <Code className="w-6 h-6 text-green-400" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-white mb-1">Project Type</h3>
//                   <p className="text-gray-400">Final Year Major Project</p>
//                   <p className="text-gray-500 text-sm">B.Tech Computer Science & Engineering</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
//                   <Brain className="w-6 h-6 text-yellow-400" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-white mb-1">Project Domain</h3>
//                   <p className="text-gray-400">Artificial Intelligence & Machine Learning</p>
//                   <p className="text-gray-500 text-sm">Computer Vision, Deep Learning</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* CTA Section */}
//       <section className="section-container">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
//             Want to Connect?
//           </h2>
//           <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
//             We'd love to hear from you! Reach out for collaborations, queries, or feedback.
//           </p>
//           <Link
//             to="/contact"
//             className="btn-primary inline-flex items-center space-x-2"
//           >
//             <span>Contact Us</span>
//             <ArrowRight className="w-5 h-5" />
//           </Link>
//         </motion.div>
//       </section>
//     </motion.div>
//   )
// }

// export default Team
