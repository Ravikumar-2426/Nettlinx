"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, Phone, Mail, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { useToast } from "@/hooks/use-toast";

export default function CTASection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Quote Request Submitted!",
      description: "We'll respond within 24 hours with a detailed proposal.",
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      service: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const benefits = [
    "Free consultation and network assessment",
    "24/7 technical support and monitoring",
    "99.9% uptime SLA guarantee",
  ];

  const contactInfo = [
    { icon: Phone, text: COMPANY_INFO.phone },
    { icon: Mail, text: COMPANY_INFO.email },
    { icon: MapPin, text: COMPANY_INFO.address },
  ];

  return (
    <section
      id="cta"
      className="py-20 lg:py-32 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 30% 20%, rgba(25, 76, 178, 0.4) 0%, transparent 50%),
          radial-gradient(circle at 70% 80%, rgba(255, 142, 0, 0.3) 0%, transparent 50%),
          linear-gradient(135deg, hsl(220, 39%, 11%) 0%, hsl(215, 25%, 27%) 100%)
        `
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center lg:text-left space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              <span className="block">Ready to Transform</span>
              <span className="block bg-gradient-to-r from-blue-400 to-secondary bg-clip-text text-transparent">
                Your Digital
              </span>
              <span className="block">Infrastructure?</span>
            </h2>

            <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
              Join 10,000+ organizations that trust Nettlinx for enterprise-grade connectivity,
              cloud solutions, and digital transformation. Get a customized quote today.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  custom={i}
                  className="flex items-center space-x-4"
                >
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white/90">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="space-y-4 pt-8 border-t border-white/20">
              {contactInfo.map((contact, i) => {
                const IconComponent = contact.icon;
                return (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    custom={i}
                    className="flex items-center space-x-3"
                  >
                    <IconComponent className="w-5 h-5 text-secondary" />
                    <span className="text-white/90">{contact.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Content - Contact Form */}
          <motion.div
            variants={slideInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="glass-dark rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get Your Custom Quote</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-white/80 text-sm font-medium">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="mt-2 bg-white/10 border-white/30 text-white placeholder-white/50 focus:border-secondary focus:ring-secondary/50"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-white/80 text-sm font-medium">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="mt-2 bg-white/10 border-white/30 text-white placeholder-white/50 focus:border-secondary focus:ring-secondary/50"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-white/80 text-sm font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="mt-2 bg-white/10 border-white/30 text-white placeholder-white/50 focus:border-secondary focus:ring-secondary/50"
                  placeholder="john@company.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="company" className="text-white/80 text-sm font-medium">
                  Company
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  className="mt-2 bg-white/10 border-white/30 text-white placeholder-white/50 focus:border-secondary focus:ring-secondary/50"
                  placeholder="Company Name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="service" className="text-white/80 text-sm font-medium">
                  Service Interest
                </Label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                  <SelectTrigger className="mt-2 bg-white/10 border-white/30 text-white focus:border-secondary focus:ring-secondary/50">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="connectivity">Connectivity Solutions</SelectItem>
                    <SelectItem value="hosting">Hosting & Co-location</SelectItem>
                    <SelectItem value="ai-security">AI Surveillance & Security</SelectItem>
                    <SelectItem value="cloud">Enterprise Cloud</SelectItem>
                    <SelectItem value="voip">VoIP & Telephony</SelectItem>
                    <SelectItem value="campus-wifi">Campus Wi-Fi</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="text-white/80 text-sm font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="mt-2 bg-white/10 border-white/30 text-white placeholder-white/50 focus:border-secondary focus:ring-secondary/50"
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary hover:bg-secondary/90 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Get Custom Quote"}
              </Button>
            </form>

            <p className="text-white/60 text-sm mt-4 text-center">
              We'll respond within 24 hours with a detailed proposal.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
