
"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer } from "@/lib/animations";

// Mock client logos - replace with actual client logos
const clientCategories = [
  {
    title: "Electronic Digital Media Clients",
    clients: [
      "Media Corp", "Digital TV", "News Network", "Entertainment Plus", 
      "Studio Works", "Broadcast Tech", "Media Solutions", "Digital Stream",
      "Content Hub", "Media Galaxy", "Stream Tech", "Digital Vision"
    ]
  },
  {
    title: "Government Clients",
    clients: [
      "Telangana Govt", "AP Government", "Municipal Corp", "GHMC", 
      "Revenue Dept", "Police Dept", "Health Ministry", "Education Board",
      "Transport Dept", "IT Department", "Urban Development", "Rural Development"
    ]
  },
  {
    title: "Health Care Clients",
    clients: [
      "Apollo Hospitals", "NIMS", "Care Hospitals", "Continental", 
      "Yashoda Hospitals", "Rainbow Hospitals", "KIMS", "Gandhi Hospital",
      "Osmania Hospital", "Global Hospitals", "Max Cure", "Star Hospitals"
    ]
  },
  {
    title: "Hospitality Industry Clients",
    clients: [
      "Taj Hotels", "ITC Hotels", "Marriott", "Hyatt", 
      "Radisson", "Park Hyatt", "Novotel", "Sheraton",
      "Holiday Inn", "Crowne Plaza", "The Westin", "Lemon Tree"
    ]
  },
  {
    title: "Software & Manufacturing Units Clients",
    clients: [
      "TCS", "Infosys", "Wipro", "Tech Mahindra", 
      "HCL", "Cognizant", "Accenture", "Microsoft",
      "Google", "Amazon", "IBM", "Oracle"
    ]
  },
  {
    title: "Educational Institutes Clients",
    clients: [
      "University of Hyderabad", "IIIT Hyderabad", "ISB", "BITS Pilani", 
      "Osmania University", "JNTUH", "ICFAI", "Mahindra University",
      "NIFT", "NIT Warangal", "Kakatiya University", "Telangana University"
    ]
  }
];

interface InfiniteCarouselProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number;
}

function InfiniteCarousel({ items, direction = "left", speed = 50 }: InfiniteCarouselProps) {
  // Duplicate items for seamless infinite scroll
  const duplicatedItems = [...items, ...items, ...items];
  
  return (
    <div className="overflow-hidden relative w-full">
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        animate={{
          x: direction === "left" ? [0, -100 * items.length] : [-100 * items.length, 0]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear"
          }
        }}
        style={{ width: `${items.length * 300}px` }}
      >
        {duplicatedItems.map((client, index) => (
          <div
            key={`${client}-${index}`}
            className="flex-shrink-0 w-48 h-24 bg-white rounded-lg border border-gray-200 shadow-sm flex items-center justify-center hover:shadow-md transition-shadow duration-300"
          >
            <span className="text-gray-700 font-medium text-center px-4 text-sm">
              {client}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function OurClients() {
  return (
    <section id="our-clients" className="py-16 bg-gradient-to-br from-background to-blue-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Our Clients
          </Badge>
          <h2 className="text-4xl font-bold mb-6 gradient-text-premium">
            Trusted by Leading Organizations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Serving diverse industries across Telangana and Andhra Pradesh with specialized 
            connectivity solutions and digital infrastructure services.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {clientCategories.map((category, index) => (
            <motion.div key={index} variants={fadeInUp} className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {category.title}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full"></div>
              </div>
              
              <div className="relative">
                {/* Gradient overlays for smooth fade effect */}
                <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
                
                <InfiniteCarousel 
                  items={category.clients} 
                  direction={index % 2 === 0 ? "left" : "right"}
                  speed={40 + (index * 5)} // Varying speeds for different carousels
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/5 to-blue-50 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-primary">
              Our Client Network Impact
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-sm text-gray-600">Active Connections</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">95+</div>
                <div className="text-sm text-gray-600">Healthcare Facilities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-gray-600">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <div className="text-sm text-gray-600">State Governments</div>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
