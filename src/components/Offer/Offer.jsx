import SectionHeading from "../SectionHeading";
import OfferCard from "./OfferCard";

import styles from "../../styles/Offer/Offer.module.css";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useContext, useEffect } from "react";
import { DestinationsContext } from "../AnimatedRoutes";

const Offer = () => {
  const destinations = useContext(DestinationsContext);

  const [ref, isIntersecting] = useIntersectionObserver();

  useEffect(() => {
    if (isIntersecting) {
      ref.current.classList.add(styles.visible);
    }
  }, [isIntersecting, ref]);

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
