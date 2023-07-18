import React, { useState } from "react";
import DaterangeComponent from "./HeaderDate";
import "./Header.css";

function Header() {
  //sự kiện chuyển trang của nut search
  const onClickHandler = () => {
    window.location.replace("./search");
  };

  return (
    <div className=" header">
      <h4 className="lifetime">A lifetime of discounts? It's Genius.</h4>
      <p>
        Get rewarded for your travels-unlock instant savings of 10% or more with
        a free accout
      </p>
      <button className="sign-in">Sign in/ Register</button>
      <div className="Submit-list">
        <div>
          <i className="fas fa-bed"></i>
          <input type="text" value="where are you going?"></input>
        </div>
        <div className="daterange">
          {/* pocomnentdate */}
          <DaterangeComponent />
        </div>
        <div className="list-submit">
          <i class="fas fa-child"></i>
          <input className="input" type="number" id="adult" value={1}></input>
          <label for="adult"> adult</label>
          <input
            className="input"
            type="number"
            id="childrent"
            value={0}
          ></input>
          <label for="chilrent"> chilrent</label>
          <input className="input" type="number" id="room" value={1}></input>
          <label for="room"> room</label>
        </div>
        <button
          className="header-search"
          onClick={onClickHandler}
          type="submit"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Header;
