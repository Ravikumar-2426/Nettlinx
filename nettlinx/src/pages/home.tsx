"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/sections/home/hero-section";
import ServicesShowcase from "@/components/sections/home/services-showcase";
import CoverageMap from "@/components/sections/home/coverage-map";
import TestimonialsSection from "@/components/sections/home/testimonials";
import WhyChooseUs from "@/components/sections/home/WhyChooseUs";
import CSRPartnerships from "@/components/sections/home/csr-partnerships";
import CompanyStatistics from "@/components/sections/home/company-statistics";
// import CTASection from "@/components/sections/cta-section";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <HeroSection />
      <ServicesShowcase />
      <CoverageMap />
      <WhyChooseUs />
      {/* <CompanyStatistics /> */}
      <CSRPartnerships />
      <TestimonialsSection />
      {/* <CTASection /> */}
    </motion.div>
  );
}
