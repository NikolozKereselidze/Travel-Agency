import styles from "../../styles/Footer/Footer.module.css";

const FooterList = ({ heading, listItems }) => {
  return (
    <div className={styles.list}>
      <h4 className={styles.listHeading}>{heading}</h4>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>
            <a className={styles.links}>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
