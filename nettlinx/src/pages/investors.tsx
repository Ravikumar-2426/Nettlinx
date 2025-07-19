import { useLocation } from "wouter";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/sections/footer";
import { InvestorRelationsMain } from "@/components/sections/investor-relations";

export default function Investors() {
  const [location] = useLocation();
  
  // Extract section from URL hash
  const getInitialSection = () => {
    if (location.includes('#')) {
      return location.split('#')[1];
    }
    return 'annual-reports';
  };

  const initialSection = getInitialSection();

  return (
    <div className="min-h-screen bg-background">
      <main>
        <InvestorRelationsMain initialSection={initialSection} />
      </main>
    </div>
  );
}