import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Server, Database, Shield, Zap, CheckCircle, ArrowRight, Clock, Thermometer } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

interface HostingCoLocationProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function HostingCoLocation({ 
  title = "Hosting & Co-location",
  description = "Enterprise-grade data center solutions offering secure co-location, managed hosting, and hybrid infrastructure environments",
  className = ""
}: HostingCoLocationProps) {
  const services = [
    {
      name: "Rack Co-location",
      icon: Server,
      specs: "2U to Full Rack",
      price: "Starting ₹12,000/month",
      features: [
        "Tier-III compliant data center",
        "99.99% uptime guarantee",
        "Redundant power and cooling",
        "24/7 physical security",
        "Remote hands support",
        "Bandwidth options up to 100 Gbps"
      ]
    },
    {
      name: "Managed Hosting",
      icon: Database,
      specs: "Dedicated Servers",
      price: "Starting ₹25,000/month",
      features: [
        "Fully managed infrastructure",
        "Operating system management",
        "Security patches and updates",
        "Backup and disaster recovery",
        "24/7 monitoring and support",
        "Custom configurations available"
      ]
    },
    {
      name: "Cloud Infrastructure",
      icon: Shield,
      specs: "Hybrid Solutions",
      price: "Custom Pricing",
      features: [
        "Private and public cloud options",
        "Scalable resource allocation",
        "API-driven management",
        "Multi-zone redundancy",
        "Compliance-ready environments",
        "Migration assistance included"
      ]
    }
  ];

  const facilities = [
    {
      icon: Zap,
      title: "Redundant Power",
      description: "N+1 UPS systems with diesel generators for 100% uptime"
    },
    {
      icon: Thermometer,
      title: "Advanced Cooling",
      description: "Precision air conditioning with temperature monitoring"
    },
    {
      icon: Shield,
      title: "Physical Security",
      description: "Biometric access, CCTV surveillance, and 24/7 security"
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Continuous monitoring with instant alerting systems"
    }
  ];

  const compliance = [
    "ISO 27001 Certified",
    "Tier-III Data Center Standards",
    "PCI DSS Compliant",
    "GDPR Ready Infrastructure",
    "Government Security Standards",
    "Banking Grade Security"
  ];

  return (
    <section id="hosting" className={`py-16 ${className} bg-white`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Server className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-4xl font-bold mb-4 gradient-text">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}. Nettlinx ensures high availability, continuous monitoring, 
            and scalable architecture for hosting critical applications, storage, and services.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="glass-premium border-0 hover-lift">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.name}</CardTitle>
                  <Badge variant="outline" className="mx-auto mb-2">{service.specs}</Badge>
                  <div className="text-xl font-bold text-primary">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}