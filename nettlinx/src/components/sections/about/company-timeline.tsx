import * as React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import {
  Building2,
  Network,
  MapPin,
  TrendingUp,
  Shield,
  Users,
  Star,
} from "lucide-react";

const milestones = [
  {
    year: "1999",
    event: "Founded Nettlinx Limited as a Class B ISP",
    details:
      "Started operations in Hyderabad and quickly expanded to serve enterprises across Telangana and Andhra Pradesh, offering converged Data, Voice & Video services :contentReference[oaicite:1]{index=1}",
    icon: Building2,
  },
  {
    year: "2003",
    event: "Launched first fiber‑based network in Hyderabad",
    details:
      "Introduced state‑of‑the‑art fiber broadband and enterprise-grade leased‑line connectivity to meet growing business demands",
    icon: Network,
  },
  {
    year: "2008",
    event: "Expanded services across Andhra Pradesh",
    details:
      "Set up branches in Vijayawada, Visakhapatnam, Nellore and other districts to strengthen regional presence :contentReference[oaicite:2]{index=2}",
    icon: MapPin,
  },
  {
    year: "2015",
    event: "Listed on BSE (Code 511658)",
    details:
      "Became a publicly listed company on the Bombay Stock Exchange, enhancing transparency and corporate governance :contentReference[oaicite:3]{index=3}",
    icon: TrendingUp,
  },
  {
    year: "2020",
    event: "Deployed AI‑powered surveillance & security networks",
    details:
      "Rolled out advanced AI-driven surveillance solutions tailored for smart cities and enterprise security :contentReference[oaicite:4]{index=4}",
    icon: Shield,
  },
  {
    year: "2024",
    event: "Surpassed 10,000+ enterprise customers",
    details:
      "Crossed a major milestone by serving over 10,000 businesses with robust, high-speed infrastructure across Telangana & Andhra Pradesh :contentReference[oaicite:5]{index=5}",
    icon: Users,
  },
];


export default function NettlinxTimeline() {
  return (
    <section className="py-16 bg-white" id="journey">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold gradient-text">Our Journey</h2>
        <p className="text-muted-foreground text-lg mt-2">
          Milestones of innovation, expansion, and digital transformation
        </p>
      </div>

      <VerticalTimeline lineColor="#ff8e00">
        {milestones.map((milestone, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#194cb2", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #194cb2" }}
            date={milestone.year}
            iconStyle={{
              background: "#ff8e00",
              color: "#fff",
            }}
            icon={<milestone.icon size={20} />}
          >
            <h3 className="vertical-timeline-element-title font-semibold text-white">
              {milestone.event}
            </h3>
          </VerticalTimelineElement>
        ))}

        <VerticalTimelineElement
          iconStyle={{ background: "#194cb2", color: "#fff" }}
          icon={<Star size={20} />}
        />
      </VerticalTimeline>
    </section>
  );
}
