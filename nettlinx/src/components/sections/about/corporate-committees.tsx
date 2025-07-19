import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Heart } from "lucide-react";

const committees = [
  {
    name: "Audit Committee",
    chairman: "Mr. Jeeten Anil Desai",
    members: ["Mr. Vijay Kumar Maistry", "Mr. Amarender Reddy Bandaru"],
    icon: Shield
  },
  {
    name: "Nomination & Remuneration Committee",
    chairman: "Mr. Jeeten Anil Desai",
    members: ["Mr. Vijay Kumar Maistry", "Mr. Amarender Reddy Bandaru"],
    icon: Users
  },
  {
    name: "Shareholders Relationship Committee",
    chairman: "Mr. Jeeten Anil Desai",
    members: ["Mr. Vijay Kumar Maistry", "Mr. Amarender Reddy Bandaru"],
    icon: Heart
  },
  {
    name: "Risk Management Committee",
    chairman: "Mr. Jeeten Anil Desai",
    members: ["Mr. Vijay Kumar Maistry", "Mr. Amarender Reddy Bandaru"],
    icon: Shield
  },
  {
    name: "Corporate Social Responsibility Committee",
    chairman: "Mr. Jeeten Anil Desai",
    members: ["Mr. Vijay Kumar Maistry", "Mr. Amarender Reddy Bandaru"],
    icon: Heart
  }
];

export default function CorporateCommittees() {
  return (
    <section id="committees" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Corporate Committees</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Structured governance ensuring transparency, accountability, and strategic oversight
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {committees.map((committee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-premium border-0 hover-lift h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <committee.icon className="w-8 h-8 text-primary mr-3" />
                    <h3 className="text-lg font-bold">{committee.name}</h3>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm font-semibold text-primary">Chairman</p>
                      <p className="text-sm text-muted-foreground">{committee.chairman}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary">Members</p>
                      <div className="text-sm text-muted-foreground space-y-1">
                        {committee.members.map((member, memberIndex) => (
                          <p key={memberIndex}>{member}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}