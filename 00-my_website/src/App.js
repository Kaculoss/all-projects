import React from "react";
import NavMenu from "./Components/NavMenu";
import Footer from "./Components/Footer";
import { ScrollToBottom, ScrollToTop } from "./Components/ScrollButton";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <ScrollToTop />
        <ScrollToBottom />
        <Footer />
      </Router>
    </>
  );
}

export default App;
