import { HeroSection } from "@/components/HeroSection";
import { OfferSection } from "@/components/Landing/OfferSection";
import { NavBar } from "@/components/NavBar";
import { Navigation } from "@/components/Navigation";
if ("development" === "development") {
  const originalConsoleError = console.error;

  console.error = (...args) => {
    if (
      args[0] &&
      args[0].includes("Encountered two children with the same key")
    ) {
      return;
    }
  };
}

const page = () => {
  return (
    <section>
      <NavBar />
      <Navigation />
      <HeroSection />
      <OfferSection />
    </section>
  );
};
export default page;
