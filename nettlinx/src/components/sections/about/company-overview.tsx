import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Building2 } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import Img from "@/components/assets/i4.png"
export default function CompanyOverview() {
  return (
    <section id="company" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">Pioneering Digital Infrastructure</h2>
            <p className="text-md text-muted-foreground mb-6 leading-relaxed">
              <strong>Nettlinx Limited</strong> stands as a cornerstone of India's digital transformation journey. Since 1999, we've been architecting the digital backbone that powers businesses across Telangana and Andhra Pradesh. 
            </p>
            <p className="text-md text-muted-foreground mb-6 leading-relaxed">
              Our comprehensive portfolio spans <strong>Data, Voice, and Video services</strong>, delivered through cutting-edge converged network platforms. With over 10,000 bandwidth customers and 95+ Points of Presence, we've deployed internet connections totaling 100+ Gbps cumulative bandwidth.
            </p>
            <p className="text-md text-muted-foreground mb-8 leading-relaxed">
              Beyond traditional ISP services, we've evolved into a comprehensive technology partner, offering <strong>Internet Telephony (ITSP), Online Service Provider (OSP), security solutions, surveillance systems, data center services, and custom software development</strong>.
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="px-4 py-2">Class B ISP License</Badge>
              <Badge variant="outline" className="px-4 py-2">BSE Listed</Badge>
              <Badge variant="outline" className="px-4 py-2">99.9% Uptime</Badge>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl sm:p-8 border-0">
              <img
                src={Img} 
                alt="Nettlinx Infrastructure"
                className="w-full h-auto object-cover shadow-lg rounded-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}