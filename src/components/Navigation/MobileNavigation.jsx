import { useState } from "react";
import Logo from "../../assets/Logo";
import styles from "../../styles/Navigation/MobileNavigation.module.css";
import Navigation from "./Navigation";

const MobileNavigation = () => {
  const [openModal, setOpenModal] = useState(false);

  const modalHandler = () => {
    setOpenModal((prev) => !prev);
  };

  
  return (
    <>
      {openModal ? (
        <Navigation
          mobile={true}
          openModal={openModal}
          modalHandler={modalHandler}
        />
      ) : (
        ""
      )}
      <div className={styles.navWrapper}>
        <Logo />
        <i
          className={`fa-regular fa-bars ${styles.navIcon}`}
          onClick={modalHandler}
        ></i>
      </div>
      <div className={styles.navigation}></div>
    </>
  );
};

export default MobileNavigation;
