import React, { useRef } from "react";
import styles from "../styles/main.module.css";
const Dropdown = ({ click }) => {
  const year = useRef();
  const month = useRef();
  const submitHandler = () => {
    event.preventDefault();
    const selectedYear = year.current.value;
    const selectedMonth = month.current.value;

    click(selectedYear, selectedMonth);
  };
  return (
    <>
      <form className={styles.dropdown} onSubmit={submitHandler}>
        <div className={styles.custom_select}>
          <select id="year" ref={year}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
          <span className={styles.custom_arrow}></span>
        </div>
        <div className={styles.custom_select}>
          <select id="month" ref={month}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <span className={styles.custom_arrow}> </span>
        </div>
        <button className={styles.dropdown_button}>Submit</button>
      </form>
    </>
  );
};

export default Dropdown;
