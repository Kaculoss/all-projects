import React from "react";
import AboutSection from "../Components/AboutSection";
import HeroSection from "../Components/HeroSection";
import ProjectSection from "../Components/ProjectSection";
import ServiceSection from "../Components/ServiceSection";
import ContactSection from "../Components/ContactSection";
import { ScrollToBottom, ScrollToTop } from "../Components/ScrollButton";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <ContactSection />
      <ScrollToTop />
      <ScrollToBottom />
      <Footer />
    </div>
  );
}
