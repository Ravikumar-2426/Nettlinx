import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Network, Users } from "lucide-react";

export default function CompanyStatistics() {
  return (
    <section id="clients" className="pt-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Our Impact Across Industries</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading organizations across healthcare, government, education, and enterprise sectors
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-premium border-0 text-center hover-lift">
              <CardContent className="p-8">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Healthcare Excellence</h3>
                <p className="text-3xl font-bold text-primary mb-2">95+</p>
                <p className="text-muted-foreground">Private Medical Institutions</p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="glass-premium border-0 text-center hover-lift">
              <CardContent className="p-8">
                <Network className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Network Reach</h3>
                <p className="text-3xl font-bold text-primary mb-2">100+</p>
                <p className="text-muted-foreground">Gbps Deployed</p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="glass-premium border-0 text-center hover-lift">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Customer Base</h3>
                <p className="text-3xl font-bold text-primary mb-2">10,000+</p>
                <p className="text-muted-foreground">Bandwidth Customers</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}