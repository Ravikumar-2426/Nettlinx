import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/sections/footer";
import { 
  HeroSection, 
  NettlinxRealty, 
  NettlinxTechnologies, 
  SVGreen, 
  NettlinxINC
} from "@/components/sections/subsidiaries";

export default function Subsidiaries() {
  return (
    <div className="min-h-screen bg-background">
      {/* <Navbar /> */}
      <main>
        <HeroSection />
        <NettlinxRealty />
        <NettlinxTechnologies />
        {/* <SVGreen /> */}
        <NettlinxINC />
      </main>
      {/* <Footer /> */}
    </div>
  );
}