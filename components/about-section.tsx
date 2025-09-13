"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-gradient-to-br from-background via-background to-background relative overflow-hidden min-h-screen  "
    >
      <motion.div
        style={{ y, opacity }}
        className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-primary/20 via-primary/10 to-transparent blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]), opacity }}
        className="absolute bottom-0 right-20 w-64 h-64 bg-primary/30 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 md:px-36 h-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-start min-h-[600px]">
          {/* Left Content - Takes 4 columns */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="md:col-span-5 space-y-8"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-3xl font-bold mb-2"
              >
                ABOUT <span className="text-primary text-glow">XPLORE</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-muted-foreground mb-12 text-lg"
              >
Passion at the Core, Collaboration at the Heart              </motion.p>

              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-5xl font-bold mb-8 leading-tight"
              >
                WE DON'T JUST HOST EVENTS — WE BUILD <span className="text-primary">CULTURE.</span>
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-lg text-muted-foreground mb-12 leading-relaxed max-w-md"
              >
                Where creators connect, barter deals happen, and every collab fuels the scene.
              </motion.p>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-transparent border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-effect"
            >
              <span>More about us</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Middle Column - Vacant space (4 columns) */}
          <div className="hidden md:block md:col-span-2"></div>

          {/* Right Content - Takes 4 columns */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="md:col-span-5 space-y-8 relative z-10 mt-10 md:mt-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="pb-6 border-t-2 border-white">
                <p className="text-muted-foreground leading-relaxed text-lg pt-4">
                  We connect Artists, Influencers, Promoters, and Clubs under one digital roof — where performances and
                  promotions aren't just bought, but exchanged.
                </p>
              </div>

              <div className="pb-6 border-t-2 border-white">
                <p className="text-muted-foreground leading-relaxed text-lg pt-4">
                  Unlike traditional booking platforms, Xplore Event works as a trusted mediator, ensuring all
                  communication, deals, and revenue sharing happen securely through our system — without direct contact
                  or spam DMs.
                </p>
              </div>

              <div className="pb-6 border-t-2 border-white">
                <p className="text-muted-foreground leading-relaxed text-lg pt-4">
                  Whether you're a DJ looking for stage time, a club hosting the next viral night, or a promoter
                  planning a killer gig, Xplore lets you collab, trade value, and track success — all in one place.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
