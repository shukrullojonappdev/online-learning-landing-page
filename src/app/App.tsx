import React from "react";
import "./App.scss";
import About from "./components/about/About.component";
import AllInOne from "./components/allInOne/AllInOne.component";
import Companies from "./components/companies/Companies.component";
import Header from "./components/header/Header.component";
import Home from "./components/home/Home.component";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Companies />
      <AllInOne />
      <About />
    </>
  );
};

export default App;
