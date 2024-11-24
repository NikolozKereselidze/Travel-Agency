import { useState } from "react";
import Logo from "../../assets/Logo";
import styles from "../../styles//Hero/Header.module.css";

const Header = () => {
  const [active, setActive] = useState("Home");

  const handleActiveClick = (page, href) => {
    setActive(page);
    const targetElement = document.querySelector(href);
    targetElement?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const links = [
    { name: "Home", href: "#home" },
    { name: "Explore", href: "#destinations" },
    { name: "Travel", href: "#offer" },
    { name: "Blog", href: "#blog" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <div className={styles.headerWrapper}>
      <Logo />
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
                  handleActiveClick(link.name, link.href);
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
