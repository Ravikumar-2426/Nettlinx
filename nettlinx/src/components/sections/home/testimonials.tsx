"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function TestimonialsSection() {
  const clientLogos = [
    "TG Govt",
    "AP Govt",
    "HITEC City",
    "TechMahindra",
    "Infosys",
    "UoH",
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50/20 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center space-y-6 mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight"
          >
            <span className="gradient-text-premium text-4xl lg:text-6xl font-black">
              Trusted by
            </span>
            <span className="block text-gray-800">Industry Leaders</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            See how enterprises and government organizations rely on Nettlinx for mission-critical
            connectivity and digital infrastructure.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full glass-premium rounded-3xl border border-white/20 hover:border-white/40 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex space-x-1 text-secondary">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>

                    <blockquote className="text-gray-700 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logos Carousel */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-center text-lg font-semibold text-gray-600 mb-8">
            Trusted by 10,000+ Organizations
          </h3>
          
          <div className="overflow-hidden relative w-full">
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
            
            <motion.div
              className="flex gap-8 whitespace-nowrap"
              animate={{
                x: [0, -100 * clientLogos.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear"
                }
              }}
              style={{ width: `${clientLogos.length * 200}px` }}
            >
              {/* Duplicate logos for seamless infinite scroll */}
              {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
                <motion.div
                  key={`${logo}-${index}`}
                  className="flex-shrink-0 w-48 h-16 bg-gray-100 rounded-xl flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 shadow-sm hover:shadow-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-gray-500 font-semibold text-center px-4">
                    {logo}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
