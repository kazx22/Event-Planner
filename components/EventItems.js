import React from "react";
import styles from "../styles/main.module.css";
const EventItems = ({ title, date, description, id }) => {
  const humanReadAble = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <>
      <p className={styles.event_date}>{humanReadAble}</p>
      <h3 className={styles.event_heading}>{title}</h3>
      <div className={styles.description_box}>
        <p
          className={
            id % 2 !== 0
              ? `${styles.flex_end} ${styles.description}`
              : `${styles.flex_start} ${styles.description}`
          }
        >
          {description}
        </p>
      </div>
    </>
  );
};

export default EventItems;
