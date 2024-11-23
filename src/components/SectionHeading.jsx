/* eslint-disable react/prop-types */
import styles from "../styles/SectionHeading.module.css";

const SectionHeading = ({ title, description }) => {
  return (
    <div className={styles.infoWrapper}>
      <div className={styles.infoContainer}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.description}>{description}</span>
      </div>
    </div>
  );
};

export default SectionHeading;
