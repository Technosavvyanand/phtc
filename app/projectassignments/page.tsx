"use client"

import { motion } from "framer-motion"
import {
    ArrowRight,
    CheckCircle2,
    Code2,
    Database,
    ExternalLink,
    FlaskConical,
    GraduationCap,
    Laptop,
    Network,
    ShieldCheck,
    Sparkles,
} from "lucide-react"
import Image from "next/image"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

const areas = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    description:
      "Academic guidance for cybersecurity, risk, controls, governance, and secure system design.",
  },
  {
    icon: Code2,
    title: "Programming & IT",
    description:
      "Structured support across programming, software development, databases, and technical concepts.",
  },
  {
    icon: Database,
    title: "Databases & SQL",
    description:
      "Support with database concepts, SQL, data modelling, queries, and technical documentation.",
  },
  {
    icon: Network,
    title: "Networking & Infrastructure",
    description:
      "Guidance for networking, infrastructure, systems, architecture, and related technical work.",
  },
  {
    icon: FlaskConical,
    title: "Research & Methodology",
    description:
      "Help with research direction, methodology, literature reviews, data analysis, and academic structure.",
  },
  {
    icon: GraduationCap,
    title: "MBA & DBA Research",
    description:
      "Focused support for postgraduate research, dissertations, arguments, and thesis direction.",
  },
]

const benefits = [
  "Subject-focused academic guidance",
  "Technical and research expertise",
  "Support for complex academic projects",
  "Clear and structured communication",
  "Academic-integrity focused approach",
  "Accessible support for students and researchers",
]

export default function ProjectAssignmentsPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 -left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[160px]" />
          <div className="absolute bottom-0 -right-1/4 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[160px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/8 rounded-full blur-[180px]" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.025)_1px,transparent_1px)] bg-[size:80px_80px]" />

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_75%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Text */}
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
                <Sparkles className="w-4 h-4 text-primary" />
                <span>A New Academic Support Platform</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="mb-7"
              >
                <span className="block text-foreground text-shadow">
                  Meet
                </span>
                <span className="block gradient-text-animated mt-2">
                  ProjectAssignments
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
              >
                A dedicated platform for technical academic work, assignments,
                projects, research, and postgraduate support — built for
                students and researchers who need focused expertise.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  href="https://projectassignments.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-full shadow-premium hover:shadow-premium-lg transition-all duration-500 group"
                >
                  Visit ProjectAssignments
                  <ExternalLink className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.a>

                <motion.a
                  href="#what-we-cover"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-foreground glass-card rounded-full transition-all duration-500"
                >
                  Explore the Platform
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1,
                delay: 0.3,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="relative"
            >
              <div className="relative max-w-lg mx-auto">
                {/* Orbit */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 35,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-[-35px] rounded-full border border-dashed border-primary/15"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/30" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-secondary shadow-lg shadow-secondary/30" />
                </motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-[-75px] rounded-full border border-secondary/10"
                >
                  <div className="absolute right-[-2px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-secondary/60" />
                </motion.div>

                {/* Main Card */}
                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10"
                >
                  <div className="relative aspect-square rounded-[2rem] overflow-hidden glass-card shadow-premium-lg p-3">
                    <div className="relative h-full w-full rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
                      <Image
                        src="/images/academic-consulting-education.png"
                        alt="Academic consulting and education"
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 1024px) 90vw, 500px"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                    </div>
                  </div>
                </motion.div>

                {/* Floating Labels */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -left-4 sm:-left-8 top-12 z-20 glass-card rounded-2xl px-4 py-3 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <Laptop className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold">
                      Technical Support
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-4 sm:-right-8 bottom-12 z-20 glass-card rounded-2xl px-4 py-3 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-semibold">
                      Research Support
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="relative py-24 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              From Ph Test Consultants
            </span>

            <h2 className="mt-4 mb-6">
              A dedicated platform for{" "}
              <span className="gradient-text">technical academic work</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              ProjectAssignments was launched as a focused destination for
              students and researchers working on assignments, technical
              projects, research, dissertations, and related academic work.
              While Ph Test Consultants continues to provide broader
              consulting services, ProjectAssignments gives this area its own
              dedicated platform and identity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Cover */}
      <section
        id="what-we-cover"
        className="relative py-24 sm:py-28 bg-card/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              What ProjectAssignments Covers
            </span>

            <h2 className="mt-4 mb-5">
              Support for complex academic and{" "}
              <span className="gradient-text">technical work</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              The platform brings together academic guidance and technical
              expertise for students and researchers working across a range of
              disciplines.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {areas.map((area) => {
              const Icon = area.icon

              return (
                <motion.div
                  key={area.title}
                  variants={fadeInUp}
                  className="group glass-card rounded-2xl p-7 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-secondary/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {area.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Why ProjectAssignments */}
      <section className="relative py-24 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Why We Built It
              </span>

              <h2 className="mt-4 mb-6">
                One platform.{" "}
                <span className="gradient-text">
                  More focused academic support.
                </span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Academic and technical work often requires a different kind of
                expertise. ProjectAssignments was created to give students and
                researchers a dedicated place to find that support without
                having to navigate a broad consulting website.
              </p>

              <a
                href="https://projectassignments.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
              >
                Explore ProjectAssignments
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="glass-card rounded-3xl p-8 sm:p-10"
            >
              <div className="space-y-5">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-10 sm:p-14 text-center"
          >
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary mb-5">
              <Sparkles className="w-4 h-4" />
              Explore the new platform
            </span>

            <h2 className="mb-5">
              Ready to explore{" "}
              <span className="gradient-text">ProjectAssignments?</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-9 leading-relaxed">
              Visit the platform to explore its services, technical areas,
              resources, and academic support options.
            </p>

            <motion.a
              href="https://projectassignments.com/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-full shadow-premium hover:shadow-premium-lg transition-all duration-500"
            >
              Visit ProjectAssignments.com
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}