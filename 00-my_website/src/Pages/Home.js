import React from "react";
import HeroSection from "../Components/HeroSection";
import { ScrollToBottom, ScrollToTop } from "../Components/ScrollButton";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ScrollToTop />
      <ScrollToBottom />
    </div>
  );
}
