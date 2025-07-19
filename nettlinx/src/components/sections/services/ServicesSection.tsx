
import { motion } from "framer-motion";
import InternetLeasedLine from "./InternetLeasedLine";
import Broadband from "./Broadband";
import HostingCoLocation from "./HostingCoLocation";
import AppDevIntegration from "./AppDevIntegration";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Router } from "lucide-react";
import TechnicalSpecifications from "./TechnicalSpecifications";
import HeroServicesSVG from "@/components/svgs/HeroServicesSVG";
import bgVideo from "@/components/assets/bgVideo.mp4"
interface ServicesSectionProps {
  showHero?: boolean;
  className?: string;
}

export default function ServicesSection({ 
  showHero = true, 
  className = "" 
}: ServicesSectionProps) {
  return (
    <div className={`min-h-screen ${className}`}>
      
        <section className="pb-16">
          {/* Background Video Layer */}
          <div className="absolute top-14 left-0 w-full h-[70%] z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover pointer-events-none"
            >
              <source src={bgVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/*Video Mask Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue/70 via-blue/40 to-transparent backdrop-blur-sm" />

          </div>

          <div className="container mt-[50%] sm:mt-[15%] mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <Badge className="mb-6 px-4 py-2 text-base md:text-lg font-medium flex items-center gap-2 
                bg-secondary/10 backdrop-blur-md text-secondary border border-secondary/30 
                rounded-full w-fit mx-auto shadow-sm">
                <Router className="w-5 h-5 text-secondary" />
                Our Services
              </Badge>


              <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-premium">
                Comprehensive Digital Solutions
              </h1>
              <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
                From connectivity to cloud, we provide end-to-end digital infrastructure solutions 
                for businesses of all sizes across Telangana and Andhra Pradesh.
              </p>
            </motion.div>
          </div>
        </section>
     

      {/* Internet Leased Lines */}
      <section className="py-16 bg-white">
        <InternetLeasedLine />
      </section>
      
      {/* Technical Specifications */}
      <section className="">
        <TechnicalSpecifications/>
      </section>

      {/* Broadband */}
      <section className="">
        <Broadband />
      </section>

      {/* Hosting & Co-location */}
      <section className="py-16 bg-slate-50">
        <HostingCoLocation />
      </section>

      {/* App Development & Integration */}
      <section className="py-16 bg-white">
        <AppDevIntegration />
      </section>

 
      
    </div>
  );
}
