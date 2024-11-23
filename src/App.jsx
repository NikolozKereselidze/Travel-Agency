import { Suspense, lazy } from "react";
import "./App.css";
import LoadingSpinner from "./components/LoadingSpinner";
import Offer from "./components/Offer/Offer";
import Blog from "./components/Blog/Blog";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

const Header = lazy(() => import("./components/Hero/Header"));
const Hero = lazy(() => import("./components/Hero/Hero"));
const HeaderBook = lazy(() => import("./components/Hero/HeaderBook"));
const HeroSidebar = lazy(() => import("./components/Hero/HeroSidebar"));
const Destinations = lazy(() =>
  import("./components/Destinations/Destinations")
);

function App() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <section className="heroWrapper" id="home">
          <Header />
          <Hero />
          <HeaderBook />
          <HeroSidebar />
        </section>
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <section className="sectionsWrapper" id="destinations">
          <Destinations />
        </section>
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <section className="sectionsWrapper" id="offer">
          <Offer />
        </section>
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <section className="sectionsWrapper" id="blog">
          <Blog />
        </section>
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <section className="sectionsWrapper" id="testimonials">
          <Testimonials />
        </section>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
