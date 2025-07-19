import {
  HeroSection,
  CompanyOverview,
  BoardOfDirectors,
  CorporateCommittees,
  OurClients,
  CompanyTimeline,
  MissionVision,
  CallToAction
} from "@/components/sections/about";
// import Careers from "@/components/sections/resources/careers";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <HeroSection />
      <CompanyOverview />
      <BoardOfDirectors />
      <CorporateCommittees />
      
      {/* <CSRPartnerships /> */}
      {/* <Careers /> */}
      {/* <CompanyStatistics /> */}
      <CompanyTimeline />
      <OurClients />
      {/* <MissionVision /> */}
      {/* <CallToAction /> */}
    </div>
  );
}