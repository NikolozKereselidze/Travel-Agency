import styles from "../../styles/Hero/HeroSidebar.module.css";

const HeroSidebar = () => {
  const circleNumber = 4;
  return (
    <div className={styles.sidebar}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <circle cx="8" cy="8" r="8" fill="#FF7757" />
      </svg>
      {Array.from({ length: circleNumber }, (_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <circle cx="8" cy="8" r="8" fill="#fff" />
        </svg>
      ))}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="8"
        viewBox="0 0 16 8"
        fill="none"
      >
        <path
          d="M15 7L8 0.999999L1 7"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <a href="#destinations">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="8"
          viewBox="0 0 16 8"
          fill="none"
        >
          <path
            d="M1 1L8 7L15 1"
            stroke="#FF7757"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
};

export default HeroSidebar;
