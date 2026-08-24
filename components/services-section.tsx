"use client"

import { motion } from "framer-motion"
import { 
  GraduationCap, 
  FileText, 
  Search, 
  Monitor, 
  Briefcase, 
  PenTool,
  ArrowUpRight
} from "lucide-react"

const services = [
  {
    icon: GraduationCap,
    title: "Academic Consulting",
    description: "Expert guidance for academic excellence, from thesis development to curriculum planning and scholarly research.",
  },
  {
    icon: FileText,
    title: "Assignment Assistance",
    description: "Professional support for assignments, projects, and coursework across all academic disciplines and levels.",
  },
  {
    icon: Search,
    title: "Research Support",
    description: "Comprehensive research assistance including literature review, data analysis, methodology, and findings.",
  },
  {
    icon: Monitor,
    title: "Digital Solutions",
    description: "Cutting-edge digital transformation services for educational institutions and modern businesses.",
  },
  {
    icon: Briefcase,
    title: "Business Consulting",
    description: "Strategic business advisory services to help organizations achieve their goals and objectives.",
  },
  {
    icon: PenTool,
    title: "Content Writing",
    description: "High-quality content creation services for academic, professional, and marketing communications.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2.5 rounded-full glass-card text-sm font-medium text-primary mb-6">
            Our Services
          </span>
          <h2 className="mb-8">
            <span className="text-foreground text-shadow">Solutions Tailored for </span>
            <span className="gradient-text">Your Success</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We offer comprehensive consulting services designed to elevate your academic and professional journey to new heights.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="relative h-full glass-card rounded-2xl p-7 sm:p-8 overflow-hidden transition-all duration-500 hover:shadow-premium-lg">
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-3 group-hover:translate-y-0">
                    <span>Learn More</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>

                {/* Decorative Corner Glow */}
                <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-gradient-to-br from-primary/15 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
