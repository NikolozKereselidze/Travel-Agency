import { useState } from "react";
import styles from "../../styles/Footer/Footer.module.css";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Email submitted:", email);
    setEmail("");
  };

  return (
    <div className={styles.newsletter}>
      <h2 className={styles.newsletterHeading}>Our Newsletter</h2>
      <form className={styles.formSubmit} onSubmit={handleSubmit}>
        <div className={styles.input}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.submitButton}>
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </div>
  );
};

export default NewsLetter;
