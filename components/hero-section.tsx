"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Play, Pause, Volume2, VolumeX, ArrowRight } from "lucide-react"

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setIsLoading(false)
    }

    const handleError = () => {
      setIsLoading(false)
      console.log("[v0] Video failed to load, using fallback")
    }

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    video.addEventListener("canplay", handleCanPlay)
    video.addEventListener("error", handleError)
    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)

    return () => {
      video.removeEventListener("canplay", handleCanPlay)
      video.removeEventListener("error", handleError)
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
    }
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play().catch((error) => {
        console.log("[v0] Play failed:", error)
      })
    }
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return

    video.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        {isLoading && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full"
            />
          </div>
        )}

        <video ref={videoRef} className="w-full h-full object-cover" autoPlay loop muted playsInline preload="auto">
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-primary/20 to-black/80 video-overlay" />
      </div>

      {/* Video Controls */}
      <div className="absolute top-24 right-6 flex flex-col space-y-2 z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={togglePlay}
          className="p-3 rounded-full bg-black/50 backdrop-blur-sm border border-primary/30 hover:bg-primary/20 transition-all duration-300"
        >
          {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleMute}
          className="p-3 rounded-full bg-black/50 backdrop-blur-sm border border-primary/30 hover:bg-primary/20 transition-all duration-300"
        >
          {isMuted ? <VolumeX className="w-5 h-5 text-white" /> : <Volume2 className="w-5 h-5 text-white" />}
        </motion.button>
      </div>

      <div className="relative z-10 h-full flex items-center px-6 lg:px-12">
        <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
          {/* Left Side - Main Title */}
          <div className="flex-1 max-w-4xl">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-24 text-glow leading-tight"
            >
              XPLORE COLLABS. <span className="text-primary block">BUILD CULTURE.</span>{" "}
              <span className="text-accent block">PERFORM TOGETHER.</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="hidden lg:block absolute bottom-12 right-12 max-w-sm"
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <p className="text-gray-800 text-lg mb-6 leading-relaxed">
                We connect your event to the right audiences through media, influencers, and unforgettable experiences.
              </p>

              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 group"
              >
                Let's Collaborate
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="lg:hidden absolute bottom-8 left-6 right-6 z-10"
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
          <p className="text-gray-800 text-base mb-4 leading-relaxed">
            We connect your event to the right audiences through media, influencers, and unforgettable experiences.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 group w-full justify-center"
          >
            Let's Collaborate
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:bottom-12"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
