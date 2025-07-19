import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const leadership = [
  {
    name: "Mr. Rohith Loka Reddy",
    role: "Managing Director",
    experience: "20+ years in Finance & Investment",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
    bio: "Distinguished finance professional with expertise in managing $20B+ portfolios at Manulife Global Strategic Income. CFA charterholder and FRM certified, leading Nettlinx's strategic growth initiatives with deep experience in distressed investing and family business transformation.",
  },
  {
    name: "Mr. Venkateswara Rao Narepalem",
    role: "Director cum CFO",
    experience: "30+ years in Finance & Operations",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
    bio: "Seasoned financial leader with three decades of experience across NBFC, FMCG, and IT industries. Specializes in corporate finance, business finance, operations planning, revenue assurance, and regulatory compliance with expertise in mergers and acquisitions.",
  },
  {
    name: "Mr. Jeeten Anil Desai",
    role: "Independent Non-Executive Director",
    experience: "15+ years in Telecommunications",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
    bio: "Electronics Engineer specializing in telecommunications with international experience across India, Belgium, and New Zealand. Former Product Manager at Alcatel-Lucent, leading wireline business for New Zealand and Pacific Islands. Currently partner with Angaros Group.",
  },
  {
    name: "Lt. Col. Sreenivasa Rao Kurra",
    role: "Independent Director",
    experience: "25+ years in Security & Operations",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
    bio: "Retired Lieutenant Colonel with extensive counter-terrorism experience across Punjab, Manipur, Nagaland, Assam, and Jammu & Kashmir. Founder of Saikor Security, serving as General Secretary of APSA and Executive Committee member of Hyderabad City Security Council.",
  },
  {
    name: "Mr. Vijay Kumar Maistry",
    role: "Director",
    experience: "15+ years in Marketing & Real Estate",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
    bio: "Accomplished professional with strong background in marketing and real estate. Extensive experience in property development, sales and marketing of real estate projects, market analysis, and investment strategies with proven track record in business growth.",
  },
  {
    name: "Mr. Amarender Reddy Bandaru",
    role: "Independent Director",
    experience: "20+ years in Corporate Governance",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
    bio: "Seasoned corporate governance expert with extensive experience in board management, regulatory compliance, and strategic oversight. Brings deep understanding of corporate law and fiduciary responsibilities to the board.",
  },
  {
    name: "Mr. Satya Rajashakar Praharaju",
    role: "Independent Director",
    experience: "34+ years in IT Security & Compliance",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
    bio: "Electronics and Communications Engineer with 34 years of experience including 6 years of international work in USA and Europe. Specializes in IT security, regulatory compliance, and business continuity planning.",
  },
];

export default function BoardOfDirectors() {
  return (
    <section id="directors" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Board of Directors
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exceptional leadership driving strategic vision and sustainable growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {leadership.map((person, index) => (
            <div
              key={index}
              className="flex items-start gap-6 border-t pt-6"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-[150px] h-full rounded-xl object-cover shrink-0"
              />
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {person.name}
                </h3>
                <p className="text-sm font-semibold mb-1">
                  {person.role}
                </p>
                <p className="text-sm text-muted-foreground">{person.bio}</p>
                <div className="mt-3 flex gap-3">
                  <button className="text-muted-foreground hover:text-primary">
                    <Linkedin size={18} />
                  </button>
                  <button className="text-muted-foreground hover:text-primary text-lg font-bold">
                    𝕏
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
