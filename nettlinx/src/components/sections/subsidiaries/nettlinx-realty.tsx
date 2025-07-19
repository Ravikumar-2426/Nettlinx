import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export default function NettlinxRealty() {
  const lands = [
    {
      name: "Land at Nagpur",
      totalArea: "14.50 Acres",
      place: "Pipla, Nagpur, Maharashtra",
      address: "Pipla, Nagpur, Maharashtra",
      mapUrl: "https://maps.app.goo.gl/qLhaJtZHGbK414dj9"
    },
    {
      name: "Land at Gachibowli",
      totalArea: "3630 Sq Yards Plot",
      place: "Gachibowli, Hyderabad, Telangana",
      address: "Gachibowli, Hyderabad, Telangana",
      mapUrl: "https://maps.app.goo.gl/BdCWLAsNqzroAJoG8?g_st=com.google."
    }
  ];

  const features = [
    "100% subsidiary of Nettlinx Limited",
    "Strategic land bank in Nagpur & Hyderabad",
    "Exclusive IT‑complex & residential developments",
    "Joint venture with R V Infra in Gachibowli",
    "Target buyers from IT & service sectors",
    "Well‑connected, high‑growth locations"
  ];

  return (
    <section id="nettlinx-realty" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <Badge className="mb-4 bg-blue-100 text-blue-800">Real Estate Division</Badge>
          <h2 className="text-4xl font-bold text-primary mb-4">Nettlinx Realty Pvt Ltd</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            100 % subsidiary of Nettlinx Limited. Investing in strategic land parcels in Nagpur and Hyderabad 
            to develop premium IT complexes and residential properties.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h3 className="text-3xl font-bold mb-6">Our Land Assets</h3>
            <ul className="space-y-3 mb-8">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            {/* <Button className="bg-primary hover:bg-primary/90">
              Explore Land Opportunities
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button> */}
          </motion.div>

          <motion.div className="space-y-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            {lands.map((land, idx) => (
              <Card key={idx} className="glass-premium border-0">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{land.name}</CardTitle>
                      <CardDescription className="mt-1">
                        <div className="flex items-center gap-2"><MapPin className="w-4 h-4" />{land.place}</div>
                        <div className="text-sm mt-1">{land.totalArea}</div>
                        <div className="text-sm">{land.address}</div>
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">Location</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="mt-2 text-sm bg-primary text-white hover:bg-primary/90 hover:text-white transition-all duration-300 group"
                  >
                    <a
                      href={land.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MapPin className="w-4 h-4 transform group-hover:scale-110 transition-transform duration-300" />
                      <span className="group-hover:tracking-wide transition-all duration-300">
                        View on Map
                      </span>
                    </a>
                  </Button>

                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>

        <motion.div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-xl text-white text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h3 className="text-2xl font-bold mb-4">Explore Investment Opportunities</h3>
          <p className="mb-6 opacity-90">
            Partner with us to develop landmark destinations in Nagpur and Hyderabad.
          </p>
          {/* <Button variant="secondary" size="lg">
            Contact Our Realty Team
          </Button> */}
        </motion.div>
      </div>
    </section>
  );
}
