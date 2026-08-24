"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "PhD Candidate, Oxford University",
    content: "Ph Test Consultants transformed my research approach. Their guidance was instrumental in completing my dissertation ahead of schedule with exceptional quality.",
    rating: 5,
    image: "SJ",
  },
  {
    name: "Michael Chen",
    role: "MBA Student, Harvard Business School",
    content: "The business consulting services exceeded my expectations. Professional, thorough, and delivered on time. Highly recommend for any academic needs.",
    rating: 5,
    image: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, TechCorp",
    content: "Their content writing services helped us establish thought leadership in our industry. The quality and turnaround time were exceptional.",
    rating: 5,
    image: "ER",
  },
  {
    name: "David Kim",
    role: "Research Analyst, Goldman Sachs",
    content: "Outstanding research support. The team demonstrated deep expertise and attention to detail that made a significant difference in my project outcomes.",
    rating: 5,
    image: "DK",
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="testimonials" className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-secondary/10 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Trusted by </span>
            <span className="gradient-text">Thousands</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our clients who have transformed their academic and professional journeys with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              onHoverStart={() => setActiveIndex(index)}
              className={`relative glass-card rounded-2xl p-6 sm:p-8 transition-all duration-500 ${
                activeIndex === index ? "border-primary/40" : ""
              }`}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote className="w-12 h-12" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground/90 leading-relaxed mb-6 text-base sm:text-lg">
                  {`"${testimonial.content}"`}
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>

              {/* Hover Gradient */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 transition-opacity duration-500 ${
                activeIndex === index ? "opacity-100" : "opacity-0"
              }`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
