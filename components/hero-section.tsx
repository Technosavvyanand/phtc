"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-24">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs - More subtle and premium */}
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[140px] animate-float-slow" />
        <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-secondary/12 rounded-full blur-[140px] animate-float-slow" style={{ animationDelay: "-4s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/8 rounded-full blur-[180px]" />
        
        {/* Grid Pattern - More subtle */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card text-sm font-medium text-muted-foreground mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse-subtle" />
              <span>Premium Consulting Services</span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="mb-8"
            >
              <span className="block text-foreground text-shadow">Where Knowledge</span>
              <span className="block gradient-text-animated mt-2">Takes the Litmus Test</span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Empowering students and professionals with expert academic consulting, research support, and digital solutions that transform potential into excellence.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-full shadow-premium hover:shadow-premium-lg transition-all duration-500 group btn-premium"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-foreground glass-card rounded-full transition-all duration-500"
                >
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={fadeInUp}
              className="mt-14 flex flex-wrap items-center justify-center lg:justify-start gap-8"
            >
              {[
                { icon: "🏆", label: "Industry Leaders" },
                { icon: "⭐", label: "5-Star Rated" },
                { icon: "🔒", label: "100% Confidential" },
              ].map((badge) => (
                <div key={badge.label} className="flex items-center gap-3 group">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-lg">{badge.icon}</span>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Floating Logo Card */}
              <motion.div
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <div className="relative w-72 h-72 rounded-3xl overflow-hidden glass-card animate-glow shadow-premium-lg">
                  <Image
                    src="/images/academic-consulting-education.png"
                    alt="Academic consulting and education"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 288px"
                  />
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary shadow-lg shadow-primary/30" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-secondary to-primary shadow-lg shadow-secondary/30" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/60 shadow-lg shadow-primary/20" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-secondary/60 shadow-lg shadow-secondary/20" />
              </motion.div>

              {/* Orbit Rings */}
              <div className="absolute inset-6 border border-dashed border-primary/15 rounded-full animate-border-glow" />
              <div className="absolute inset-14 border border-dashed border-secondary/10 rounded-full" />
              <div className="absolute inset-24 border border-primary/8 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-7 h-12 rounded-full border-2 border-muted-foreground/25 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1], y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-2.5 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}