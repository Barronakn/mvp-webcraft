'use client'
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import CTASection from "./_components/destination/CTASection";
import Destinations from "./_components/destination/DestinationSection";
import Testimonials from "./_components/testimonials/TestimonialSection";

export default function Home() {
  return (
    <div>
      <Header />
      <Destinations />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
