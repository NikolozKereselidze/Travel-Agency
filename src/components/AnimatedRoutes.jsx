import { Routes, Route, useLocation } from "react-router-dom";
import Trip from "./pages/Trip/Trip.jsx";
import HomeLayout from "./pages/HomeLayout.jsx";
import { AnimatePresence } from "framer-motion";
import { useLayoutEffect } from "react";
import kyoto from "../assets/destinations/kyoto.webp";
import rome from "../assets/destinations/rome.webp";
import tokyo from "../assets/destinations/tokyo.webp";
import { createContext } from "react";

const Wrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};

const destinations = [
  {
    image: kyoto,
    location: "Kyoto, Japan",
    starsCount: 5,
    description:
      "4 nights and 3 days in a serene 5-star ryokan, breakfast and a multi-course kaiseki lunch included. Discover the harmony of tradition and nature as you explore the Arashiyama Bamboo Grove, visit golden temples, and sip matcha in a teahouse overlooking tranquil gardens.",
    price: "$1,800",
  },
  {
    image: rome,
    location: "Rome, Italy",
    starsCount: 5,
    description:
      "6 nights and 5 days in a luxurious 5-star hotel, breakfast and Roman-inspired lunches included. Walk through centuries of history from the grandeur of the Colosseum to the charm of piazzas. Every corner tells a story of art, love, and triumph from the Renaissance and beyond.",
    price: "$2,400",
  },
  {
    image: tokyo,
    location: "Tokyo, Japan",
    starsCount: 5,
    description:
      "7 nights and 6 days in a modern 5-star hotel with breakfast and curated Japanese lunches. Dive into the neon-lit streets of Shinjuku, experience the cultural contrasts of Meiji Shrine and Akihabara, and savor sushi at world-renowned markets for an unforgettable urban adventure.",
    price: "$3,200",
  },
];
export const DestinationsContext = createContext();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <DestinationsContext.Provider value={destinations}>
      <AnimatePresence>
        <Wrapper>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/trip" element={<Trip />} />
          </Routes>
        </Wrapper>
      </AnimatePresence>
    </DestinationsContext.Provider>
  );
};

export default AnimatedRoutes;
