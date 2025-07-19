import { motion } from "framer-motion";
import specsImage from "@/components/assets/s3.png"
export default function TechnicalSpecifications() {
  const specs = [
    {
      title: "Established",
      value: "Founded in 1999 with over 25 years of telecom industry experience.",
    },
    {
      title: "Network Reach",
      value: "Serving across Telangana and Andhra Pradesh with Class B ISP license.",
    },
    {
      title: "Connectivity",
      value: "Dedicated leased lines, broadband, MPLS VPNs, and fiber infrastructure.",
    },
    {
      title: "Enterprise Solutions",
      value: "Serving 95+ private hospitals, corporates, campuses, and smart cities.",
    },
    {
      title: "Infrastructure",
      value: "Backed by multi-gigabit backbone, 5G towers, data centers, and peering exchanges.",
    },
    {
      title: "Support",
      value: "24x7 Network Operations Center (NOC) with enterprise-grade SLA assurance.",
    },
  ];

  return (
    <section id="technical-specs" className="min-h-screen ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="relative rounded-2xl overflow-hidden border bg-white">
          {/* Top Background Image */}
          <div className="relative w-full h-[300px]">
            <img
              src={specsImage}
              alt="Network Infrastructure Background"
              className="w-full h-full object-cover"
            />
            {/* Gradient Fader from Bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
          </div>

          {/* Content Header */}
          <div className="relative z-10 text-center px-6 py-12 md:px-16">
            <h3 className="text-3xl font-bold mb-4">Technical Specifications</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nettlinx delivers reliable, high-performance internet and data solutions
              to empower businesses, institutions, and homes across South India.
            </p>
          </div>

          {/* Specifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-16 pb-16">
            {specs.map((item, index) => (
              <div key={index} className="space-y-2 border-t pt-6">
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}