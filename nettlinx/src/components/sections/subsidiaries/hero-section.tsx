import { motion } from "framer-motion";
import { Building2, Users, Globe, TrendingUp } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function HeroSection() {
  const stats = [
    { icon: Building2, label: "Subsidiaries", value: "5+" },
    { icon: Users, label: "Employees", value: "500+" },
    { icon: Globe, label: "Markets", value: "3+" },
    { icon: TrendingUp, label: "Growth Rate", value: "25%" }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Our Subsidiaries
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Discover the diverse portfolio of companies under the Nettlinx umbrella, 
            each contributing to our mission of technological innovation and business excellence.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-premium p-6 rounded-xl text-center"
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}