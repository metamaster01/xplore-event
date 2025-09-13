"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const galleryImages = [
  { id: 1, src: "/gallery-1.png", alt: "DJ performing with purple neon lights", span: "col-span-1 row-span-1" },
  {
    id: 2,
    src: "/gallery-2.png",
    alt: "Concert crowd with hands raised",
    span: "col-span-1 row-span-1",
    isPurple: true,
  },
  { id: 3, src: "/gallery-3.png", alt: "DJ mixing with warm lighting", span: "col-span-1 row-span-1" },
  { id: 4, src: "/gallery-4.png", alt: "Female DJ with headphones", span: "col-span-1 row-span-1" },
  { id: 5, src: "/gallery-5.png", alt: "Large concert venue silhouette", span: "col-span-2 row-span-2" },
  { id: 6, src: "/gallery-6.png", alt: "Colorful geometric stage lighting", span: "col-span-1 row-span-1" },
  { id: 7, src: "/gallery-7.png", alt: "Outdoor festival sunset", span: "col-span-1 row-span-1" },
  { id: 8, src: "/gallery-8.png", alt: "Underground tunnel concert", span: "col-span-2 row-span-1" },
  { id: 9, src: "/gallery-9.png", alt: "DJ booth with purple lighting", span: "col-span-1 row-span-1" },
  { id: 10, src: "/gallery-10.png", alt: "Bright white stage lights", span: "col-span-1 row-span-1" },
  { id: 11, src: "/gallery-11.png", alt: "Blue electronic music concert", span: "col-span-1 row-span-1" },
  { id: 12, src: "/gallery-2.png", alt: "Blue electronic music concert", span: "col-span-1 row-span-1" },
]

export default function GallerySection() {
  return (
    <section className="py-20 px-4 bg-black " id="galleries">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <motion.h2
              className="text-6xl md:text-8xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              GALLERIES
            </motion.h2>
            <motion.p
              className="text-gray-400 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Stay in the loop with:
            </motion.p>
          </div>

          <motion.button
            className="flex items-center gap-2 text-white hover:text-primary transition-colors group"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
          >
            <span className="text-lg">SEE ALL</span>
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
          </motion.button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className={`${image.span} relative overflow-hidden rounded-2xl border-2 border-gray-800 hover:border-primary/50 transition-all duration-500 group cursor-pointer`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {image.isPurple ? (
                // Purple "CAPTURED MOMENTS" card
                <div className="w-full h-full bg-gradient-to-br from-primary to-purple-600 flex flex-col justify-center items-center p-6 text-center rounded-xl">
                  <motion.h3
                    className="text-white text-2xl md:text-3xl font-bold leading-tight"
                    whileHover={{ scale: 1.05 }}
                  >
                    CAPTURED
                    <br />
                    MOMENTS
                  </motion.h3>
                </div>
              ) : (
                // Image card
                <>
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 p-4 rounded-xl"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl shadow-lg group-hover:shadow-primary/20 group-hover:shadow-2xl transition-shadow duration-500" />
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
