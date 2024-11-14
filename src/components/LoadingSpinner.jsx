import styles from "../styles/LoadingSpinner.module.css";

const LoadingSpinner = () => {
  return (
    <div className={styles.spinnerWrapper}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoadingSpinner;
