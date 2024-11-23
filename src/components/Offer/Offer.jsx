import SectionHeading from "../SectionHeading";
import OfferCard from "./OfferCard";

import styles from "../../styles/Offer/Offer.module.css";
import kyoto from "../../assets/destinations/kyoto.webp";
import rome from "../../assets/destinations/rome.webp";
import tokyo from "../../assets/destinations/tokyo.webp";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useEffect } from "react";

const Offer = () => {
  const [ref, isIntersecting] = useIntersectionObserver();

  useEffect(() => {
    if (isIntersecting) {
      ref.current.classList.add(styles.visible);
    }
  }, [isIntersecting, ref]);

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
  return (
    <div
      ref={ref}
      className={`${styles.offerWrapper} ${isIntersecting ? "animate" : ""}`}
    >
      <SectionHeading
        title="Special Offer"
        description="check out our special offer and discounts"
      />
      <div className={styles.cardWrapper}>
        {destinations.map((destination, index) => (
          <OfferCard
            key={`${destination.location}-${index}`}
            image={destination.image}
            location={destination.location}
            starsCount={destination.starsCount}
            description={destination.description}
            price={destination.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Offer;
