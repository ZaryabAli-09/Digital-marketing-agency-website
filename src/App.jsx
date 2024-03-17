import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Header from "./containers/header/Header";
import "./App.css";
import Brand from "./components/brand/Brand";
import Possibility from "./containers/possibility/Possibility";
import CTA from "./components/cta/CTA";
import Footer from "./containers/footer/Footer";
import Blog from "./containers/blog/Blog";
import Cards from "./components/cards/Cards";
// animation library
import Aos from "aos";
import "aos/dist/aos.css";
const App = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <div className="gradient__bg" data-aos="fade-down">
        <Navbar />
        <div data-aos="fade-left">
          <Header />
        </div>
      </div>
      <div data-aos="fade-right">
        <Brand />
      </div>
      <div data-aos="zoom-in">
        <Cards />
      </div>
      <div data-aos="zoom-out">
        <Possibility />
      </div>
      <div data-aos="fade-left">
        <CTA />
      </div>
      <div data-aos="fade-right">
        <Blog />
      </div>
      <div data-aos="fade-left">
        <Footer />
      </div>
    </div>
  );
};

export default App;
