import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Zap, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

interface InternetLeasedLineProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function InternetLeasedLine({ 
  title = "Internet Leased Lines",
  description = "High-speed, dedicated internet access for businesses and government organizations",
  className = ""
}: InternetLeasedLineProps) {
  const features = [
    "Guaranteed dedicated bandwidth",
    "Symmetrical upload/download speeds",
    "Low latency for mission-critical operations",
    "24/7 Network Operations Center (NOC) support",
    "Static IP addresses included",
    "Scalable bandwidth options",
    "99.9% uptime SLA guarantee",
    "Fiber optic infrastructure"
  ];


const InternetLeasedLineServices = [
    {
      name: "For SMEs",
      icon: Globe,
      description:
        "Dedicated, high-speed Internet Leased Line for small and medium enterprises—reliable and scalable connectivity tailored for business growth.",
      image: "https://thumbs.dreamstime.com/z/smart-city-connectivity-urban-transportation-network-illustration-bustling-cityscape-dusk-overlaying-technology-338839953.jpg",
      placeholder: "smart city connectivity",
      link: "/services/#sme",
    },
    {
      name: "For Enterprises",
      icon: Globe,
      description:
        "Enterprise-grade symmetric bandwidth with SLA-backed uptime, ideal for mission-critical operations and large-scale deployments.",
      image: "https://thumbs.dreamstime.com/z/smart-city-connectivity-urban-transportation-network-illustration-bustling-cityscape-dusk-overlaying-technology-338839953.jpg",
      link: "/services/#enterprise",
    },
    {
      name: "For Campus",
      icon: Globe,
      description:
        "Build-to-order fiber solutions for educational institutions, smart cities, and integrated campuses with seamless connectivity.",
      image: "https://thumbs.dreamstime.com/z/smart-city-connectivity-urban-transportation-network-illustration-bustling-cityscape-dusk-overlaying-technology-338839953.jpg",
      link: "/services/#campus",
    },
    {
      name: "Custom Projects",
      icon: Globe,
      description:
        "Tailored broadband and fiber deployments (FTTH, VPN, MPLS, etc.) for unique industry‑specific use cases and rural expansions.",
      image: "https://thumbs.dreamstime.com/z/smart-city-connectivity-urban-transportation-network-illustration-bustling-cityscape-dusk-overlaying-technology-338839953.jpg",
      link: "/services/#custom-projects",
    },
  ];


  return (
    <section id="ill" className={`py-16 ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Globe className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-4xl font-bold mb-4 gradient-text">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}. Nettlinx provides guaranteed bandwidth, low latency, and 24/7 uptime, 
            ensuring uninterrupted connectivity for mission-critical operations.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </motion.div>
        {/* Internet Leased Line Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Our Internet Leased Line Solutions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {InternetLeasedLineServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="glass-premium border-0 hover-lift group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-3">{service.name}</h4>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 group"
                      onClick={() => window.location.href = service.link}
                    >
                      Get Custom Quote
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}