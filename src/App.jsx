import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductViewer from "./components/ProductViewer";
import ShowCase from "./components/ShowCase";
import gsap from "gsap";
import Performance from "./components/Performance";
import Footer from "./components/Footer.jsx";
import Highlights from "./components/Highlights.jsx";
import Features from "./components/Features.jsx";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
      <ShowCase />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
    </main>
  );
};

export default App;
