import React, { useEffect } from "react";
import About from "./About";
import HeroSection from "./components/HeroSection";
import Contact from "./Contact";
import { useGlobalContext } from "./context";
import Services from "./Services";

const Home = () => {
  // const data = {
  //     name:"MUKESH",
  //     image:"./images/hero.svg"
  // };

  const { updateHomePage } = useGlobalContext();

  useEffect(() => {
    updateHomePage();
  }, []);
  return <>
   <HeroSection />
   <Services/>
   {/* <About/> */}
   <Contact/>

   </>
};

export default Home;
