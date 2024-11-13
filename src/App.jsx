import { useState } from "react";
import "./App.css";
import Header from "./components/Hero/Header";
import Hero from "./components/Hero/Hero";
import HeaderBook from "./components/Hero/HeaderBook";
import HeroSidebar from "./components/Hero/HeroSidebar";

function App() {
  return (
    <>
      <section className="heroWrapper">
        <Header />
        <Hero />
        <HeaderBook />
        <HeroSidebar />
      </section>
    </>
  );
}

export default App;
