import { useRef, useState } from "react";
import styles from "../../styles/Offer/OfferCard.module.css";
import { Link } from "react-router-dom";

const OfferCard = ({ location, image, starsCount, description, price }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef(null);

  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img
          ref={imageRef}
          src={image}
          alt={`${location}`}
          loading="lazy"
          decoding="async"
          onLoad={() => setImageLoaded(true)}
          className={`${styles.image} ${imageLoaded ? styles.loaded : ""}`}
        />
        {!imageLoaded && <div className={styles.skeleton}></div>}
      </div>
      <div className={styles.details}>
        <div className="heading">
          <h3 className={styles.location}>{location}</h3>
          <div className={styles.stars}>
            {Array.from({ length: starsCount }).map((_, key) => (
              <i key={key} className={`fa-solid fa-star ${styles.star}`}></i>
            ))}
          </div>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.priceWrapper}>
          <div className={styles.price}>
            <span className={styles.priceLabel}>From</span>
            <span className={styles.priceValue}>{price}</span>
          </div>
          <h3 className={`${styles.info}`}>
            <Link to="/trip" className={styles.info}>
              Details
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
