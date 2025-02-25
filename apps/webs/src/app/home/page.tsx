import { HeroSection } from "@/components/HeroSection";
import { NavBar } from "@/components/NavBar";
import { Navigation } from "@/components/Navigation";

const page = () => {
  return (
    <section>
      <NavBar />
      <Navigation />
      <HeroSection />
    </section>
  );
};
export default page;
