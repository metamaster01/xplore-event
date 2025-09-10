"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Play, Pause } from "lucide-react"
import Link from "next/link"

const userTypes = [
  {
    title: "Register as Artists",
    video: "/artist.mp4",
    link: "/register/artist",
    description: "Showcase your talent and connect with venues",
    position: "top-12 left-0",
    size: "w-44 h-[500px]",
  },
  {
    title: "Register as Clubs",
    video: "/clubs.mp4",
    link: "/register/club",
    description: "Find the perfect artists for your venue",
    position: "top-0 left-48",
    size: "w-44 h-[580px]",
  },
  {
    title: "Register as Promoters",
    video: "/promoter.mp4",
    link: "/register/promoter",
    description: "Organize unforgettable events",
    position: "top-16 left-96",
    size: "w-44 h-[520px]",
  },
  {
    title: "Register as Influencers",
    video: "/influencer.mp4",
    link: "/register/influencer",
    description: "Amplify events to your audience",
    position: "top-8 left-[36rem]",
    size: "w-44 h-[480px]",
  },
]

interface VideoCardProps {
  userType: (typeof userTypes)[0]
  index: number
}

function VideoCard({ userType, index }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`absolute ${userType.position} ${userType.size}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-full rounded-[6rem] overflow-hidden group cursor-pointer neon-border">
        <video ref={videoRef} className="w-full h-full object-cover" loop muted playsInline>
          <source src={userType.video} type="video/mp4" />
        </video>

        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-black/60 backdrop-blur-sm px-2 py-2 rounded-lg border border-primary/30">
            <span className="text-white text-sm font-medium justify-center text-center">{userType.title}</span>
          </div>
        </div>

        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-all duration-500 ${
            isHovered ? "opacity-90" : "opacity-60"
          }`}
        />

        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20,
            }}
            className="text-white/80 text-sm mb-6 text-center"
          >
            {userType.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8,
            }}
            className="flex flex-col items-center space-y-4"
          >
            <Link
              href={userType.link}
              className="flex items-center space-x-2 bg-primary/80 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium hover:bg-primary transition-all duration-300 glow-effect text-sm"
            >
              <span>Join Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="p-2 bg-black/50 backdrop-blur-sm rounded-full">
              {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function WhoAreYouSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="who-are-you" ref={ref} className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-8xl lg:text-9xl font-black leading-none mb-6"
              >
                WHO ARE <span className="text-primary text-glow block">YOU?</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-base text-muted-foreground font-medium">
                Register now as a Artists | Clubs | Promoters | Influencers
              </p>

              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-white leading-tight">
                  YOUR VIBE. THEIR VENUE. <span className="text-primary text-glow">ONE PLATFORM.</span>
                </h3>

                <p className="text-primary font-bold text-2xl text-glow">REGISTER NOW.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Video Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-7 relative h-[650px] hidden lg:block"
          >
            {userTypes.map((userType, index) => (
              <VideoCard key={userType.title} userType={userType} index={index} />
            ))}
          </motion.div>

          {/* Mobile Grid */}
          <div className="lg:hidden col-span-full grid grid-cols-2 gap-6 mt-12">
            {userTypes.map((userType, index) => (
              <motion.div
                key={userType.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative h-64 rounded-[2rem] overflow-hidden neon-border"
              >
                <video className="w-full h-full object-cover" loop muted playsInline autoPlay>
                  <source src={userType.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h4 className="text-white font-bold text-lg mb-3 text-glow">{userType.title}</h4>
                  <Link
                    href={userType.link}
                    className="inline-flex items-center space-x-2 bg-primary/80 px-4 py-2 rounded-full text-white text-sm font-medium hover:bg-primary transition-all duration-300 glow-effect"
                  >
                    <span>Join Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
