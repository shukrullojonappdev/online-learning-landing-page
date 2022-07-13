import React from "react";
import "./App.scss";
import About from "./components/about/About.component";
import AllInOne from "./components/allInOne/AllInOne.component";
import Companies from "./components/companies/Companies.component";
import Features from "./components/features/Features.component";
import Footer from "./components/footer/Footer.component";
import Header from "./components/header/Header.component";
import Home from "./components/home/Home.component";
import Integrations from "./components/integrations/Integrations.component";
import News from "./components/news/News.component";
import Testimonial from "./components/testimonial/Testimonial.component";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Companies />
      <AllInOne />
      <About />
      <Features />
      <Integrations />
      <Testimonial />
      <News />
      <Footer />
    </>
  );
};

export default App;
