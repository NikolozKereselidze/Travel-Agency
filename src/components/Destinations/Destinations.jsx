import { useEffect, useState } from "react";
import styles from "../../styles/Destinations/Destinations.module.css";
import DestinationCard from "./DestinationCard";
import SectionHeading from "../SectionHeading";

import berlin from "../../assets/destinations/berlin.webp";
import london from "../../assets/destinations/london.webp";
import venice from "../../assets/destinations/venice.webp";
import lisbon from "../../assets/destinations/lisbon.webp";
import tbilisi from "../../assets/destinations/tbilisi.webp";
import paris from "../../assets/destinations/paris.webp";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Destinations = () => {
  const [ref, isIntersecting] = useIntersectionObserver();

  useEffect(() => {
    if (isIntersecting) {
      ref.current.classList.add(styles.visible);
    }
  }, [isIntersecting, ref]);

  const destinations = [
    { image: tbilisi, title: "Old Tbilisi", location: "Tbilisi, Georgia" },
    { image: paris, title: "Eiffel Tower", location: "Paris, France" },
    { image: berlin, title: "Monument of Berlin", location: "Berlin, Germany" },
    {
      image: london,
      title: "Milennium Bridge",
      location: "London, United Kingdom",
    },
    { image: venice, title: "Rialto Bridge", location: "Venice, Italy" },
    {
      image: lisbon,
      title: "Sea of Orange Tiles",
      location: "Lisbon, Portugal",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 3;

  const handleNext = () => {
    if (destinations.length - startIndex <= cardsToShow) return;
    setStartIndex((prev) => (prev + 1 >= destinations.length ? 0 : prev + 1));
  };

  const handlePrev = () => {
    if (startIndex === 0) return;
    setStartIndex((prev) =>
      prev - 1 < 0 ? destinations.length - 1 : prev - 1
    );
  };

  return (
    <>
      <div
        ref={ref}
        className={`${styles.info} ${isIntersecting ? "animate" : ""}`}
      >
        <SectionHeading
          title="Popular Destinations"
          description="Most popular destinations around the world, from historical places to natural wonders."
        />
        <div className={styles.icons}>
          <div className={styles.iconWrapper} onClick={handlePrev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="22"
              viewBox="0 0 12 22"
              fill="#000"
            >
              <path
                d="M11 1L1 11L11 21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            className={`${styles.iconWrapper} ${styles.orangeIcon}`}
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="22"
              viewBox="0 0 12 22"
              fill="#ff7757"
            >
              <path
                d="M1 21L11 11L0.999999 1"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.carouselWrapper}>
        <div
          className={styles.content}
          style={{
            transform: `translateX(-${startIndex * (100 / cardsToShow)}%)`,
          }}
        >
          {destinations.map((destination, index) => (
            <DestinationCard
              key={`${destination.title}-${index}`}
              image={destination.image}
              title={destination.title}
              location={destination.location}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Destinations;
