import { motion } from "framer-motion";
import { Building2, Users, GraduationCap, Wrench, CheckCircle, ArrowRight, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Solutions() {
  const solutionCategories = [
    {
      id: "enterprise",
      title: "Enterprise Solutions",
      icon: Building2,
      description: "Comprehensive digital infrastructure for large organizations",
      features: [
        "Dedicated fiber connectivity up to 100 Gbps",
        "Enterprise-grade security and monitoring",
        "24/7 dedicated support team",
        "Custom network architecture design",
        "Disaster recovery and backup solutions",
        "Multi-site connectivity with MPLS"
      ],
      benefits: [
        "99.95% uptime guarantee",
        "Scalable infrastructure",
        "Dedicated account manager",
        "Custom SLA agreements"
      ],
      price: "Custom pricing based on requirements",
      testimonial: {
        quote: "Nettlinx transformed our entire IT infrastructure, improving our operational efficiency by 40%.",
        author: "Rajesh Kumar, IT Director, Telangana Government"
      }
    },
    {
      id: "sme",
      title: "SME Solutions",
      icon: Users,
      description: "Affordable and scalable solutions for small and medium enterprises",
      features: [
        "High-speed internet from 50 Mbps to 1 Gbps",
        "Cloud hosting and email services",
        "Basic VoIP and telephony",
        "Website hosting and domain services",
        "Basic security and firewall",
        "Remote work enablement tools"
      ],
      benefits: [
        "Cost-effective packages",
        "Easy setup and maintenance",
        "Business-grade reliability",
        "Local support team"
      ],
      price: "Starting from ₹3,000/month",
      testimonial: {
        quote: "Perfect solution for our growing business. Reliable, affordable, and excellent support.",
        author: "Priya Sharma, CEO, TechStart Solutions"
      }
    },
    {
      id: "campus",
      title: "Campus Wi-Fi",
      icon: GraduationCap,
      description: "Comprehensive wireless solutions for educational institutions",
      features: [
        "Campus-wide Wi-Fi coverage",
        "Centralized user management",
        "Bandwidth management and control",
        "Student portal and authentication",
        "Content filtering and security",
        "Analytics and reporting dashboard"
      ],
      benefits: [
        "Seamless roaming across campus",
        "High-density user support",
        "Educational content integration",
        "24/7 monitoring and support"
      ],
      price: "Starting from ₹50,000 for basic setup",
      testimonial: {
        quote: "Our students now have seamless connectivity across the entire campus. Excellent implementation!",
        author: "Dr. Anand Reddy, CTO, University of Hyderabad"
      }
    },
    {
      id: "custom",
      title: "Custom Projects",
      icon: Wrench,
      description: "Tailored solutions for unique business requirements",
      features: [
        "Custom network design and implementation",
        "Specialized connectivity solutions",
        "Integration with existing systems",
        "Consulting and project management",
        "Performance optimization",
        "Ongoing maintenance and support"
      ],
      benefits: [
        "Tailored to specific needs",
        "Expert consultation",
        "End-to-end project management",
        "Flexible implementation timelines"
      ],
      price: "Quote on request",
      testimonial: {
        quote: "Nettlinx delivered a complex custom solution that perfectly matched our unique requirements.",
        author: "Anil Kumar, CTO, Manufacturing Corp"
      }
    }
  ];

  const industryVerticals = [
    { name: "Government", icon: "🏛️", description: "Digital governance and citizen services" },
    { name: "Education", icon: "🎓", description: "Campus connectivity and e-learning" },
    { name: "Healthcare", icon: "🏥", description: "Telemedicine and patient management" },
    { name: "Manufacturing", icon: "🏭", description: "Industrial IoT and automation" },
    { name: "Financial Services", icon: "🏦", description: "Secure banking and fintech" },
    { name: "Retail", icon: "🛒", description: "E-commerce and point-of-sale" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Digital Solutions
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-premium">
              Solutions for Every Business
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From startups to enterprises, we provide tailored digital infrastructure 
              solutions that scale with your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="enterprise" className="max-w-7xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
              <TabsTrigger value="sme">SME</TabsTrigger>
              <TabsTrigger value="campus">Campus</TabsTrigger>
              <TabsTrigger value="custom">Custom</TabsTrigger>
            </TabsList>

            {solutionCategories.map((solution) => (
              <TabsContent key={solution.id} value={solution.id}>
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-2">
                    <Card className="glass-premium border-0 mb-8">
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                            <solution.icon className="w-8 h-8 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-3xl">{solution.title}</CardTitle>
                            <CardDescription className="text-lg mt-2">
                              {solution.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h3 className="text-xl font-bold mb-4">Key Features</h3>
                            <div className="space-y-3">
                              {solution.features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-3">
                                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-4">Benefits</h3>
                            <div className="space-y-3">
                              {solution.benefits.map((benefit, index) => (
                                <div key={index} className="flex items-start gap-3">
                                  <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Testimonial */}
                    <Card className="glass-premium border-0">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                              <Star className="w-6 h-6 text-primary" />
                            </div>
                          </div>
                          <div>
                            <blockquote className="text-lg text-muted-foreground italic mb-4">
                              "{solution.testimonial.quote}"
                            </blockquote>
                            <cite className="text-sm font-semibold">
                              — {solution.testimonial.author}
                            </cite>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Sidebar */}
                  <div className="lg:col-span-1">
                    <Card className="glass-premium border-0 mb-6">
                      <CardHeader>
                        <CardTitle className="text-xl">Pricing</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-primary mb-4">
                          {solution.price}
                        </div>
                        <Button className="w-full bg-primary hover:bg-primary/90 mb-4">
                          Get Quote
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                        <Button variant="outline" className="w-full">
                          Schedule Demo
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="glass-premium border-0">
                      <CardHeader>
                        <CardTitle className="text-xl">Need Help?</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4">
                          Our solution experts are here to help you choose the right package.
                        </p>
                        <div className="space-y-2 text-sm">
                          <div>📞 +91-40-2345-6789</div>
                          <div>✉️ solutions@nettlinx.com</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Industry Verticals */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Industry Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We serve diverse industries with specialized solutions tailored to their unique requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryVerticals.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-premium border-0 hover-lift text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{industry.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                    <p className="text-muted-foreground">{industry.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Implementation Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven 4-step process ensures smooth deployment and optimal results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", description: "Analyze current infrastructure and requirements" },
              { step: "02", title: "Design", description: "Create customized solution architecture" },
              { step: "03", title: "Implementation", description: "Deploy and configure the solution" },
              { step: "04", title: "Support", description: "Ongoing monitoring and optimization" }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{phase.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your specific requirements and create a customized solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}