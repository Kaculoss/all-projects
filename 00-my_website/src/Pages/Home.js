import React from "react";
import AboutSection from "../Components/AboutSection";
import HeroSection from "../Components/HeroSection";
import { ScrollToBottom, ScrollToTop } from "../Components/ScrollButton";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ScrollToTop />
      <ScrollToBottom />
    </div>
  );
}
