import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ModernHeroSection from "@/components/ModernHeroSection";
import TrustSection from "@/components/TrustSection";
import VisualStorySection from "@/components/VisualStorySection";
import InteractiveMapSection from "@/components/InteractiveMapSection";
import TestimonialSection from "@/components/TestimonialSection";
import CallToActionSection from "@/components/CallToActionSection";
import StatsSection from "@/components/StatsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ModernHeroSection />
        <TrustSection />
        <StatsSection />
        <VisualStorySection />
        <InteractiveMapSection />
        <TestimonialSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
