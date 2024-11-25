import { Suspense, lazy, useEffect, useState } from "react";
import "./App.css";
import LoadingSpinner from "./components/LoadingSpinner";
import Offer from "./components/Offer/Offer";
import Blog from "./components/Blog/Blog";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import MobileNavigation from "./components/Navigation/MobileNavigation.jsx";

const Header = lazy(() => import("./components/Hero/Header"));
const Hero = lazy(() => import("./components/Hero/Hero"));
const HeaderBook = lazy(() => import("./components/Hero/HeaderBook"));

const Destinations = lazy(() =>
  import("./components/Destinations/Destinations")
);

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
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
        <section className="sectionsWrapper" id="blog">
          <Blog />
        </section>
        <section className="sectionsWrapper" id="testimonials">
          <Testimonials />
        </section>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
