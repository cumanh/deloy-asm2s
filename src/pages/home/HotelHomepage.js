import React from "react";
import "./HotelHomepage.css";

const hotelpage = [
  {
    name: "Hotels",
    count: 233,
    image: "./images/type_1.webp",
  },
  {
    name: "Apartments",
    count: 2331,
    image: "./images/type_2.jpg",
  },
  {
    name: "Resorts",
    count: 2331,
    image: "./images/type_3.jpg",
  },
  {
    name: "Villas",
    count: 2331,
    image: "./images/type_4.jpg",
  },
  {
    name: "Cabins",
    count: 2331,
    image: "./images/type_5.jpg",
  },
];

function HotelHomestay() {
  return (
    <div>
      <h4 className="hotel-browse">Browse by property type</h4>
      <div className="hotel-homstay">
        {hotelpage.map(function (item) {
          return (
            <div hotel_0>
              <img className="hotel-img" src={item.image}></img>
              <h2 className="hotelname">{item.name}</h2>
              <p className="hotelcount">{item.count} hotels</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default HotelHomestay;
