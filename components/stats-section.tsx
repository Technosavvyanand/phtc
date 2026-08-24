"use client"

import { motion } from "framer-motion"
import { StatCard } from "./animated-counter"

const stats = [
  { value: 5000, suffix: "+", label: "Projects Completed", description: "Successful deliveries" },
  { value: 98, suffix: "%", label: "Client Satisfaction", description: "Happy customers" },
  { value: 150, suffix: "+", label: "Expert Consultants", description: "Industry veterans" },
  { value: 12, suffix: "+", label: "Years Experience", description: "Trusted excellence" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

export function StatsSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/8 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/6 rounded-full blur-[120px]" />
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
            Our Impact
          </span>
          <h2 className="mb-8">
            <span className="text-foreground text-shadow">Numbers That </span>
            <span className="gradient-text">Speak Excellence</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our track record reflects our unwavering commitment to delivering exceptional results for every client we serve.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <StatCard
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={index * 0.1}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
