"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-primary/8 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="gradient-border p-10 sm:p-14 lg:p-20"
          >
            <div className="glass-card rounded-2xl p-8 sm:p-12 lg:p-16">
              {/* Rating */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center gap-1.5 mb-8"
              >
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
                <span className="ml-2 text-sm font-medium text-muted-foreground">Rated 4.9/5 by 5000+ clients</span>
              </motion.div>

              <h2 className="mb-8">
                <span className="text-foreground text-shadow">Ready to </span>
                <span className="gradient-text">Transform</span>
                <span className="text-foreground text-shadow"> Your Future?</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                Join thousands of successful clients who have achieved their goals with our expert guidance. Your success story starts here.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2.5 px-10 py-5 text-base font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-full shadow-premium hover:shadow-premium-lg transition-all duration-500 group btn-premium"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="#services"
                    className="inline-flex items-center justify-center gap-2.5 px-10 py-5 text-base font-semibold text-foreground border-2 border-border rounded-full hover:border-primary/40 hover:bg-primary/5 transition-all duration-500"
                  >
                    View All Services
                  </Link>
                </motion.div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-14 pt-10 border-t border-border/40">
                <p className="text-sm font-medium text-muted-foreground mb-6">Trusted by students and professionals worldwide</p>
                <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
                  {['Oxford', 'Harvard', 'MIT', 'Stanford', 'Cambridge'].map((name) => (
                    <span key={name} className="text-lg font-semibold text-foreground/50 hover:text-foreground transition-colors duration-300">
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
