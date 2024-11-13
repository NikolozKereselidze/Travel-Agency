import berlin from "../../assets/destinations/berlin.jpeg";
import styles from "../../styles/Destinations/DestinationCard.module.css";

const DestinationCard = ({ image, title, location }) => {
  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `linear-gradient(
          0deg,
          rgba(255, 119, 87, 0.1) 0%,
          rgba(255, 119, 87, 0.1) 100%
        ), url(${image})`,
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
