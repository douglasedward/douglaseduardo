import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import About from "@/components/About";
import Project from "./components/Project";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import { useEffect } from "react";
import { mixpanel } from "@/lib/mixpanel";

import "./App.css";

function App() {
  useEffect(() => {
    mixpanel.track("Page View", { page: "Home" });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Carousel />
      <About />
      <Project />
      <Contact />
    </>
  );
}

export default App;
