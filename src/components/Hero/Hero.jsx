import styles from "../../styles/Hero/Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.titleWrapper}>
      <h2 className={styles.title}>
        Start your unforgettable journey with us.
      </h2>
      <span className={styles.subTitle}>
        The best travel for your jouney begins now
      </span>
    </div>
  );
};

export default Hero;
