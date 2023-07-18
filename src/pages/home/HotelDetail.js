import React from "react";
import "./HotelDetail.css";

const hoteldei = [
  {
    name: "Aparthotel Stare Miasto",
    city: "Madrid",
    price: 120,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_1.webp",
  },
  {
    name: "Comfort Suites Airport",
    city: "Austin",
    price: 140,
    rate: 9.3,
    type: "Exceptional",
    image_url: "./images/hotel_2.jpg",
  },
  {
    name: "Four Seasons Hotel",
    city: "Lisbon",
    price: 99,
    rate: 8.8,
    type: "Excellent",
    image_url: "./images/hotel_3.jpg",
  },
  {
    name: "Hilton Garden Inn",
    city: "Berlin",
    price: 105,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_4.jpg",
  },
];

function HotelDetail() {
  return (
    <div>
      <h1> Homes guests love</h1>
      <div className="hotel-flex">
        {hoteldei.map(function (item) {
          return (
            <div className="hotel_detail">
              <img className="img-detail" src={item.image_url}></img>
              <a href="/detail"> {item.name}</a>
              <p className="city">{item.city} </p>
              <p className="price-detail">Starting From ${item.price} </p>
              <p>
                <span className="rate">{item.rate}</span>
                <span className="type">{item.type}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HotelDetail;
