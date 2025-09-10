"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const menuItems = [
  { name: "Home", href: "#home" },
  { name: "Who Are You", href: "#who-are-you" },
  { name: "About Us", href: "#about" },
  { name: "Galleries", href: "#galleries" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact Us", href: "#contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20 px-6 sm:px-2 lg:px-6"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Xplore Logo" width={110} height={90} className="rounded-lg" />
            {/* <span className="text-2xl font-bold text-glow">
              X<span className="text-primary">plore</span>
            </span> */}
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(true)}
            className="p-3 rounded-lg bg-primary/20 border border-primary/30 hover:bg-primary/30 transition-all duration-300 glow-effect"
          >
            <Menu className="w-6 h-6 text-primary" />
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-card border-l border-primary/30 z-50 shadow-2xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xl font-bold text-glow">Menu</span>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg bg-primary/20 border border-primary/30 hover:bg-primary/30 transition-all duration-300"
                  >
                    <X className="w-5 h-5 text-primary" />
                  </motion.button>
                </div>

                <nav className="space-y-4">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="group flex items-center justify-between p-4 rounded-lg bg-muted/50 border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                      >
                        <span className="text-lg font-medium group-hover:text-primary transition-colors">
                          {item.name}
                        </span>
                        <ArrowRight className="w-5 h-5 text-primary/60 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-8 p-4 rounded-lg bg-primary/10 border border-primary/30">
                  <p className="text-sm text-muted-foreground mb-3">Ready to join the vibe?</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 glow-effect"
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
