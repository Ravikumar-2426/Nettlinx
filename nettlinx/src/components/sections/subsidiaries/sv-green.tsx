import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Sun, Zap, Recycle, ArrowRight, TreePine, Wind } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export default function SVGreen() {
  const initiatives = [
    {
      icon: Sun,
      title: "Solar Energy Solutions",
      description: "Rooftop and ground-mounted solar installations",
      capacity: "500+ MW",
      projects: "200+ Projects"
    },
    {
      icon: Wind,
      title: "Wind Power Projects",
      description: "Large-scale wind energy generation",
      capacity: "100+ MW",
      projects: "15+ Projects"
    },
    {
      icon: TreePine,
      title: "Reforestation Programs",
      description: "Tree plantation and forest conservation",
      capacity: "50,000+ Trees",
      projects: "25+ Programs"
    },
    {
      icon: Recycle,
      title: "Waste Management",
      description: "Sustainable waste processing solutions",
      capacity: "100+ Tons/Day",
      projects: "10+ Facilities"
    }
  ];

  const services = [
    "Renewable Energy Consulting",
    "Environmental Impact Assessment",
    "Carbon Footprint Analysis",
    "Sustainability Audits",
    "Green Building Certification",
    "Energy Efficiency Solutions"
  ];

  const awards = [
    {
      title: "Green Energy Pioneer Award",
      year: "2023",
      organization: "Renewable Energy Council"
    },
    {
      title: "Sustainability Excellence",
      year: "2022",
      organization: "Environmental Foundation"
    },
    {
      title: "Clean Energy Innovation",
      year: "2021",
      organization: "Solar Industry Association"
    }
  ];

  return (
    <section id="sv-green" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Badge className="mb-4 bg-green-100 text-green-800">Environmental Division</Badge>
          <h2 className="text-4xl font-bold text-primary mb-4">SV Green</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leading the transition to sustainable energy with innovative renewable solutions 
            and environmental conservation initiatives.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="glass-premium border-0 h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <initiative.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">{initiative.title}</CardTitle>
                  <CardDescription>{initiative.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-green-600">{initiative.capacity}</div>
                    <div className="text-sm text-muted-foreground">{initiative.projects}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-3xl font-bold mb-6">Environmental Impact</h3>
            <p className="text-muted-foreground mb-6">
              SV Green is committed to creating a sustainable future through innovative renewable 
              energy solutions and environmental conservation programs. Our initiatives contribute 
              to reducing carbon footprint and promoting green technologies.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">5,000+ MWh</div>
                <div className="text-sm text-muted-foreground">Clean Energy Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">2,500 Tons</div>
                <div className="text-sm text-muted-foreground">CO2 Reduced Annually</div>
              </div>
            </div>

            <Button className="bg-green-600 hover:bg-green-700">
              Learn More About Our Impact
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card className="glass-premium border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-green-600" />
                  Our Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-premium border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-green-600" />
                  Recognition & Awards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {awards.map((award, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold">{award.title}</div>
                        <div className="text-sm text-muted-foreground">{award.organization}</div>
                      </div>
                      <Badge variant="outline">{award.year}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          className="bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-xl text-white text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-bold mb-4">Join the Green Revolution</h3>
          <p className="mb-6 opacity-90">
            Partner with us to implement sustainable energy solutions and contribute to a cleaner, 
            greener future for generations to come.
          </p>
          <Button variant="secondary" size="lg">
            Get Green Energy Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
}