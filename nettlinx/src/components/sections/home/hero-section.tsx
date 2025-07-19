"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { Globe, Wifi, Shield, Cloud, ArrowRight, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SplineScene } from "@/components/ui/splite";
import { Globe as InteractiveGlobe } from "@/components/ui/globe";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { COMPANY_INFO, STATS } from "@/lib/constants";
import { fadeInUp, slideInLeft, slideInRight, counterAnimation } from "@/lib/animations";

export default function HeroSection() {
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  const floatingElements = [
    { icon: Wifi, text: "100+ Gbps", delay: 0 },
    { icon: Shield, text: "AI Security", delay: 1 },
    { icon: Cloud, text: "Cloud Solutions", delay: 2 },
  ];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-background to-primary/5 overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 20% 80%, rgba(25, 76, 178, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 142, 0, 0.1) 0%, transparent 50%),
          linear-gradient(135deg, hsl(212, 100%, 97%) 0%, hsl(220, 75%, 40%, 0.05) 100%)
        `
      }}
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -5, 0],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Glowing spark style */}
            <radialGradient id="sparkGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ff8e00" stopOpacity="1" />
              <stop offset="100%" stopColor="#ff8e00" stopOpacity="0" />
            </radialGradient>
          </defs>

          <g>
            {/* Nodes */}
            {[
              { x: 200, y: 150, size: 3 },
              { x: 400, y: 200, size: 4 },
              { x: 600, y: 100, size: 3 },
              { x: 800, y: 250, size: 4 },
              { x: 1000, y: 180, size: 3 },
            ].map((node, i) => (
              <circle
                key={i}
                cx={node.x}
                cy={node.y}
                r={node.size}
                fill={i % 2 === 0 ? "#194cb2" : "#ff8e00"}
                opacity="0.6"
              />
            ))}

            {/* Paths + Spark animation */}
            {[
              "M200,150 Q300,100 400,200",
              "M400,200 Q500,120 600,100",
              "M600,100 Q700,150 800,250",
              "M800,250 Q900,200 1000,180",
            ].map((path, i) => (
              <g key={i}>
                {/* Static path line */}
                <path
                  id={`path${i}`}
                  d={path}
                  stroke="#194cb2"
                  strokeWidth="1"
                  fill="none"
                  opacity="0.3"
                />

                {/* Spark that travels along the path */}
                <circle r="4" fill="url(#sparkGlow)">
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    rotate="auto"
                    keyPoints="0;1"
                    keyTimes="0;1"
                    begin={`${i * 0.5}s`} 
                  >
                    <mpath href={`#path${i}`} />
                  </animateMotion>
                </circle>
              </g>
            ))}
          </g>
        </svg>
      </div>


      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-6 lg:space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-primary text-sm font-medium">
                Since {COMPANY_INFO.founded} • {STATS.yearsExperience}+ Years of Excellence
              </span>
            </motion.div>

            {/* Main Headline with Proper Spacing */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-gray-900">
                <span className="block mb-2">Accelerating</span>
                <span className="block text-primary mb-2">India's Digital</span>
                <span className="block">Infrastructure</span>
              </h1>
            </div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Empowering enterprises and government bodies across Telangana & Andhra Pradesh with{" "}
              <span className="text-secondary font-medium">converged network services</span>, AI-driven
              solutions, and enterprise-grade infrastructure.
            </motion.p>

            {/* Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="group relative bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <span className="flex items-center">
                  Explore Solutions
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="group border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                Watch Demo
              </Button> */}
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6"
            >
              {[
                { value: `${STATS.yearsExperience}+`, label: "Years Experience" },
                { value: `${STATS.customers.toLocaleString()}+`, label: "Customers" },
                { value: `${STATS.gbpsDeployed}+`, label: "Gbps Deployed" },
                { value: `${STATS.pops}+`, label: "POPs" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Visualization */}
          <motion.div
            variants={slideInRight}
            initial="initial"
            animate="animate"
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg h-96 lg:h-[500px]">
              {/* Premium 3D Scene Container */}
              {/* <div className="absolute inset-0 glass-premium rounded-3xl border border-white/30 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-orange-500/10"></div>
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div> */}

              {/* Interactive Globe with Enhanced Styling */}
              <div className="absolute inset-0 opacity-90 pointer-events-none">
                <InteractiveGlobe className="w-full h-full" />
              </div>

              {/* Glowing Ring Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br from-blue-500/30 via-transparent to-orange-500/30 animate-pulse-slow"></div>

              {/* Premium Floating UI Elements */}
              {floatingElements.map((element, i) => (
                <motion.div
                  key={i}
                  className="absolute glass-premium rounded-2xl p-4 shadow-2xl border border-white/30"
                  style={{
                    top: `${20 + i * 25}%`,
                    left: i % 2 === 0 ? "-8%" : "auto",
                    right: i % 2 === 1 ? "-8%" : "auto",
                  }}
                  animate={{
                    y: [0, -15, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: element.delay,
                    ease: "easeInOut",
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg">
                      <element.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-bold text-white whitespace-nowrap">
                      {element.text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
