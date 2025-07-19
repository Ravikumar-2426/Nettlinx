import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wifi, Home, Building, CheckCircle, ArrowRight, Users } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

interface BroadbandProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function Broadband({ 
  title = "Broadband Internet",
  description = "Fast, reliable, and affordable broadband internet services designed for homes and small businesses",

}: BroadbandProps) {
  const plans = [
    { 
      name: "Home Basic", 
      speed: "25 Mbps", 
      price: "₹799", 
      type: "Residential",
      features: ["Unlimited data", "Wi-Fi router included", "Basic support"]
    },
    { 
      name: "Home Pro", 
      speed: "50 Mbps", 
      price: "₹1,299", 
      type: "Residential",
      features: ["Unlimited data", "Premium Wi-Fi router", "Priority support"]
    },
    { 
      name: "Business Starter", 
      speed: "100 Mbps", 
      price: "₹2,999", 
      type: "Business",
      features: ["Unlimited data", "Business-grade router", "Static IP", "24/7 support"]
    },
    { 
      name: "Business Pro", 
      speed: "200 Mbps", 
      price: "₹4,999", 
      type: "Business",
      features: ["Unlimited data", "Enterprise router", "Multiple IPs", "Dedicated support"]
    }
  ];

  const features = [
    "High-speed fiber optic connectivity",
    "Unlimited data usage",
    "24/7 customer support",
    "Quick installation and setup",
    "Competitive pricing across Telangana & AP",
    "99.9% uptime guarantee",
    "IPv6 ready infrastructure"
  ];

  return (
    <section id="broadband" className="pb-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl font-bold text-primary mb-4">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-premium border-0 h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <Badge variant="secondary" className="mb-2 w-fit mx-auto">
                    {plan.type}
                  </Badge>
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-primary">
                    {plan.speed}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">{plan.price}</div>
                    <div className="text-sm text-muted-foreground">per month</div>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant="outline">
                    Choose Plan
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div>
            <h3 className="text-3xl font-bold mb-6">Why Choose Nettlinx Broadband?</h3>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-6">
            <Card className="glass-premium border-0">
              <CardContent className="p-8">
                <Home className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-2xl font-bold mb-4">Perfect for Homes</h4>
                <p className="text-muted-foreground mb-4">
                  Stream, game, and browse without interruption. Our fiber-to-the-home 
                  technology delivers consistent speeds for all your family's needs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Multiple device support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Streaming optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Parental controls</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-premium border-0">
              <CardContent className="p-8">
                <Building className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-2xl font-bold mb-4">For Small Businesses</h4>
                <p className="text-muted-foreground mb-4">
                  Reliable business-grade connectivity with enhanced support and features. 
                  Ideal for small offices, retail stores, and growing enterprises.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Business-class support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Static IP addresses</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Priority troubleshooting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}