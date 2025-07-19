import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Cloud, Cpu, CheckCircle, ArrowRight, Layers, Zap, Shield, Heart, BookOpen, CreditCard } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

interface AppDevIntegrationProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function AppDevIntegration({ 
  title = "App Development & Integration",
  description = "Custom application development and seamless system integration tailored for enterprises and government entities",
  className = ""
}: AppDevIntegrationProps) {
  const services = [
    {
      name: "Custom Web Applications",
      icon: Code,
      description: "Modern, responsive web applications built with cutting-edge technologies",
      features: [
        "React, Angular, Vue.js development",
        "RESTful API development",
        "Database design and optimization",
        "Responsive design implementation",
        "Progressive Web Apps (PWA)",
        "Performance optimization"
      ],
      technologies: ["React", "Node.js", "Python", "Java", "PHP"]
    },
    {
      name: "Mobile App Development",
      icon: Smartphone,
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: [
        "Native iOS and Android apps",
        "Cross-platform development",
        "UI/UX design and prototyping",
        "App store deployment",
        "Push notifications integration",
        "Offline functionality"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"]
    },
    // {
    //   name: "System Integration",
    //   icon: Layers,
    //   description: "Seamless integration of existing systems and third-party applications",
    //   features: [
    //     "API integration and development",
    //     "Legacy system modernization",
    //     "Data migration services",
    //     "Enterprise software integration",
    //     "Payment gateway integration",
    //     "CRM and ERP integration"
    //   ],
    //   technologies: ["REST APIs", "GraphQL", "Microservices", "Docker", "Kubernetes"]
    // },
    // {
    //   name: "AI & Machine Learning",
    //   icon: Cpu,
    //   description: "AI-driven solutions for automation and intelligent decision making",
    //   features: [
    //     "Machine learning model development",
    //     "Natural language processing",
    //     "Computer vision solutions",
    //     "Predictive analytics",
    //     "Chatbot development",
    //     "Automated data processing"
    //   ],
    //   technologies: ["TensorFlow", "PyTorch", "OpenAI", "AWS ML", "Azure AI"]
    // }
  ];

  const industries = [
    {
      name: "Government & Public Sector",
      icon: Shield,
      applications: ["E-governance portals", "Citizen service apps", "Digital documentation", "Smart city solutions"]
    },
    {
      name: "Healthcare",
      icon: Heart,
      applications: ["Hospital management systems", "Telemedicine platforms", "Patient portals", "Medical record systems"]
    },
    {
      name: "Education",
      icon: BookOpen,
      applications: ["Learning management systems", "Online examination platforms", "Student information systems", "Virtual classrooms"]
    },
    {
      name: "Finance & Banking",
      icon: CreditCard,
      applications: ["Banking applications", "Payment gateways", "Financial analytics", "Compliance management"]
    }
  ];

  const developmentProcess = [
    { step: "1", title: "Requirements Analysis", description: "Understanding your business needs and technical requirements" },
    { step: "2", title: "System Design", description: "Creating detailed architecture and user experience designs" },
    { step: "3", title: "Development", description: "Agile development with regular progress updates and feedback" },
    { step: "4", title: "Testing & QA", description: "Comprehensive testing including security and performance validation" },
    { step: "5", title: "Deployment", description: "Seamless deployment with minimal downtime and user training" },
    { step: "6", title: "Support", description: "Ongoing maintenance, updates, and technical support" }
  ];

  return (
    <section id="development" className={`py-16 bg-muted/30 ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Code className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-4xl font-bold mb-4 gradient-text">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}. Nettlinx delivers IT/ITES and AI-driven solutions to improve operational efficiency, 
            support digital transformation, and enable smart city infrastructure.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 mb-16"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="glass-premium border-0 hover-lift">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{service.name}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Discuss Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>

        {/* Development Process */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Our Development Process</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentProcess.map((process, index) => (
              <Card key={index} className="glass-premium border-0 relative">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold mb-4">
                    {process.step}
                  </div>
                  <h4 className="text-lg font-bold mb-2">{process.title}</h4>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div> */}

        {/* Industry Focus */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Industry Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="glass-premium border-0 text-center">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold mb-4">{industry.name}</h4>
                  <div className="space-y-2">
                    {industry.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                        <span>{app}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div> */}
        
      </div>
    </section>
  );
}