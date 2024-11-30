// src/components/pages/ErrorPage.jsx
import { Link } from "react-router-dom";
import styles from "../../styles/ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to="/" className={styles.homeLink}>
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
