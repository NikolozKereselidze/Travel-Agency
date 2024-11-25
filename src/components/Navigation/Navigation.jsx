import { useEffect, useState } from "react";
import styles from "../../styles/Navigation/Navigation.module.css";
import HeroSidebar from "../Hero/HeroSidebar.jsx";

const Navigation = ({ mobile, openModal, modalHandler }) => {
  const [active, setActive] = useState("Home");

  console.log(mobile);

  useEffect(() => {
    if (mobile) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "";
    }
    return () => {
      document.documentElement.style.overflowY = "";
    };
  }, [mobile]);

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
    <>
      <ul
        className={`${styles.headerLinksWrapper} ${
          mobile ? styles.mobile : ""
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

      {mobile ? "" : <HeroSidebar />}
    </>
  );
};

export default Navigation;
