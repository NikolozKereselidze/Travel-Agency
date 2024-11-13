import { useState } from "react";
import "./App.css";
import Header from "./components/Hero/Header";
import Hero from "./components/Hero/Hero";
import HeaderBook from "./components/Hero/HeaderBook";
import HeroSidebar from "./components/Hero/HeroSidebar";
import Destinations from "./components/Destinations/Destinations";

function App() {
  return (
    <>
      <section className="heroWrapper" id="home">
        <Header />
        <Hero />
        <HeaderBook />
        <HeroSidebar />
      </section>
      <section className="destinationsWrapper" id="destinations">
        <Destinations />
      </section>
    </>
  );
}

export default App;
