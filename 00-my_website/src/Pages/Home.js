import React from "react";
import AboutSection from "../Components/AboutSection";
import HeroSection from "../Components/HeroSection";
import ProjectSection from "../Components/ProjectSection";
import { ScrollToBottom, ScrollToTop } from "../Components/ScrollButton";
import ServiceSection from "../Components/ServiceSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <ScrollToTop />
      <ScrollToBottom />
    </div>
  );
}
