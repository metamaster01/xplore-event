"use client"

import { motion } from "framer-motion"
import { Sparkle } from "lucide-react"

const registrationTypes = ["Register now as Artist", "Promoter", "Club", "Influencer"]

export default function RegistrationBanner() {
  return (
    <div className="bg-primary py-4 overflow-hidden">
      <motion.div
        animate={{ x: [0, -1920] }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        className="flex items-center space-x-8 whitespace-nowrap"
      >
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex items-center space-x-12">
            {registrationTypes.map((type, index) => (
              <div key={`${i}-${index}`} className="flex items-center space-x-12">
                <span className="text-primary-foreground font-semibold text-2xl">{type}</span>
                <Sparkle className="w-8 h-8" />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
