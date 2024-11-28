import SectionHeading from "../SectionHeading";
import OfferCard from "./OfferCard";
import styles from "../../styles/Offer/Offer.module.css";
import { useContext, useEffect } from "react";
import { DestinationsContext } from "../AnimatedRoutes";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const Offer = () => {
  const [ref, isIntersecting] = useIntersectionObserver();
  const { destinations } = useContext(DestinationsContext);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.classList.add(styles.visible);
    }
  }, [isIntersecting, ref]);

  return (
    <div
      className={`${styles.offerWrapper} ${isIntersecting ? "animate" : ""}`}
      ref={ref}
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
            plan={destination.plan}
            benefits={destination.benefits}
            icons={destination.icons}
          />
        ))}
      </div>
    </div>
  );
};

export default Offer;
