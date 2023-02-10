import React, { useState } from "react";
import Navbar from "../components/navbar";
import { getAllEvents, getFilteredEvents } from "../Dummy-Data";
import EventList from "../components/EventList";
import Dropdown from "../components/Dropdown";

const mountedStyle = {
  animation: "inAnimation 250ms ease-in",
};
const unmountedStyle = {
  animation: "outAnimation 270ms ease-out",
  animationFillMode: "forwards",
};
const HomePage = () => {
  const [filter, setFilter] = useState(false);
  const [data, setData] = useState([]);

  const filterHandler = () => {
    setFilter(!filter);
  };

  const filteredEvents = (year, month) => {
    setData(getFilteredEvents({ year: +year, month: +month }));
  };

  const allEvents = () => {
    setData(getAllEvents());
    setFilter(false);
  };

  return (
    <>
      <main>
        <section>
          <Navbar click={filterHandler} clickAll={allEvents} />
          <div style={filter ? mountedStyle : unmountedStyle}>
            <Dropdown click={filteredEvents} />
          </div>
          <EventList data={data} />
        </section>
      </main>
    </>
  );
};

export default HomePage;
