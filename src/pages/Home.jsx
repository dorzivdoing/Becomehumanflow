import Navbar from "@/components/clinic/Navbar";
import HeroSection from "@/components/clinic/HeroSection";
import QuoteSection from "@/components/clinic/QuoteSection";
import ServicesSection from "@/components/clinic/ServicesSection";
import ApproachSection from "@/components/clinic/ApproachSection";
import AboutSection from "@/components/clinic/AboutSection";
import BookingSection from "@/components/clinic/BookingSection";
import ContactSection from "@/components/clinic/ContactSection";
import Footer from "@/components/clinic/Footer";

export default function Home() {
  return (
    <div className="font-heebo" dir="rtl">
      <Navbar />
      <HeroSection />
      <QuoteSection />
      <ServicesSection />
      <ApproachSection />
      <AboutSection />
      <BookingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}