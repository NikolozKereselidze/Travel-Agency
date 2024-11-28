import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MobileNavigation from "../Navigation/MobileNavigation.jsx";
import Offer from "../Offer/Offer";
import Blog from "../Blog/Blog";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import Header from "../Hero/Header";
import Hero from "../Hero/Hero";
import HeaderBook from "../Hero/HeaderBook";
import Destinations from "../Destinations/Destinations";

const HomeLayout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <section className="heroWrapper" id="home">
        {isMobile ? <MobileNavigation /> : <Header />}
        <Hero />
        <HeaderBook />
      </section>
      <section
        className="sectionsWrapper destinationsSection"
        id="destinations"
      >
        <Destinations />
      </section>
      <section className="sectionsWrapper" id="offer">
        <Offer />
      </section>
      <section className="sectionsWrapper" id="testimonials">
        <Testimonials />
      </section>
      <section className="sectionsWrapper" id="blog">
        <Blog />
      </section>
      <Footer />
    </motion.div>
  );
};

export default HomeLayout;
