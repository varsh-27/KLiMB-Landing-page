"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { JourneyTracker } from "@/components/journey-tracker"
import { QuizLauncher } from "@/components/quiz-launcher"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Navigation />
      <HeroSection />
      <JourneyTracker />
      <QuizLauncher />
      <Testimonials />
      <Footer />
    </div>
  )
}
