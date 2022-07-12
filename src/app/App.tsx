import React from "react";
import "./App.scss";
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
    </>
  );
};

export default App;
