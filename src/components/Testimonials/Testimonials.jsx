import { useEffect } from "react";
import styles from "../../styles/Testimonials/Testimonials.module.css";
import SectionHeading from "../SectionHeading";
import TestimonialsCard from "./TestimonialsCard";
import johnStevens from "../../assets/avatars/johnStevens.webp";
import mariaGarcia from "../../assets/avatars/mariaGarcia.webp";
import davidLee from "../../assets/avatars/davidLee.webp";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Testimonials = () => {
  const [ref, isIntersecting] = useIntersectionObserver();

  useEffect(() => {
    if (isIntersecting) {
      ref.current.classList.add(styles.visible);
    }
  }, [isIntersecting, ref]);

  const testimonials = [
    {
      image: johnStevens,
      comment:
        "Working with this travel agency was a game-changer for our company retreat. The planning was seamless, and every detail was taken care of. Highly recommend for both business and leisure trips!",
      author: "John Stevens",
      workplace: "Marketing Manager at TechVision Corp",
    },
    {
      image: mariaGarcia,
      comment:
        "Working with this travel agency was a game-changer for our company retreat. The planning was seamless, and every detail was taken care of. Highly recommend for both business and leisure trips!",
      author: "John Stevens",
      workplace: "Marketing Manager at TechVision Corp",
    },
    {
      image: davidLee,
      comment:
        "Working with this travel agency was a game-changer for our company retreat. The planning was seamless, and every detail was taken care of. Highly recommend for both business and leisure trips!",
      author: "John Stevens",
      workplace: "Marketing Manager at TechVision Corp",
    },
  ];

  return (
    <div
      ref={ref}
      className={`${styles.testimonialsSection} ${
        isIntersecting ? styles.animate : ""
      }`}
    >
      <SectionHeading
        title="Traveler’s Experiences"
        description="Here some awesome feedback from our travelers"
      />
      <div className={styles.testimonialsWrapper}>
        {testimonials.map((testimonial, index) => (
          <TestimonialsCard
            key={`${testimonial.author}-${index}`}
            image={testimonial.image}
            comment={testimonial.comment}
            author={testimonial.author}
            workplace={testimonial.workplace}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
