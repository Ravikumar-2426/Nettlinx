import { motion } from "framer-motion";
import { Phone, Mail, MessageSquare, Clock, MapPin, Headphones, Ticket, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { COMPANY_INFO } from "@/lib/constants";

export default function Support() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "24/7 technical support for all enterprise clients",
      details: "+91-40-2345-6789",
      availability: "Available 24/7"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed technical assistance via email",
      details: "support@nettlinx.com",
      availability: "Response within 2 hours"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Instant support through our website chat",
      details: "Available on website",
      availability: "Mon-Fri 9AM-6PM"
    },
    {
      icon: Ticket,
      title: "Support Portal",
      description: "Track and manage your support requests",
      details: "portal.nettlinx.com",
      availability: "24/7 access"
    }
  ];

  const supportPlans = [
    {
      name: "Basic Support",
      price: "Included",
      features: [
        "Business hours support (9AM-6PM)",
        "Email and phone support",
        "Knowledge base access",
        "Response time: 4 hours"
      ]
    },
    {
      name: "Premium Support",
      price: "₹5,000/month",
      features: [
        "24/7 priority support",
        "Dedicated support manager",
        "Phone, email, and chat support",
        "Response time: 1 hour",
        "Remote assistance"
      ]
    },
    {
      name: "Enterprise Support",
      price: "Custom pricing",
      features: [
        "24/7 dedicated support team",
        "On-site support available",
        "Proactive monitoring",
        "Response time: 15 minutes",
        "Custom SLA agreements"
      ]
    }
  ];

  const officeLocations = [
    {
      city: "Hyderabad (HQ)",
      address: "HITEC City, Cyberabad, Telangana 500081",
      phone: "+91-40-2345-6789",
      hours: "24/7 Operations Center"
    },
    {
      city: "Visakhapatnam",
      address: "IT Park, Rushikonda, Visakhapatnam, AP 530045",
      phone: "+91-891-234-5678",
      hours: "Mon-Fri 9AM-6PM"
    },
    {
      city: "Vijayawada",
      address: "Software Park, Mangalagiri, Vijayawada, AP 522503",
      phone: "+91-866-234-5678",
      hours: "Mon-Fri 9AM-6PM"
    }
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
              Support & Contact
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-premium">
              We're Here to Help
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get the support you need, when you need it. Our dedicated team is committed 
              to ensuring your success with our solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactMethods.map((method, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="glass-premium border-0 hover-lift h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <method.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                    <p className="text-muted-foreground mb-4">{method.description}</p>
                    <div className="text-sm font-semibold text-primary mb-2">{method.details}</div>
                    <div className="text-xs text-muted-foreground">{method.availability}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Support Tabs */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="contact" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="contact">Contact Form</TabsTrigger>
              <TabsTrigger value="tickets">Support Portal</TabsTrigger>
              <TabsTrigger value="plans">Support Plans</TabsTrigger>
            </TabsList>

            <TabsContent value="contact" id="contact">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="glass-premium border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl">Get in Touch</CardTitle>
                    <CardDescription>
                      Send us a message and we'll get back to you as soon as possible
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Your Company" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="billing">Billing Support</SelectItem>
                          <SelectItem value="sales">Sales Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us how we can help you..." 
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Send Message
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card className="glass-premium border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        Support Hours
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Emergency Support</span>
                          <span className="font-semibold">24/7</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Technical Support</span>
                          <span className="font-semibold">24/7</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sales Support</span>
                          <span className="font-semibold">9AM - 6PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Billing Support</span>
                          <span className="font-semibold">9AM - 6PM</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-premium border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Headphones className="w-5 h-5" />
                        Emergency Contact
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        For critical issues requiring immediate attention:
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-primary" />
                          <span className="font-semibold">+91-40-2345-6789</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-primary" />
                          <span className="font-semibold">emergency@nettlinx.com</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tickets" id="tickets">
              <Card className="glass-premium border-0">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Ticket className="w-6 h-6" />
                    Support Ticket Portal
                  </CardTitle>
                  <CardDescription>
                    Access our comprehensive support portal to manage your tickets and access resources
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Portal Features</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">Create and track support tickets</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">Access knowledge base and documentation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">Download software and drivers</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">View service status and maintenance schedules</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Quick Actions</h3>
                        <div className="space-y-3">
                          <Button className="w-full bg-primary hover:bg-primary/90">
                            Access Support Portal
                          </Button>
                          <Button variant="outline" className="w-full">
                            Check Service Status
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Login Information</h3>
                        <p className="text-muted-foreground mb-4">
                          Use your Nettlinx account credentials to access the support portal. 
                          If you don't have an account, contact us to set one up.
                        </p>
                        <div className="space-y-2">
                          <Label htmlFor="username">Username</Label>
                          <Input id="username" placeholder="Enter your username" />
                        </div>
                        <div className="space-y-2 mt-4">
                          <Label htmlFor="password">Password</Label>
                          <Input id="password" type="password" placeholder="Enter your password" />
                        </div>
                        <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                          Login to Portal
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="plans">
              <div className="grid md:grid-cols-3 gap-6">
                {supportPlans.map((plan, index) => (
                  <Card key={index} className="glass-premium border-0 hover-lift">
                    <CardHeader className="text-center">
                      <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      <div className="text-3xl font-bold text-primary">{plan.price}</div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                        {plan.name === "Enterprise Support" ? "Contact Sales" : "Get Started"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Our Locations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visit us at our regional offices across South India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {officeLocations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-premium border-0 hover-lift h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-bold">{location.city}</h3>
                    </div>
                    <div className="space-y-3">
                      <p className="text-muted-foreground">{location.address}</p>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" />
                        <span className="font-semibold">{location.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{location.hours}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center">
          <motion.div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-xl text-white text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
            <p className="mb-6 opacity-90">
              Our support team is standing by to help you resolve any issues quickly
            </p>
            <Button variant="secondary" size="lg">
              Call Now: +91-40-2345-6789
              <Phone className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          
        </div>
      </section>
    </div>
  );
}