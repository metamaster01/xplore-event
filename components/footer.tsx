"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary via-purple-600 to-primary relative overflow-hidden">
      {/* MAIN: content container */}
      <div className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              NO LOGINS. NO SPAM. JUST VIBES.{" "}
              <span className="text-black">COLLAB WITH CULTURE.</span>
            </h2>
          </motion.div>

          {/* ===== SMALL SCREEN (mobile -> sm): 2 columns
                left: contact
                right: Quick Links + Connect stacked
                This block is visible on sm and below (sm:block md:hidden) */}
          <div className="sm:block md:hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Contact - left */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  Don't Be Shy Let's Talk
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-white/80 mb-2">Pick up the phone</p>
                    <Link
                      href="tel:+919529770498"
                      className="text-white hover:text-black transition-colors"
                    >
                      +91 95297 70498
                    </Link>
                  </div>
                  <div>
                    <p className="text-white/80 mb-2">Send some fan email</p>
                    <Link
                      href="mailto:hello@xplore.com"
                      className="text-white hover:text-black transition-colors"
                    >
                      hello@xplore.com
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Combined Quick Links + Connect - right column on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col-2  items-center text-center"
              >
                {/* Quick Links */}
                <div className="mb-6 w-full">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Quick Links
                  </h3>
                  <div className="space-y-2">
                    <Link
                      href="#home"
                      className="block text-white/80 hover:text-white transition-colors"
                    >
                      Home
                    </Link>
                    <Link
                      href="#who-are-you"
                      className="block text-white/80 hover:text-white transition-colors"
                    >
                      Who are you
                    </Link>
                    <Link
                      href="#about"
                      className="block text-white/80 hover:text-white transition-colors"
                    >
                      About us
                    </Link>
                    <Link
                      href="#galleries"
                      className="block text-white/80 hover:text-white transition-colors"
                    >
                      Gallery
                    </Link>
                    <Link
                      href="#contact"
                      className="block text-white/80 hover:text-white transition-colors"
                    >
                      Contact us
                    </Link>
                  </div>
                </div>

                {/* Connect */}
                <div className="w-full">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Connect
                  </h3>
                  <div className="space-y-2">
                    <Link
                      href="#"
                      className="block text-white/80 hover:text-white transition-colors"
                    >
                      Instagram
                    </Link>
                    <Link
                      href="#"
                      className="block text-white/80 hover:text-white transition-colors"
                    >
                      Twitter
                    </Link>
                    <Link
                      href="#"
                      className="block text-white/80 hover:text-white transition-colors"
                    >
                      Linkedin
                    </Link>
                    <Link
                      href="#"
                      className="block text-white/80 hover:text-white transition-colors"
                    >
                      Facebook
                    </Link>
                    <Link
                      href="#"
                      className="block text-white/80 hover:text-white transition-colors"
                    >
                      Facebook
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ===== DESKTOP / MD+ layout: 3 columns (separate columns) */}
          <div className="hidden md:grid md:grid-cols-3 gap-12">
            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Don't Be Shy Let's Talk
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white/80 mb-2">Pick up the phone</p>
                  <Link
                    href="tel:+919529770498"
                    className="text-white hover:text-black transition-colors"
                  >
+91 99758 20649                  </Link>
                </div>
                <div>
                  <p className="text-white/80 mb-2">Send some fan email</p>
                  <Link
                    href="mailto:hello@xplore.com"
                    className="text-white hover:text-black transition-colors"
                  >
                    contact@xplore.com
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Quick Links
              </h3>
              <div className="space-y-3">
                <Link
                  href="#home"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="#who-are-you"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Who are you
                </Link>
                <Link
                  href="#about"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  About us
                </Link>
                <Link
                  href="#galleries"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Gallery
                </Link>
                <Link
                  href="#contact"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Contact us
                </Link>
              </div>
            </motion.div>

            {/* Connect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Connect</h3>
              <div className="space-y-3">
                <Link
                  href="#"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Instagram
                </Link>
                <Link
                  href="#"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Twitter
                </Link>
                <Link
                  href="#"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Linkedin
                </Link>
                <Link
                  href="#"
                  className="block text-white/80 hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ===== Bottom Image - Desktop Only (now in its own area, non-overlapping) */}
      <div className="hidden lg:block">
        <motion.div
          className="max-w-7xl mx-auto mt-4 mb-8 relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative h-[497px] w-full">
            <Image
              src="/footer-image.png"
              alt="Person dancing with light trails"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            {/* subtle gradient top so it blends into footer above */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>

      {/* Background effects (kept behind everything) */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-primary/20 via-transparent to-purple-600/20" />
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_50%)]" />
    </footer>
  );
}
