"use client"

import { motion } from "framer-motion"
import { 
  Shield, 
  Clock, 
  Users, 
  Award,
  Zap,
  HeartHandshake
} from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "100% Confidential",
    description: "Your information and projects are protected with enterprise-grade security protocols.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We understand deadlines. Every project is delivered on schedule, guaranteed.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our consultants are industry veterans with advanced degrees and proven expertise.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Rigorous quality checks ensure every deliverable exceeds expectations.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Efficient processes mean quicker results without compromising on quality.",
  },
  {
    icon: HeartHandshake,
    title: "24/7 Support",
    description: "Round-the-clock assistance ensures you are never left waiting for answers.",
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-muted/20" />
        <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/3 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="inline-block px-5 py-2.5 rounded-full glass-card text-sm font-medium text-primary mb-6">
              Why Choose Us
            </span>
            <h2 className="mb-8">
              <span className="text-foreground text-shadow">Excellence in Every </span>
              <span className="gradient-text">Detail</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed">
              At Ph Test Consultants, we believe in delivering more than just services – we deliver transformative experiences that propel you towards lasting success.
            </p>

            {/* Feature List */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {features.slice(0, 4).map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors duration-300">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="grid gap-5">
              {features.slice(4).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 8 }}
                  className="glass-card rounded-2xl p-7 flex items-center gap-5 group hover:shadow-premium transition-all duration-400"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1.5 text-lg group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-secondary/8 rounded-full blur-3xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
