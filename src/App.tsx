import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import About from "@/components/About";
import Project from "./components/Project";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import "./App.css";

function App() {
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
