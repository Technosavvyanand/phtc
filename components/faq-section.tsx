"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "What services does Ph Test Consultants offer?",
    answer: "We offer a comprehensive range of services including Academic Consulting, Assignment Assistance, Research Support, Digital Solutions, Business Consulting, and Content Writing. Each service is tailored to meet your specific needs and objectives.",
  },
  {
    question: "How do you ensure confidentiality?",
    answer: "We take confidentiality very seriously. All client information is protected with enterprise-grade security protocols, and our team members are bound by strict non-disclosure agreements. Your data and projects remain 100% confidential.",
  },
  {
    question: "What is your typical turnaround time?",
    answer: "Turnaround time varies depending on the complexity and scope of the project. We work with you to establish realistic deadlines and always deliver on time. Rush services are available for urgent requirements.",
  },
  {
    question: "How do I get started with your services?",
    answer: "Getting started is easy! Simply reach out through our contact form, WhatsApp, or email. We'll schedule a consultation to understand your requirements and provide a customized solution and quote.",
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes, we offer free revisions to ensure complete satisfaction. Our quality assurance process includes multiple review stages, and we work closely with you until the final deliverable meets your expectations.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including bank transfers, credit/debit cards, and popular digital payment platforms. Payment terms are flexible and discussed during the project consultation.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-primary mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Frequently Asked </span>
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services and process.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full glass-card rounded-xl p-5 sm:p-6 text-left transition-all duration-300 hover:border-primary/30 ${
                  openIndex === index ? "border-primary/40" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-foreground pr-8">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-primary" />
                  </motion.div>
                </div>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-muted-foreground pt-4 leading-relaxed">{faq.answer}</p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
