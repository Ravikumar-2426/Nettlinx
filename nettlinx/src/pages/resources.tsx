import { motion } from "framer-motion";
import { BookOpen, FileText, HelpCircle, Search, Calendar, Tag, ArrowRight, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Careers from "@/components/sections/resources/careers";

export default function Resources() {
  const blogPosts = [
    {
      title: "The Future of 5G Networks in India",
      excerpt: "Exploring how 5G technology will transform telecommunications infrastructure across India",
      date: "May 15, 2024",
      category: "Technology",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Digital Transformation in Indian Government",
      excerpt: "How public sector organizations are leveraging digital infrastructure for citizen services",
      date: "May 10, 2024",
      category: "Government",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "AI-Powered Network Security Solutions",
      excerpt: "Advanced security measures using artificial intelligence to protect enterprise networks",
      date: "May 5, 2024",
      category: "Security",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Campus Wi-Fi: Best Practices for Educational Institutions",
      excerpt: "Essential guidelines for implementing comprehensive wireless solutions in educational environments",
      date: "April 28, 2024",
      category: "Education",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const caseStudies = [
    {
      title: "Telangana Government Digital Transformation",
      client: "Government of Telangana",
      industry: "Government",
      challenge: "Modernizing citizen services and internal operations",
      solution: "End-to-end digital infrastructure with 99.9% uptime",
      results: ["40% improvement in efficiency", "24/7 citizen services", "Reduced operational costs by 30%"],
      image: "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "University of Hyderabad Campus Wi-Fi",
      client: "University of Hyderabad",
      industry: "Education",
      challenge: "Seamless campus-wide connectivity for 15,000+ users",
      solution: "Comprehensive Wi-Fi infrastructure with centralized management",
      results: ["100% campus coverage", "Seamless roaming", "99.5% user satisfaction"],
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "HITEC City Security Infrastructure",
      client: "HITEC City Management",
      industry: "Technology Parks",
      challenge: "Advanced security for 200+ companies and 150,000+ employees",
      solution: "AI-powered surveillance and access control systems",
      results: ["Zero security incidents", "Real-time threat detection", "Improved operational efficiency"],
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const faqs = [
    {
      question: "What is the typical implementation timeline for enterprise solutions?",
      answer: "Implementation timelines vary based on complexity and scope. Simple connectivity solutions can be deployed within 2-4 weeks, while comprehensive enterprise solutions may take 6-12 weeks. We provide detailed project timelines during the initial consultation."
    },
    {
      question: "Do you provide 24/7 technical support?",
      answer: "Yes, we offer 24/7 technical support for all our enterprise clients. Our support team is available via phone, email, and our online portal. We also provide on-site support for critical issues."
    },
    {
      question: "What are your service level agreements (SLAs)?",
      answer: "Our SLAs vary by service type: 99.9% uptime for enterprise connectivity, 99.5% for business plans, and 99.95% for premium enterprise solutions. We also guarantee response times and resolution commitments."
    },
    {
      question: "Can you integrate with existing IT infrastructure?",
      answer: "Absolutely. We specialize in seamless integration with existing systems. Our team conducts thorough assessments and creates custom integration plans to ensure minimal disruption to your operations."
    },
    {
      question: "What security measures do you implement?",
      answer: "We implement multi-layered security including firewalls, intrusion detection systems, regular security audits, and 24/7 monitoring. All solutions comply with industry standards and regulations."
    },
    {
      question: "Do you offer training for our IT staff?",
      answer: "Yes, we provide comprehensive training programs for your IT staff on all deployed solutions. This includes initial training, ongoing support, and access to our knowledge base and documentation."
    }
  ];

  const categories = ["All", "Technology", "Government", "Security", "Education", "Business"];

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
              Resources & Knowledge Hub
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text-premium">
              Insights & Resources
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive library of articles, case studies, and resources 
              to stay ahead in the digital transformation journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="blog" className="max-w-7xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="blog">Blog & News</TabsTrigger>
              <TabsTrigger value="cases">Case Studies</TabsTrigger>
              <TabsTrigger value="faqs">FAQs</TabsTrigger>
            </TabsList>

            <TabsContent value="blog" id="blog">
              <div className="mb-8">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search articles..." className="pl-10" />
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={category === "All" ? "default" : "outline"}
                        size="sm"
                        className={category === "All" ? "bg-primary hover:bg-primary/90" : ""}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {blogPosts.map((post, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="glass-premium border-0 hover-lift h-full">
                        <div className="aspect-video overflow-hidden rounded-t-lg">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {post.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground">•</span>
                            <span className="text-xs text-muted-foreground">{post.readTime}</span>
                          </div>
                          <CardTitle className="text-xl">{post.title}</CardTitle>
                          <CardDescription>{post.excerpt}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              {post.date}
                            </div>
                            <Button size="sm" variant="outline">
                              Read More
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cases" id="cases">
              <div className="space-y-8">
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="glass-premium border-0">
                      <div className="grid md:grid-cols-2 gap-6 p-6">
                        <div className="space-y-6">
                          <div>
                            <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
                              {study.industry}
                            </Badge>
                            <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                            <p className="text-muted-foreground">{study.client}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Challenge</h4>
                            <p className="text-muted-foreground">{study.challenge}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Solution</h4>
                            <p className="text-muted-foreground">{study.solution}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Results</h4>
                            <ul className="space-y-1">
                              {study.results.map((result, resultIndex) => (
                                <li key={resultIndex} className="flex items-start gap-2">
                                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-muted-foreground">{result}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <Button className="bg-primary hover:bg-primary/90">
                            View Full Case Study
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                        
                        <div className="aspect-video overflow-hidden rounded-lg">
                          <img
                            src={study.image}
                            alt={study.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="faqs" id="faqs">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                  <p className="text-muted-foreground">
                    Find answers to common questions about our services and solutions
                  </p>
                </motion.div>

                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="glass-premium border-0">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                              <HelpCircle className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mt-12"
                >
                  <Card className="glass-premium border-0">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                      <p className="text-muted-foreground mb-6">
                        Our support team is here to help with any additional questions or concerns.
                      </p>
                      <Button size="lg" className="bg-primary hover:bg-primary/90">
                        Contact Support
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <BookOpen className="w-12 h-12 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest insights, case studies, and industry updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="py-16">
        <Careers />
      </section>  
    </div>
  );
}