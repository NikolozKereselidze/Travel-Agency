import { useEffect, useState } from "react";
import styles from "../../styles/Destinations/DestinationCard.module.css";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

const DestinationCard = ({ image, title, location }) => {
  const [loadedImage, setLoadedImage] = useState("");
  const [ref, isIntersecting] = useIntersectionObserver({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (isIntersecting) {
      setLoadedImage(image); // Load the image when the card is visible
    }
  }, [isIntersecting, image]);

  return (
    <div
      ref={ref}
      className={styles.card}
      style={{
        backgroundImage: loadedImage
          ? `linear-gradient(
            0deg,
            rgba(255, 119, 87, 0.1) 0%,
            rgba(255, 119, 87, 0.1) 100%
          ), url(${loadedImage})`
          : "none", // Empty background until the image is loaded
      }}
    >
      <div className={styles.imgInfo}>
        <h4 className={styles.imgTitle}>{title}</h4>
        <span className={styles.imgSubtitle}>
          <i className="fa-solid fa-location-dot"></i>
          {location}
        </span>
      </div>
    </div>
  );
};

export default DestinationCard;
