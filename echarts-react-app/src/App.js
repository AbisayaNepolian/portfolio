import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {

const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

reveals.forEach(el => {

const windowHeight = window.innerHeight;
const top = el.getBoundingClientRect().top;

if(top < windowHeight - 100){
el.classList.add("active");
}

});

};

window.addEventListener("scroll", revealOnScroll);

}, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;