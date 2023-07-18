import React from "react";
import "./Detail.css";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import Form from "../home/FormInput";

const detail = {
  name: "Tower Street Apartments",
  address: "Elton St 125 New york",
  distance: "Excellent location - 500m from center",
  price: "Book a stay over $114 at this property and get a free airport taxi",
  photos: [
    "./images/hotel_detail_1.jpg",
    "./images/hotel_detail_2.jpg",
    "./images/hotel_detail_3.jpg",
    "./images/hotel_detail_4.jpg",
    "./images/hotel_detail_5.jpg",
    "./images/hotel_detail_6.jpg",
  ],
  title: "Stay in the heart of City",
  description:
    "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
  nine_night_price: 955,
};
function Details() {
  return (
    <div>
      <Navbar />
      <div className="khung__1">
        <h2 className="detail-name">{detail.name}</h2>
        <p className="detail-add">
          <i class="fa-solid fa-location-dot"></i>

          {detail.address}
        </p>
        <p className="detail-distan">{detail.distance}</p>
        <p className="detail-price">{detail.price}</p>
        <p className="detail-book">Reserve or Book now</p>
      </div>
      <div className="khung__2">
        <img src={detail.photos[0]} />
        <img src={detail.photos[1]} />
        <img src={detail.photos[2]} />
        <img src={detail.photos[3]} />
        <img src={detail.photos[4]} />
        <img src={detail.photos[5]} />
      </div>
      <div className="khung__3">
        <div className="detai-left">
          <p className="detai-tittle">{detail.title}</p>
          <p className="detai-descrp">{detail.description}</p>
        </div>
        <div className="khung__4">
          <h3 className="perfect-9">Perfect for a 9-night stay!</h3>
          <p className="located">
            Located in the real heart of krakow, this property has an excellent
            location score of 9.8!
          </p>
          <p className="nine-night">
            <b>${detail.nine_night_price} </b>(9 nights)
          </p>
          <p className="res-book">Reserve or Book Now</p>
        </div>
      </div>
      <Form />
      <Footer />
    </div>
  );
}
export default Details;
