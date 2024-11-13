import { useState } from "react";
import logo from "../../assets/logo.svg";
import styles from "../../styles/Header.module.css";

const Header = () => {
  const [active, setActive] = useState("Home");

  const handleActiveClick = (page) => {
    setActive(page);
  };

  const links = [
    { name: "Home", href: "" },
    { name: "Explore", href: "" },
    { name: "Travel", href: "" },
    { name: "Blog", href: "" },
    { name: "Pricing", href: "" },
  ];

  return (
    <div className={styles.headerWrapper}>
      <img src={logo} alt="logo" />
      <div>
        <ul className={styles.headerLinksWrapper}>
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className={`${styles.headerLink} ${
                  active === link.name ? styles.active : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleActiveClick(link.name);
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.headerButtons}>
        <button className={styles.loginButton}>Log In</button>
        <button className={styles.signupButton}>Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
