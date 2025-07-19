import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Users, 
  Heart,
  GraduationCap,
  Star,
  Server,
  Zap
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function CSRPartnerships() {
  const clientCategories = [
    {
      title: "Healthcare Network",
      description: "Serving 95+ private medical institutions across Telangana and Andhra Pradesh",
      icon: Heart,
      clients: "95+ Private Medical Institutions",
      color: "bg-red-50 border-red-200 text-red-700"
    },
    {
      title: "Government Sector",
      description: "Trusted infrastructure partner for government agencies and public institutions",
      icon: Building2,
      clients: "Multiple Government Agencies",
      color: "bg-blue-50 border-blue-200 text-blue-700"
    },
    {
      title: "Educational Institutions",
      description: "Connecting campuses with high-speed internet and digital infrastructure",
      icon: GraduationCap,
      clients: "Educational Institutes",
      color: "bg-green-50 border-green-200 text-green-700"
    },
    {
      title: "Hospitality Industry",
      description: "Reliable connectivity solutions for hotels and hospitality businesses",
      icon: Star,
      clients: "Hospitality Clients",
      color: "bg-yellow-50 border-yellow-200 text-yellow-700"
    },
    {
      title: "Software & Manufacturing",
      description: "Enterprise-grade connectivity for tech companies and manufacturing units",
      icon: Server,
      clients: "Software & Manufacturing Units",
      color: "bg-purple-50 border-purple-200 text-purple-700"
    },
    {
      title: "Digital Media",
      description: "High-bandwidth solutions for electronic and digital media companies",
      icon: Zap,
      clients: "Electronic Digital Media",
      color: "bg-indigo-50 border-indigo-200 text-indigo-700"
    }
  ];

  return (
    <section id="csr-partnerships" className="py-16 bg-gradient-to-br from-background to-blue-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            CSR & Partnerships
          </Badge>
          <h2 className="text-4xl font-bold mb-6 gradient-text-premium">
            Our Client Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Serving diverse industries with specialized connectivity solutions, fostering digital transformation across sectors and contributing to societal development.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {clientCategories.map((category, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className={`h-full border-2 ${category.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
                      <category.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {category.clients}
                  </Badge>
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
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-blue-50 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Corporate Social Responsibility
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                Beyond business, we're committed to bridging the digital divide, supporting educational initiatives, and contributing to the technological advancement of rural communities across Telangana and Andhra Pradesh.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Digital Literacy Programs</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span>Educational Support</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Heart className="w-4 h-4 text-primary" />
                  <span>Community Development</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}