"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const { error } = await supabase.from("contact").insert([formData])

      if (error) throw error

      setSubmitStatus("success")
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Images positioned around central purple section */}
        <div className="relative mb-16">
          {/* Top left image */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 left-0 w-32 h-40 md:w-40 md:h-48 rounded-2xl overflow-hidden"
          >
            <img src="/contact-1.png" alt="DJ Artist" className="w-full h-full object-cover" />
          </motion.div>

          {/* Top right image */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-0 right-0 w-32 h-40 md:w-40 md:h-48 rounded-2xl overflow-hidden"
          >
            <img src="/contact-2.png" alt="DJ Performance" className="w-full h-full object-cover" />
          </motion.div>

          {/* Bottom left image */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute bottom-0 left-0 w-32 h-40 md:w-40 md:h-48 rounded-2xl overflow-hidden"
          >
            <img src="/contact-3.png" alt="Artist Portrait" className="w-full h-full object-cover" />
          </motion.div>

          {/* Bottom right image */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-0 right-0 w-32 h-40 md:w-40 md:h-48 rounded-2xl overflow-hidden"
          >
            <img src="/contact-4.png" alt="Concert Crowd" className="w-full h-full object-cover" />
          </motion.div>

          {/* Central purple section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mx-auto max-w-2xl h-64 md:h-80 bg-gradient-to-br from-primary via-purple-600 to-primary rounded-3xl flex flex-col items-center justify-center text-center px-8 relative z-10"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 text-balance">
              LET'S CHAT ABOUT WORKING TOGETHER
            </h2>
            <Button
              variant="secondary"
              className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm"
            >
              Get in touch
            </Button>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Three fields in a row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-white/70 text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/50 py-3 focus:border-primary focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/50 py-3 focus:border-primary focus:outline-none transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">Phone number (optional)</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 234 567 890"
                  className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/50 py-3 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Message textarea */}
            <div>
              <label className="block text-white/70 text-sm mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows={6}
                className="w-full bg-transparent border-b border-white/30 text-white placeholder-white/50 py-3 focus:border-primary focus:outline-none transition-colors resize-none"
                required
              />
            </div>

            {/* Submit button */}
            <div className="flex justify-start">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Leave us a Message →"}
              </Button>
            </div>

            {/* Status messages */}
            {submitStatus === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 text-center"
              >
                Message sent successfully! We'll get back to you soon.
              </motion.p>
            )}
            {submitStatus === "error" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-center"
              >
                Failed to send message. Please try again.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
