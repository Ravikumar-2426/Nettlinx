"use client";

import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const SERVICES = [
  {
    title: "Internet Leased Lines",
    shortDescription: "High-speed dedicated connections tailored for modern business needs.",
    features: ["Symmetric speeds", "99.9% Uptime", "24/7 Support"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80",
    link: "/services#isp",
  },
  {
    title: "Hosting & Co-location",
    shortDescription: "Secure, scalable, and redundant hosting solutions for enterprises.",
    features: ["Tier-III Datacenter", "Physical & Cloud Hosting", "Managed Infra"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80",
    link: "/services#hosting",
  },
  {
    title: "Campus Wi-Fi",
    shortDescription: "Seamless connectivity for universities and large campuses.",
    features: ["Central Management", "Role-based Access", "Real-time Monitoring"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80",
    link: "/services#campus",
  },
  // {
  //   title: "Application Development",
  //   shortDescription: "Custom software solutions that align with your digital roadmap.",
  //   features: ["Web & Mobile Apps", "Cloud-native Builds", "Maintenance & Support"],
  //   image: "https://images.unsplash.com/photo-1581090700227-1f84b197943f?auto=format&fit=crop&w=1000&q=80",
  //   link: "/services#development",
  // },
];

export default function ServicesShowcase() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center space-y-6 mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900">
            Discover our <span className="gradient-text-premium">services</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need for reliable digital infrastructure & connectivity.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <Link href={service.link}>
                <Card className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer hover:scale-[1.015] transition-transform duration-300">
                  <div className="relative h-[360px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500 via-blue-500/80 to-transparent z-10" />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-orange-800 via-orange-600/80 to-transparent z-10" /> */}

                    <CardContent className="relative z-20 h-full flex flex-col justify-end p-6 space-y-4 text-white">
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <p className="text-sm ">{service.shortDescription}</p>
                      <ul className="space-y-1 text-sm">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-400" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4">
                        <span className="inline-flex items-center gap-2 text-white font-semibold group-hover:underline">
                          Learn More <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
