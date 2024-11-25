import Logo from "../../assets/Logo";
import styles from "../../styles//Hero/Header.module.css";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <Logo />
      <Navigation />
      <div className={styles.headerButtons}>
        <button className={styles.loginButton}>Log In</button>
        <button className={styles.signupButton}>Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
