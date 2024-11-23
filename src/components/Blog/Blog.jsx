import styles from "../../styles/Blog/Blog.module.css";
import SectionHeading from "../SectionHeading";
import cinnqueTerre from "../../assets/destinations/cinqueTerre.webp";

const Blog = () => {
  return (
    <div className={styles.blogContainer}>
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
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system and expound the actual teachings of the great
            explorer of the truth, the master- builder of human happiness. No
            one rejects, dislike, or avoids plasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremly painful. Nor
            again is there anyone who loves or pursues.
          </p>
          <button className={styles.readMore}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
