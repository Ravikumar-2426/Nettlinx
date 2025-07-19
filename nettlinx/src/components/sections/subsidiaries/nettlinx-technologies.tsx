import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, CloudCog, Layers3, Building, Smartphone, Cloud, Shield, ArrowRight, Zap } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export default function NettlinxTechnologies() {
  const services = [
    {
      icon: Code2,
      title: "Software Consulting",
      description: "Expert guidance and implementation for enterprise-grade solutions.",
      technologies: ["Java", ".NET", "Python", "Spring Boot"]
    },
    {
      icon: CloudCog,
      title: "Managed Cloud Services",
      description: "Deploy, monitor, and scale with confidence in the cloud.",
      technologies: ["AWS", "Azure", "Docker", "Kubernetes"]
    },
    {
      icon: Layers3,
      title: "Micro ERP Development",
      description: "Lightweight ERP tailored for small businesses and distributors.",
      technologies: ["React", "Node.js", "PostgreSQL"]
    },
    {
      icon: Building,
      title: "Outsourcing & Staffing",
      description: "Top-tier IT talent serving Fortune 500 and mid-size enterprises.",
      technologies: ["IBM", "Microsoft", "Vanguard", "HCL"]
    }
  ];

  const projects = [
    {
      title: "E-governance Platform",
      client: "Telangana Government",
      category: "Government",
      impact: "5M+ Citizens Served"
    },
    {
      title: "Banking Solution",
      client: "Regional Bank",
      category: "FinTech",
      impact: "₹100Cr+ Transactions"
    },
    {
      title: "Healthcare Management",
      client: "Hospital Chain",
      category: "Healthcare",
      impact: "50+ Hospitals"
    }
  ];

  return (
    <section id="nettlinx-technologies" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <Badge className="mb-4 bg-green-100 text-green-800">Technology Division</Badge>
          <h2 className="text-4xl font-bold text-primary mb-4">Nettlinx Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative software solutions and technology services that drive digital transformation 
            for businesses across industries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
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
                  <service.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-3xl font-bold text-center mb-12">Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glass-premium border-0 text-center">
                <CardHeader>
                  <Badge className="mb-2 w-fit mx-auto">{project.category}</Badge>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.client}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary mb-2">{project.impact}</div>
                  <Button variant="outline" size="sm">
                    View Case Study
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div> */}

        {/* <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div>
            <h3 className="text-3xl font-bold mb-6">Why Choose Nettlinx Technologies?</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Rapid Development</h4>
                  <p className="text-muted-foreground">Agile methodologies for faster time-to-market</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Enterprise Security</h4>
                  <p className="text-muted-foreground">Bank-grade security and compliance standards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Cloud className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Scalable Solutions</h4>
                  <p className="text-muted-foreground">Future-ready architecture that grows with you</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-xl">
            <h4 className="text-2xl font-bold mb-4">Ready to Innovate?</h4>
            <p className="text-muted-foreground mb-6">
              Let's discuss how our technology solutions can transform your business operations 
              and drive growth in the digital age.
            </p>
            <Button className="bg-primary hover:bg-primary/90">
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div> */}

        <motion.div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-xl text-white text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h4 className="text-2xl font-bold mb-4">Ready to Innovate?</h4>
          <p className="text-white mb-6">
            Let's discuss how our technology solutions can transform your business operations 
            and drive growth in the digital age.
          </p>
          {/* <Button variant="secondary" size="lg">
            Contact Our Realty Team
          </Button> */}
        </motion.div>
      </div>
    </section>
  );
}