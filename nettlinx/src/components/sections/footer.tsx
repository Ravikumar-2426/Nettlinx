"use client";

import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Facebook, AlertTriangle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Connectivity Solutions", href: "/services#connectivity" },
        { name: "Hosting & Co-location", href: "/services#hosting" },
        { name: "AI Surveillance & Security", href: "/services#ai-security" },
        { name: "Enterprise Cloud", href: "/services#cloud" },
        { name: "VoIP & Telephony", href: "/services#voip" },
        { name: "Campus Wi-Fi", href: "/services#campus-wifi" },
      ],
    },
    {
      title: "Company subsidiaries",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Leadership Team", href: "/about#leadership" },
        { name: "Careers", href: "/about#careers" },
        { name: "News & Press", href: "/resources#blog" },
        { name: "CSR Initiatives", href: "/about#csr" },
        { name: "Subsidiaries", href: "/subsidiaries" },
        { name: "Investor Relations", href: "/investors" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/support#contact" },
        { name: "Technical Support", href: "/support" },
        { name: "Ticket Portal", href: "/support#tickets" },
        { name: "Documentation", href: "/resources" },
        { name: "FAQ", href: "/resources#faqs" },
        { name: "Network Status", href: "/support#status" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#linkedin" },
    { icon: Twitter, href: "#twitter" },
    { icon: Facebook, href: "#facebook" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Compliance", href: "#compliance" },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
          >
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <div className="text-2xl font-bold text-secondary">
                  {COMPANY_INFO.name.split(" ")[0]}
                </div>
                <span className="text-sm text-gray-400">
                  {COMPANY_INFO.name.split(" ")[1]}
                </span>
              </div>
              <p className="text-white/80 leading-relaxed">
                Accelerating India's digital backbone since 1999. Trusted ISP
                and digital infrastructure provider serving 10,000+
                organizations.
              </p>
              <div className="flex items-center space-x-4">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm text-white/70">
                  BSE: 511658 | Class B ISP License
                </span>
              </div>
              <div className="flex space-x-4">
                {socialLinks.map((social, i) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={i}
                      variant="outline"
                      size="icon"
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 border-white/20 hover:border-white/40 text-white/80 hover:text-white transition-all duration-200"
                      asChild
                    >
                      <a href={social.href}>
                        <IconComponent className="w-5 h-5" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </motion.div>

            {/* Footer Sections */}
            {footerSections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="space-y-6"
              >
                <h4 className="text-lg font-semibold text-white">
                  {section.title}
                </h4>
                <nav className="space-y-3">
                  {section.links.map((link, j) => (
                    <Link
                      key={j}
                      href={link.href}
                      className="block text-white/80 hover:text-secondary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                {section.title === "Support" && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mt-6">
                    <h5 className="text-sm font-semibold text-red-400 mb-2 flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      24/7 Emergency Support
                    </h5>
                    <p className="text-red-300 text-sm">
                      +91-40-NETTLINX (638-8546)
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-white/20 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/70 text-sm">
              © 2025 {COMPANY_INFO.name}. All rights reserved. | Registered in
              India
            </div>
            <div className="flex items-center space-x-6 text-sm">
              {legalLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="text-white/70 hover:text-secondary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
