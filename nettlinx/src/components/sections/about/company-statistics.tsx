import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Globe, MapPin, TrendingUp, Network } from "lucide-react";
import { STATS } from "@/lib/constants";
import { fadeInUp, staggerContainer, counterAnimation } from "@/lib/animations";

export default function CompanyStatistics() {
  const keyMetrics = [
    {
      icon: Award,
      value: `${STATS.yearsExperience}+`,
      label: "Years of Experience",
      description: "Leading India's digital transformation since 1999",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Users,
      value: `${STATS.customers.toLocaleString()}+`,
      label: "Enterprise Customers",
      description: "Serving businesses across Telangana & Andhra Pradesh",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Globe,
      value: `${STATS.gbpsDeployed}+`,
      label: "Gbps Deployed",
      description: "High-speed connectivity infrastructure",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: MapPin,
      value: `${STATS.pops}+`,
      label: "Points of Presence",
      description: "Strategic network locations for optimal coverage",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: TrendingUp,
      value: "99.9%",
      label: "Uptime Guarantee",
      description: "SLA-backed reliability for mission-critical operations",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Network,
      value: "24/7",
      label: "NOC Support",
      description: "Round-the-clock network monitoring and support",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="company-statistics" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Company Statistics
          </Badge>
          <h2 className="text-4xl font-bold mb-6 gradient-text-premium">
            Performance Metrics
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Measurable excellence in digital infrastructure delivery, backed by decades of experience and unwavering commitment to service quality.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {keyMetrics.map((metric, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full glass-premium border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-8 text-center relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg">
                      <metric.icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <motion.div
                      variants={counterAnimation}
                      className="text-4xl font-bold mb-2 gradient-text-premium"
                    >
                      {metric.value}
                    </motion.div>
                    
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">
                      {metric.label}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {metric.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-blue-50 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Industry Leadership
              </h3>
              <p className="text-gray-600 max-w-4xl mx-auto">
                As a BSE-listed Class B Internet Service Provider (BSE: 511658), Nettlinx Limited has established itself as a trusted partner for enterprises seeking reliable, scalable, and secure digital infrastructure solutions across South India.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}