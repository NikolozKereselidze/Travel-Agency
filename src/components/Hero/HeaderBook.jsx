import { useState } from "react";
import styles from "../../styles/Hero/HeaderBook.module.css";

const HeaderBook = () => {
  const [destination, setDestination] = useState("Georgia");
  const [person, setPerson] = useState(4);
  const [checkin, setCheckin] = useState("2024-04-23");
  const [checkout, setCheckout] = useState("2024-04-29");

  return (
    <div className={styles.wrapper}>
      <div className={styles.details}>
        {/* Destination */}
        <div className={styles.col}>
          <label className={styles.label} htmlFor="destination">
            Destination
          </label>
          <input
            className={styles.input}
            type="text"
            id="destination"
            name="destination"
            placeholder="Enter destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>

        {/* Person */}
        <div className={styles.col}>
          <label className={styles.label} htmlFor="person">
            Person
          </label>
          <input
            className={styles.input}
            type="number"
            id="person"
            name="person"
            placeholder="Number of persons"
            min="1"
            value={person}
            onChange={(e) => setPerson(e.target.value)}
          />
        </div>

        {/* Check-in */}
        <div className={styles.col}>
          <label className={styles.label} htmlFor="checkin">
            Check-in
          </label>
          <input
            className={styles.input}
            type="date"
            id="checkin"
            name="checkin"
            value={checkin}
            onChange={(e) => setCheckin(e.target.value)}
          />
        </div>

        {/* Check-out */}
        <div className={styles.col}>
          <label className={styles.label} htmlFor="checkout">
            Check-out
          </label>
          <input
            className={styles.input}
            type="date"
            id="checkout"
            name="checkout"
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.bookButton}>
        <button className={styles.button}>Book now</button>
      </div>
    </div>
  );
};

export default HeaderBook;
