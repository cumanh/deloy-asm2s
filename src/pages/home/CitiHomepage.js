import React from "react";
import "./CitiHomepage.css";

const citi = [
  {
    name: "Dublin",
    subText: "123 properties",
    image: "./images/city_1.webp",
  },
  {
    name: "Reno",
    subText: "533 properties",
    image: "./images/city_2.webp",
  },
  {
    name: "Austin",
    subText: "532 properties",
    image: "./images/city_3.webp",
  },
];

function CitiHomepage() {
  return (
    <div className="homestay">
      {citi.map(function (item) {
        return (
          <div className="img-1">
            <div className="name_text">
              <h2 className="name">{item.name}</h2>
              <p className="subtext">{item.subText}</p>
            </div>
            <img className="img" src={item.image}></img>
          </div>
        );
      })}
    </div>
  );
}

export default CitiHomepage;
