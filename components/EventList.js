import React from "react";
import EventItems from "./EventItems";
import styles from "../styles/main.module.css";

const EventList = ({ data }) => {
  return (
    <>
      {data.map((event) => (
        <div
          key={event.id}
          className={
            event.id % 2 !== 0
              ? `${styles.align_right} ${styles.list}`
              : `${styles.align_left} ${styles.list}`
          }
        >
          <EventItems
            title={event.title}
            date={event.date}
            description={event.description}
            id={event.id}
          />
        </div>
      ))}
    </>
  );
};

export default EventList;
