"use client";

import { motion } from "framer-motion";
import {
  Infinity,
  Globe2,
  Zap,
  Unlock,
  ArrowRight,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const features = [
  {
    icon: Infinity,
    title: "Unlimited",
    description: "No data caps — enjoy truly unlimited browsing and streaming.",
  },
  {
    icon: Unlock,
    title: "Unrestricted",
    description: "No throttling or restrictions. Full bandwidth, always.",
  },
  {
    icon: Globe2,
    title: "Unparalleled",
    description: "Top-tier optical fiber network across Telangana & AP.",
  },
  {
    icon: Zap,
    title: "Super Fast",
    description: "Lightning-speed fiber for seamless work, play, and calls.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-extrabold text-white mb-4"
          >
            Why Choose Nettlinx?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-blue-100 max-w-3xl mx-auto"
          >
            Experience unmatched fiber connectivity with Nettlinx — designed for performance, scalability, and reliability across all of Telangana & Andhra Pradesh.
          </motion.p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center transition-transform hover:scale-105 hover:shadow-xl"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-blue-100">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <a
            href="/services#isp"
            className="inline-flex items-center justify-center bg-white text-blue-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-blue-100 transition"
          >
            Explore Our Fiber Plans
            <ArrowRight className="ml-3 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
