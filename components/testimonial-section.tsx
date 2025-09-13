"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "DJ ALEX",
    role: "ARTIST",
    image: "/testimonial-1.png",
    text: "Didn't expect my first gig to happen through a barter. Xplore made it smooth & legit",
  },
  {
    id: 2,
    name: "DJ SARAH",
    role: "ARTIST",
    image: "/testimonial-1.png",
    text: "Amazing platform that connects artists with venues. The booking process is seamless and professional",
  },
  {
    id: 3,
    name: "DJ MIKE",
    role: "PROMOTER",
    image: "/testimonial-1.png",
    text: "Xplore revolutionized how I book talent. Direct communication and fair deals every time",
  },
  {
    id: 4,
    name: "DJ LUNA",
    role: "ARTIST",
    image: "/testimonial-1.png",
    text: "Found my regular venue through Xplore. The platform builds real relationships in the industry",
  },
  {
    id: 5,
    name: "DJ CARLOS",
    role: "CLUB OWNER",
    image: "/testimonial-1.png",
    text: "Best platform for discovering new talent. Xplore helps us book amazing artists consistently",
  },
]

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }

  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden" id="testimonials">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-purple-900/20" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">RAVE REVIEWS</h2>
            <p className="text-gray-400 text-lg">Their words, not ours</p>
          </div>

          {/* Navigation arrows */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full border border-purple-500/30 hover:border-purple-400 transition-colors group"
            >
              <ChevronLeft className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full border border-purple-500/30 hover:border-purple-400 transition-colors group"
            >
              <ChevronRight className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="relative">
          {/* Desktop view - 3 cards */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {getVisibleTestimonials().map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${currentIndex}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 relative overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent rounded-3xl" />

                  <div className="relative z-10">
                    {/* Profile */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-purple-300/50">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg">{testimonial.name}</h3>
                        <p className="text-purple-200 text-sm">{testimonial.role}</p>
                      </div>
                    </div>

                    {/* Testimonial text */}
                    <p className="text-white/90 leading-relaxed">{testimonial.text}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile view - 1 card */}
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 relative overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent rounded-3xl" />

                <div className="relative z-10">
                  {/* Profile */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-purple-300/50">
                      <Image
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{testimonials[currentIndex].name}</h3>
                      <p className="text-purple-200 text-sm">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>

                  {/* Testimonial text */}
                  <p className="text-white/90 leading-relaxed">{testimonials[currentIndex].text}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mobile navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full border border-purple-500/30 hover:border-purple-400 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-purple-400" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full border border-purple-500/30 hover:border-purple-400 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-purple-400" />
              </button>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-purple-400" : "bg-purple-400/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
