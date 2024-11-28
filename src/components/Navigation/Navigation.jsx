import { useEffect, useState } from "react";
import styles from "../../styles/Navigation/Navigation.module.css";

const Navigation = ({ mobile, openModal, modalHandler }) => {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    if (mobile) {
      document.documentElement.style.overflowY = openModal ? "hidden" : "";
    }
  }, [mobile, openModal]);

  const handleActiveClick = (page, href) => {
    setActive(page);
    const targetElement = document.querySelector(href);
    targetElement?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const links = [
    { name: "Home", href: "#home" },
    { name: "Explore", href: "#destinations" },
    { name: "Travel", href: "#offer" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <ul
      className={`${styles.headerLinksWrapper} ${
        mobile
          ? `${styles.mobile} ${openModal ? styles.open : styles.close}`
          : ""
      }`}
    >
      {mobile ? (
        <i
          className={`fa-regular fa-x ${styles.closeIcon}`}
          onClick={modalHandler}
        ></i>
      ) : (
        ""
      )}
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
              openModal && modalHandler();
            }}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
