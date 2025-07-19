
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp } from "@/lib/animations";
import { Building2, Globe, Users, TrendingUp, MapPin, Award, Star } from "lucide-react";
import I1 from "@/components/assets/i1.png";

export default function NettlinxINC() {
  return (
    <section id="nettlinx-inc" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 space-y-24">

        {/* Section Header */}
        <motion.div
          className="text-center space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Global Subsidiaries
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expanding our footprint across continents with strategic partnerships and innovative solutions
          </p>
        </motion.div>

        {/* NETTLINX INC */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {/* Left Content */}
          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-300">
            <CardContent className="p-8 h-full flex flex-col">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-4 py-2 font-semibold">
                    <MapPin className="w-4 h-4 mr-2" />
                    United States
                  </Badge>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 px-4 py-2 font-semibold">
                    <Building2 className="w-4 h-4 mr-2" />
                    15 Years
                  </Badge>
                </div>
                
                <h3 className="text-4xl font-bold text-gray-900 mb-6">
                  NETTLINX <span className="text-blue-600">INC</span>
                </h3>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Nettlinx Inc. is a 15-year-old US (registered office in NJ) corporation. We are into software consulting, 
                    network services, application development, outsourcing and managed cloud services. Clients include big 
                    companies like IBM, Microsoft, Vanguard, HCL to name a few.
                  </p>
                  
                  <p>
                    Currently, we are developing a micro ERP application framework. It is aimed at small businesses which 
                    do not need the complex structure that a full-fledged ERP provides. The target market small businesses 
                    which do not have the need or utilize their own IT department. Currently, it is in production with two 
                    pharmaceutical distributors.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold text-blue-900">Key Highlights</span>
                </div>
                <p className="text-sm text-blue-800">
                  Trusted by industry leaders • Innovative ERP solutions • 15+ years of excellence
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Right Image */}
          <div className="relative group">
            {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl opacity-10 group-hover:opacity-20 transition-all duration-300"></div> */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-300">
              <img
                src={I1}
                alt="Nettlinx INC Office"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </motion.div>

        {/* SALION SE */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {/* Left Image */}
          <div className="relative group lg:order-1">
           
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-300">
              <img
                src={I1}
                alt="Salion SE Office"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Right Content */}
          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-300 lg:order-2">
            <CardContent className="p-8 h-full flex flex-col">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 px-4 py-2 font-semibold">
                    <MapPin className="w-4 h-4 mr-2" />
                    Germany
                  </Badge>
                  <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 px-4 py-2 font-semibold">
                    <Building2 className="w-4 h-4 mr-2" />
                    95% Acquired
                  </Badge>
                </div>
                
                <h3 className="text-4xl font-bold text-gray-900 mb-6">
                  SALION <span className="text-purple-600">SE</span>
                </h3>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <strong>Nettlinx acquired 95% of Salion SE of Germany</strong>
                  </p>
                  
                  <p>
                    Salion SE is an asset management company based out of Berlin, Germany. The Corporation manages more 
                    than Euro 1.70 Million investments. It has a specialized team which advises on M & A and financing 
                    of M & A transactions.
                  </p>
                  
                  <p>
                    Nettlinx is investing Half a Million Euros into Salion SE. This strategic investment will help 
                    Nettlinx build a war chest for future acquisitions of High tech companies in the industrial space 
                    in Germany.
                  </p>
                  
                  <p>
                    The Company derives advantage through this route on account of extended leverage it gets in a low 
                    interest country where in the current interest rates are lesser than 2% PA against the interest 
                    rates prevailing in India which hover around 11% PA.
                  </p>
                  
                  <p>
                    Salion SE has excellent credit rating and presently can leverage this investment to the tune of 
                    around Euro 20 Million. For overseeing this new project, Mr. Abraham Joy will be on the supervisory 
                    board of Salion SE to take care of the overall operations along with his team.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border-l-4 border-purple-500">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-purple-600" />
                  <span className="font-semibold text-purple-900">Strategic Advantage</span>
                </div>
                <p className="text-sm text-purple-800">
                  2% Interest Rate vs 11% in India • €20M Leverage Potential • Excellent Credit Rating
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </section>
  );
}
