import { Suspense, lazy } from "react";
import "./App.css";
import LoadingSpinner from "./components/LoadingSpinner";

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
        <section className="destinationsWrapper" id="destinations">
          <Destinations />
        </section>
      </Suspense>
    </>
  );
}

export default App;
