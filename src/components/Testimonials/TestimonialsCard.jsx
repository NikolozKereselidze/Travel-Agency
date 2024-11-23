import styles from "../../styles/Testimonials/TestimonialsCard.module.css";

const TestimonialsCard = ({ image, comment, author, workplace }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="" className={styles.img} />
      <p className={styles.comment}>{comment}</p>
      <div className={styles.stars}>
        <i className={`fa-solid fa-star ${styles.star}`}></i>
        <i className={`fa-solid fa-star ${styles.star}`}></i>
        <i className={`fa-solid fa-star ${styles.star}`}></i>
        <i className={`fa-solid fa-star ${styles.star}`}></i>
        <i className={`fa-solid fa-star ${styles.star}`}></i>
      </div>
      <div>
        <h4 className={styles.author}>{author}</h4>
        <h5 className={styles.workplace}>{workplace}</h5>
      </div>
    </div>
  );
};
export default TestimonialsCard;
