import styles from "../../styles/Destinations/Destinations.module.css";
import DestinationCard from "./DestinationCard";

import berlin from "../../assets/destinations/berlin.webp";
import london from "../../assets/destinations/london.webp";
import venice from "../../assets/destinations/venice.webp";
import lisbon from "../../assets/destinations/lisbon.webp";
import tbilisi from "../../assets/destinations/tbilisi.webp";
import paris from "../../assets/destinations/paris.webp";
import { useEffect, useState } from "react";

const destinations = [
  {
    image: tbilisi,
    title: "Old Tbilisi",
    location: "Tbilisi, Georgia",
  },
  {
    image: paris,
    title: "Eiffel Tower",
    location: "Paris, France",
  },
  {
    image: berlin,
    title: "Monument of Berlin",
    location: "Berlin, Germany",
  },
  {
    image: london,
    title: "Milennium Bridge",
    location: "London, United Kingdom",
  },
  {
    image: venice,
    title: "Rialto Bridge",
    location: "Venice, Italy",
  },
  {
    image: lisbon,
    title: "Sea of Orange Tiles",
    location: "Lisbon, Portugal",
  },
];

const Destinations = () => {
  const [order, setOrder] = useState(destinations);
  const [transitioning, setTransitioning] = useState(false);

  const scrollRight = () => {
    setTransitioning(true);

    setOrder((prevOrder) => {
      const newOrder = [...prevOrder];
      const firstItem = newOrder.shift();
      newOrder.push(firstItem);
      return newOrder;
    });

    setTimeout(() => {
      setTransitioning(false);
    }, 300); // Match the transition duration
  };

  const scrollLeft = () => {
    setTransitioning(true);

    setOrder((prevOrder) => {
      const newOrder = [...prevOrder];
      const lastItem = newOrder.pop();
      newOrder.unshift(lastItem);
      return newOrder;
    });

    setTimeout(() => {
      setTransitioning(false);
    }, 300); // Match the transition duration
  };

  return (
    <>
      <div className={styles.info}>
        <div className={styles.title}>
          <h3 className={styles.destinationTitle}>Popular Destinations</h3>
          <span className={styles.destinationDescription}>
            Most popular destinations around the world, from historical places
            to natural wonders.
          </span>
        </div>
        <div className={styles.icons}>
          <div className={styles.iconWrapper} onClick={scrollLeft}>
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
            onClick={scrollRight}
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
      <div
        className={`${styles.content} ${
          transitioning ? styles.transition : ""
        }`}
      >
        {order.map((destination, index) => (
          <DestinationCard
            key={index}
            image={destination.image}
            title={destination.title}
            location={destination.location}
          />
        ))}
      </div>
    </>
  );
};

export default Destinations;
