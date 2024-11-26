import styles from "../../styles/Footer/Footer.module.css";

const FooterList = ({ heading, listItems, hrefs }) => {
  return (
    <div className={styles.list}>
      <h4 className={styles.listHeading}>{heading}</h4>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>
            {hrefs ? (
              <a className={styles.links} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ) : item.includes("@") ? (
              <a className={styles.links} href={`mailto:${item}`}>
                {item}
              </a>
            ) : (
              <span className={styles.links}>{item}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
