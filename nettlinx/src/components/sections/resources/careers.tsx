import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, Award, Heart, Briefcase } from "lucide-react";

const careerBenefits = [
  {
    icon: TrendingUp,
    title: "Growth Opportunities",
    description: "Accelerate your career with leadership development programs"
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with industry experts and innovative teams"
  },
  {
    icon: Award,
    title: "Recognition & Rewards",
    description: "Performance-based incentives and achievement recognition"
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Flexible working arrangements and wellness programs"
  }
];

export default function Careers() {
  return (
    <section id="careers" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Join Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Shape the future of India's digital infrastructure with a career at Nettlinx
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Why Choose Nettlinx?</h3>
            <div className="space-y-6">
              {careerBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <benefit.icon className="w-6 h-6 text-primary mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-premium border-0 p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Ready to Join Us?</h3>
              <p className="text-muted-foreground mb-6 text-center">
                Be part of India's digital transformation journey. We're looking for passionate individuals who share our vision of connecting the future.
              </p>
              <div className="text-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Briefcase className="w-5 h-5 mr-2" />
                  View Open Positions
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}