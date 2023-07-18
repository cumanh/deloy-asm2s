import React, { useState } from "react";
import SearchList from "./SearchList";
import "./SearchPopup.css";
import SearchItem from "./SearchListItem";

function SearchPopup(props) {
  return (
    <div className="popup">
      <h3>Search</h3>
      <div className=" des">
        <label>Destination</label>
        <br />
        <input className="input-des" type="text"></input>
      </div>
      <div className="check-day">
        <label>Check-in Date</label>
        <br />
        <input
          className="date"
          type="text"
          value="06/04/2022 to 06/24/2022"
        ></input>
      </div>
      <h4>Options</h4>
      <div className="mins">
        <span>Min price per night</span>
        <input className="input-min" type="number"></input>

        <span>Max price per night</span>
        <input className="input-max" type="number"></input>

        <span>Adult</span>
        <input className="input-adult" type="number" value={1}></input>

        <span>Children</span>
        <input className="input-children" type="number" value={0}></input>

        <span>Room</span>
        <input className="input-room" type="number" value={1}></input>
      </div>
      <button className="search-popup" type="submit">
        Search
      </button>
    </div>
  );
}
export default SearchPopup;
