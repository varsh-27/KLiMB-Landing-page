"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Search, ClipboardList, Trophy, MapPin, TrendingUp } from "lucide-react"

const journeySteps = [
  {
    step: 1,
    title: "Discover KLIMB",
    description: "Learn about our unique approach to sports talent identification",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
  },
  {
    step: 2,
    title: "Take the Quiz",
    description: "Complete our fun, interactive assessment with your child",
    icon: ClipboardList,
    color: "from-purple-500 to-pink-500",
  },
  {
    step: 3,
    title: "Reveal Your Sport Matches",
    description: "Get personalized sport recommendations based on your results",
    icon: Trophy,
    color: "from-orange-500 to-red-500",
  },
  {
    step: 4,
    title: "Visit an Academy",
    description: "Connect with local sports academies and coaches",
    icon: MapPin,
    color: "from-green-500 to-emerald-500",
  },
  {
    step: 5,
    title: "Track Your Progress",
    description: "Monitor your child's development and achievements",
    icon: TrendingUp,
    color: "from-indigo-500 to-purple-500",
  },
]

export function JourneyTracker() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])

  return (
    <section id="journey" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Your Journey with KLIMB
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to discover your child's perfect sport match
          </p>
        </motion.div>

        <div ref={containerRef} className="relative">
          <motion.div className="flex space-x-8 pb-8" style={{ x }}>
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="flex-shrink-0 w-80"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-lg mr-4`}
                    >
                      {step.step}
                    </div>
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white`}
                    >
                      <step.icon size={24} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-8">
          <motion.div
            className="flex space-x-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-gray-500 text-sm">Scroll to explore →</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
