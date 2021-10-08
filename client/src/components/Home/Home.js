import React, { useRef } from "react";
import Search from "../Search/Search";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./Home.css";
import Homelogo from "./img/homepage.png";

const Home = () => {
  const listSection = useRef(null);

  const gotoListSection = () => {
    listSection.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="Home-div">
      <img
        src={Homelogo}
        style={{ width: "100%", maxWidth: "2000px", height: "auto" }}
      />
      <div ref={listSection}>
        <Search />
      </div>
    </div>
  );
};

export default Home;
