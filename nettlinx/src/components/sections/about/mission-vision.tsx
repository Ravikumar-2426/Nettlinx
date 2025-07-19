import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-premium border-0 p-8 h-full">
              <div className="flex items-center mb-6">
                <Target className="w-10 h-10 text-primary mr-4" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To provide reliable, fast, and secure internet connectivity that empowers individuals and businesses to thrive in the digital age. We are committed to delivering exceptional service, innovative technology, and customer-focused solutions that bridge the digital divide and connect people to a world of opportunities.
              </p>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-premium border-0 p-8 h-full">
              <div className="flex items-center mb-6">
                <Eye className="w-10 h-10 text-primary mr-4" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the leading provider of seamless internet experiences, delivering cutting-edge technology and outstanding service that transforms how people communicate, work, learn, and connect globally. We envision a future where every individual, family, and business enjoys equal access to the digital world.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}