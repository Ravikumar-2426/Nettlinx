import { motion } from "framer-motion"

const commonImage =
  "https://www.shutterstock.com/image-illustration/concept-artificial-satellites-viewed-space-260nw-2339615781.jpg";

const clientCategories = [
  {
    title: "Healthcare Network",
    description: "Serving 95+ private medical institutions across Telangana & Andhra Pradesh.",
    image: commonImage,
  },
  {
    title: "Government Sector",
    description: "Trusted infrastructure partner for government agencies & public institutions.",
    image: commonImage,
  },
  {
    title: "Educational Institutions",
    description: "Connecting campuses with secure, high-density Wi‑Fi across Telangana & Andhra Pradesh.",
    image: commonImage,
  },
  {
    title: "Hospitality Industry",
    description: "Reliable connectivity & digital infrastructure for hotels & resorts.",
    image: commonImage,
  },
  {
    title: "Software & Manufacturing",
    description: "Enterprise-grade connectivity for industrial & software clients.",
    image: commonImage,
  },
  {
    title: "Digital Media",
    description: "High-bandwidth solutions for digital media companies & content creators.",
    image: commonImage,
  },
];




export default function ClientCategoryGrid() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Our Impact Across Industries</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading organizations across healthcare, government, education, and enterprise sectors
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {clientCategories.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow border border-gray-200"
            >
              <img
                src={client.image}
                alt={client.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{client.title}</h3>
                <p className="text-sm text-gray-600">{client.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
