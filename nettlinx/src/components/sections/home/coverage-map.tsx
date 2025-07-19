"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Zap, Map } from "lucide-react";
import { STATS, COVERAGE_AREAS } from "@/lib/constants";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import NetworkVisualization from "./NetworkVisualization";
// import NetworkGlobe from "@/components/svgs/NetworkGlobe";
import helpLineImage from "@/components/assets/help_line.jpg"
export default function CoverageMap() {


  const colorMap = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    green: "bg-green-100 text-green-600",
  };

  return (
    <section
      id="coverage"
      className="py-20 lg:py-32 bg-gradient-to-br from-[hsl(212,100%,97%)] to-blue-50 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center space-y-6 mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Wide Network
            </span>
            <span className="block">Coverage</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Serving Telangana & Andhra Pradesh with {STATS.pops}+ Points of Presence and expanding
            coverage across major cities and rural areas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Visualization */}
          <motion.div
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="bg-white rounded-2xl shadow-xl border border-gray-200">
              <CardContent className="p-8">
                {/* <WideNetworkCoverageSVG />                 */}
                {/* <NetworkGlobe /> */}
                <img src={helpLineImage} alt="Network Map" className="w-full h-auto rounded-lg" />

              </CardContent>
            </Card>
          </motion.div>

          {/* Coverage Stats */}
          <motion.div
            variants={slideInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* <div className="space-y-6">
              {coverageStats.map((stat, i) => {
                const IconComponent = stat.icon;
                const colorClass = colorMap[stat.color as keyof typeof colorMap];

                return (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    custom={i}
                  >
                    <Card className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorClass}`}>
                            <IconComponent className="w-6 h-6" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-gray-900">{stat.title}</h4>
                            <p className="text-gray-600">{stat.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div> */}

            {/* Service Areas */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900">Primary Service Areas</h4>
              <p className="text-gray-600">
                Our extensive network covers major cities and rural areas in Telangana & Andhra
                Pradesh.
                Strategic network locations across both states. Enterprises and government organizations. High-speed bandwidth capacity
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
                  <CardContent className="p-4">
                    <h5 className="font-semibold text-primary mb-2">Telangana</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {COVERAGE_AREAS.telangana.map((city, i) => (
                        <li key={i}>• {city}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl border border-secondary/20">
                  <CardContent className="p-4">
                    <h5 className="font-semibold text-secondary mb-2">Andhra Pradesh</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {COVERAGE_AREAS.andhraPradesh.map((city, i) => (
                        <li key={i}>• {city}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Check Service Availability
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
