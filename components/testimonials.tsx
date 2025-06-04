"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah M.",
    title: "Parent of 8-year-old Emma",
    quote:
      "KLIMB helped us discover that Emma has a natural talent for gymnastics. She's now thriving at her local academy and loves every minute of it!",
    sport: "Gymnastics",
    rating: 5,
    avatar: "👩‍💼",
  },
  {
    name: "Michael R.",
    title: "Parent of 10-year-old Jake",
    quote:
      "The assessment was so thorough and fun. Jake was matched with swimming, and he's already broken several records at his age group!",
    sport: "Swimming",
    rating: 5,
    avatar: "👨‍💻",
  },
  {
    name: "Lisa K.",
    title: "Parent of 7-year-old Mia",
    quote: "We never would have thought of tennis for Mia, but KLIMB's recommendations were spot on. She's a natural!",
    sport: "Tennis",
    rating: 5,
    avatar: "👩‍🏫",
  },
  {
    name: "David L.",
    title: "Parent of 9-year-old Alex",
    quote:
      "The journey tracker helped us stay motivated throughout Alex's development. He's now playing competitive soccer!",
    sport: "Soccer",
    rating: 5,
    avatar: "👨‍⚕️",
  },
  {
    name: "Jennifer W.",
    title: "Parent of 11-year-old Sophie",
    quote:
      "KLIMB made the whole process enjoyable for our family. Sophie found her passion in basketball and couldn't be happier!",
    sport: "Basketball",
    rating: 5,
    avatar: "👩‍🎨",
  },
]

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"])

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Happy Families
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how KLIMB has helped children discover their sporting potential
          </p>
        </motion.div>

        <div ref={containerRef} className="relative">
          <motion.div className="flex space-x-6 pb-8" style={{ x }}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full relative">
                  <Quote className="absolute top-4 right-4 text-purple-200" size={32} />

                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>

                  {/* Author */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-2xl mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                      <div className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium mt-2">
                        Matched with {testimonial.sport}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-8">
          <motion.div
            className="text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Scroll to see more stories →
          </motion.div>
        </div>
      </div>
    </section>
  )
}
