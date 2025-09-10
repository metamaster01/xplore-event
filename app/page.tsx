"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import RegistrationBanner from "@/components/registration-banner"
import WhoAreYouSection from "@/components/who-are-you-section"
import AboutSection from "@/components/about-section"
import TestimonialSection from "@/components/testimonial-section"
// import GalleriesSection from "@/components/galleries-section"
// import ReviewsSection from "@/components/reviews-section"
import ContactSection from "@/components/contact-section"
// import Footer from "@/components/footer"

export default function HomePage() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    }

    document.addEventListener("click", handleSmoothScroll)
    return () => document.removeEventListener("click", handleSmoothScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <RegistrationBanner />
        <WhoAreYouSection />
        <AboutSection />
        <TestimonialSection />
        {/* <GalleriesSection /> */}
        {/* <ReviewsSection /> */}
        <ContactSection />
      </main>
      {/* <Footer /> */}
    </div>
  )
}
