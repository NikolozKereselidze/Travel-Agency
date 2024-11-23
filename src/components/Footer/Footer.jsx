import styles from "../../styles/Footer/Footer.module.css";
import logo from "../../assets/logo.svg";
import FooterList from "./FooterList";
import NewsLetter from "./Newsletter";

const Footer = () => {
  const list = [
    {
      heading: "Menu",
      listItems: ["Home", "Explore", "Travel", "Blog", "Testimonials"],
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
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <span>Copyright © Travellian 2024 All rights reserved</span>
        </div>
        {list.map((el) => (
          <FooterList
            key={el.heading}
            heading={el.heading}
            listItems={el.listItems}
          />
        ))}
        <NewsLetter />
      </div>
    </div>
  );
};

export default Footer;
