import React from "react";
import "./Footer.css";

const Footers = [
  {
    col_number: 1,
    col_values: [
      "Countries",
      "Regions",
      "Cities",
      "Districts",
      "Airports",
      "Hotels",
    ],
  },
  {
    col_number: 2,
    col_values: [
      "Homes",
      "Apartments",
      "Resorts",
      "Villas",
      "Hostels",
      "Guest houses",
    ],
  },
  {
    col_number: 3,
    col_values: [
      "Unique places to stay",
      "Reviews",
      "Unpacked: Travel articles",
      "Travel communities",
      "Seasonal and holiday deals",
    ],
  },
  {
    col_number: 4,
    col_values: [
      "Car rental",
      "Flight Finder",
      "Restaurant reservations",
      "Travel Agents",
    ],
  },
  {
    col_number: 5,
    col_values: [
      "Curtomer Service",
      "Partner Help",
      "Careers",
      "Sustainability",
      "Press center",
      "Safety Resource Center",
      "Investor relations",
      "Terms & conditions",
    ],
  },
];

function Footer() {
  return (
    <div className="Footerlist">
      <div>
        {Footers[0].col_values.map(function (item) {
          return <p>{item}</p>;
        })}
      </div>
      <div>
        {Footers[1].col_values.map(function (item) {
          return <p>{item}</p>;
        })}
      </div>
      <div>
        {Footers[2].col_values.map(function (item) {
          return <p>{item}</p>;
        })}
      </div>
      <div>
        {Footers[3].col_values.map(function (item) {
          return <p>{item}</p>;
        })}
      </div>
      <div>
        {Footers[4].col_values.map(function (item) {
          return <p>{item}</p>;
        })}
      </div>
    </div>
  );
}

export default Footer;
