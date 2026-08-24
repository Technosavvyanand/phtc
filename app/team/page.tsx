"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const team = [
  {
    name: "Prabhat Anand",
    title: "The Systems Architect & Scale Engine",
    focus: "Technology · Operations · Delivery · Scale · Finance",
    image: "/images/prabhat.png",
    number: "01",
    accent: "from-primary/30 via-primary/10 to-transparent",
    description:
      "Over the past decade, Prabhat has bridged the gaps between technology, operations, and leadership. With hands-on experience spanning technical roles, talent acquisition, client management, and business operations, he holds an end-to-end view of how organizations actually run. Powered by a background in Computer Science, Prabhat skips the corporate buzzwords to focus on pragmatic impact—leveraging AI, data, and automation to streamline decision-making and build systems designed for real-world growth.",
  },
  {
    name: "Harshit Sinha",
    title: "The Growth & People Catalyst",
    focus: "Sales · Marketing · HR · Finance",
    image: "/images/harshit.png",
    number: "02",
    accent: "from-secondary/30 via-secondary/10 to-transparent",
    description:
      "Backed by a strong commerce foundation and 6 years of hands-on industry experience, Harshit manages the core levers of business expansion and culture. He connects outer market presence with inner organizational health—balancing sales velocity and marketing strategies alongside talent management and financial discipline to keep the growth engine humming.",
  },
  {
    name: "Vinay Kumar",
    title: "The Strategic Compass & Decision Architect",
    focus: "Cross-Departmental Strategy · Insight · Core Decision-Making",
    image: "/images/vinay.png",
    number: "03",
    accent: "from-primary/25 via-secondary/10 to-transparent",
    description:
      "A Mechanical Engineer by training and an entrepreneur by heart, Vinay serves as the central decision-making engine. He applies an engineer's structural problem-solving mindset to business strategy, providing critical insights across every department to ensure strategy translates into operational alignment.",
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[160px]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[180px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.018)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      {/* Header */}
      <header className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Ph Test Consultants
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card text-sm font-medium text-muted-foreground mb-8"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            The People Behind the Vision
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-foreground text-shadow"
          >
            Meet the Minds Behind{" "}
            <span className="gradient-text-animated">
              Ph Test Consultants
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Three distinct disciplines—Technology, Commerce, and Engineering—
            converging to build systems that scale.
          </motion.p>
        </div>
      </section>

      {/* Team */}
      <section className="relative z-10 pb-24 sm:pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`relative overflow-hidden rounded-[2rem] border border-border/50 glass-card p-6 sm:p-8 lg:p-12 ${
                index % 2 === 1 ? "lg:ml-12" : "lg:mr-12"
              }`}
            >
              {/* Decorative glow */}
              <div
                className={`absolute -top-32 ${
                  index % 2 === 0 ? "-left-32" : "-right-32"
                } w-80 h-80 rounded-full bg-gradient-to-br ${member.accent} blur-3xl pointer-events-none`}
              />

              <div
                className={`relative grid lg:grid-cols-[300px_1fr] gap-10 lg:gap-14 items-center ${
                  index % 2 === 1 ? "lg:grid-cols-[1fr_300px]" : ""
                }`}
              >
                {/* Portrait */}
                <div
                  className={`flex justify-center ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative">
                    {/* Outer orbit */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute -inset-5 rounded-full border border-dashed border-primary/15"
                    >
                      <div className="absolute top-1/2 -left-1.5 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/30" />
                    </motion.div>

                    {/* Secondary circle */}
                    <div className="absolute -inset-2 rounded-full border border-secondary/15" />

                    {/* Portrait background */}
                    <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full p-2 bg-gradient-to-br from-primary/40 via-secondary/20 to-primary/5 shadow-premium-lg">
                      <div className="relative w-full h-full rounded-full overflow-hidden bg-card border border-border/50">
                        <Image
                          src={member.image}
                          alt={`${member.name} - ${member.title}`}
                          width={256}
                          height={256}
                          className="w-full h-full object-cover"
                          priority={index === 0}
                        />
                      </div>
                    </div>

                    {/* Number */}
                    <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-full glass-card border border-border/60 flex items-center justify-center">
                      <span className="text-sm font-bold gradient-text">
                        {member.number}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`text-center lg:text-left ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">
                    {member.focus}
                  </p>

                  <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                    {member.name}
                  </h2>

                  <h3 className="text-lg sm:text-xl font-medium gradient-text mb-6">
                    {member.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                    {member.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Collective Formula */}
      <section className="relative z-10 py-24 sm:py-32 border-t border-border/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">
              Our Collective Formula
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Different disciplines.
              <span className="block gradient-text-animated mt-2">
                One operating vision.
              </span>
            </h2>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Technology, commerce, and engineering come together to turn
              ideas into systems that work—and businesses that can grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -6 }}
              className="glass-card rounded-3xl p-8 border border-border/50"
            >
              <span className="text-5xl font-bold text-primary/20">01</span>
              <h3 className="text-xl font-bold mt-5 mb-3 text-foreground">
                Prabhat builds the framework.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Technology, automation, operations, and scalable systems form
                the foundation for sustainable growth.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="glass-card rounded-3xl p-8 border border-border/50"
            >
              <span className="text-5xl font-bold text-secondary/20">02</span>
              <h3 className="text-xl font-bold mt-5 mb-3 text-foreground">
                Harshit fuels the growth.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                People, market presence, capital, and organizational alignment
                keep the growth engine moving.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="glass-card rounded-3xl p-8 border border-border/50"
            >
              <span className="text-5xl font-bold text-primary/20">03</span>
              <h3 className="text-xl font-bold mt-5 mb-3 text-foreground">
                Vinay guides the direction.
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Engineering thinking, structural problem-solving, and strategic
                decisions keep the organization aligned.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative z-10 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="glass-card rounded-[2rem] border border-border/50 p-10 sm:p-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Let's build something that works.
            </h2>

            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether you are solving a complex problem, scaling an operation,
              or building something new, our combined perspective helps turn
              challenges into practical solutions.
            </p>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8"
            >
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-full shadow-premium hover:shadow-premium-lg transition-all duration-500"
              >
                Work With Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer link back */}
      <div className="relative z-10 pb-12 text-center">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Return to Ph Test Consultants
        </Link>
      </div>
    </main>
  )
}