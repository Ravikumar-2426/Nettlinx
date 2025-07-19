import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, MapPin } from "lucide-react";
import { STATS } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import AboutSectionBackground from "@/components/svgs/AboutSectionBackground";

export default function HeroSection() {
  return (
      <section id="hero" className="relative py-20 overflow-hidden">
      <AboutSectionBackground />
        <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
            About Nettlinx Limited
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-premium">
            25+ Years of Digital Excellence
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            As a Class 'B' Internet Service Provider listed on BSE (Code: 511658), we've been at the forefront of India's digital infrastructure revolution since 1999, serving enterprises across Telangana and Andhra Pradesh with cutting-edge connectivity solutions.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { label: "Years of Experience", value: `${STATS.yearsExperience}+`, icon: Award },
            { label: "Enterprise Customers", value: `${STATS.customers.toLocaleString()}+`, icon: Users },
            { label: "Gbps Deployed", value: `${STATS.gbpsDeployed}+`, icon: Globe },
            { label: "Points of Presence", value: `${STATS.pops}+`, icon: MapPin }
          ].map((stat, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="glass-premium border-0 text-center hover-lift">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-blue-100" />
                  <div className="text-3xl font-bold text-blue-200 mb-2">{stat.value}</div>
                  <p className="text-sm text-blue-200">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}