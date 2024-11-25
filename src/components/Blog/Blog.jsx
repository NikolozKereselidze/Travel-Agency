import styles from "../../styles/Blog/Blog.module.css";
import SectionHeading from "../SectionHeading";
import cinnqueTerre from "../../assets/destinations/cinqueTerre.webp";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useEffect } from "react";

const Blog = () => {
  const [ref, isIntersecting] = useIntersectionObserver();

  useEffect(() => {
    if (isIntersecting) {
      ref.current.classList.add(styles.visible);
    }
  }, [isIntersecting, ref]);

  return (
    <div
      ref={ref}
      className={`${styles.blogContainer} ${isIntersecting ? "animate" : ""}`}
    >
      <SectionHeading
        title="Our Blog"
        description="An insight the incredible experience in the world"
      />
      <div className={styles.blogWrapper}>
        <div className={styles.imgWrapper}>
          <img src={cinnqueTerre} />
        </div>
        <div className={styles.description}>
          <h3>
            Beautiful Italy <br></br> Let's travel
          </h3>
          <p>
            Embark on a journey through the heart of Italy with our blog,
            Beautiful Italy: Let's Travel. Discover the charm of cobblestone
            streets, the aroma of freshly baked pizza, and the allure of rolling
            Tuscan hills. From iconic landmarks like the Colosseum and Venice's
            canals to hidden villages waiting to be explored, we bring you the
            magic of Italy through captivating stories and insider tips. Whether
            you're dreaming of a getaway or planning your next adventure, let us
            inspire you to experience the beauty and culture of Italy like never
            before!
          </p>
          <button className={styles.readMore}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
