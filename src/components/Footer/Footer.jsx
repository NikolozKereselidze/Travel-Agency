import styles from "../../styles/Footer/Footer.module.css";
// import logo from "../../assets/logo.svg";
import Logo from "../../assets/Logo";
import FooterList from "./FooterList";
import NewsLetter from "./Newsletter";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useEffect } from "react";

const Footer = () => {
  const [ref, isIntersecting] = useIntersectionObserver();

  const list = [
    {
      heading: "Menu",
      listItems: ["Home", "Destinations", "Offer", "Blog", "Testimonials"],
      hrefs: true,
    },
    {
      heading: "Information",
      listItems: ["Destinations", "Supports", "Terms & Conditions", "Privacy"],
    },
    {
      heading: "Contact Info",
      listItems: [
        "+123 456 789",
        "kereselide.nikoloz7@gmail.com",
        "1245, Tbilisi, Georgia",
      ],
    },
  ];

  useEffect(() => {
    if (isIntersecting) {
      ref.current.classList.add(styles.visible);
    }
  }, [isIntersecting, ref]);

  return (
    <div
      ref={ref}
      className={`${styles.footer} ${isIntersecting ? "animate" : ""}`}
    >
      <div className={styles.content}>
        <div className={styles.logo}>
          <Logo />
          <span>Copyright © Travellian 2024 All rights reserved</span>
        </div>
        {list.map((el) => (
          <FooterList
            key={el.heading}
            heading={el.heading}
            listItems={el.listItems}
            hrefs={el.hrefs}
          />
        ))}
        <NewsLetter />
      </div>
    </div>
  );
};

export default Footer;
