import React from "react";
import "./Navbar.css";

const NavbarList = [
  {
    type: "Stays",
    icon: "fas fa-bed",
    active: true,
  },
  {
    type: "Flights",
    icon: "fas fa-plane",
    active: false,
  },
  {
    type: "Car rentals",
    icon: "fas fa-car",
    active: false,
  },
  {
    type: "Attractions",
    icon: "fas fa-bed",
    active: false,
  },
  {
    type: "Airport taxis",
    icon: "fas fa-taxi",
    active: false,
  },
];
function Navbar() {
  console.log(NavbarList[0].active);
  return (
    <div>
      <div className="navbar">
        <div className="booking-web">
          <span className="booking"> Booking Website</span>
          <button className="register">Register</button>
          <button className="login">Login</button>
        </div>
        <div className="nav-list">
          {NavbarList.map(function (item) {
            return (
              <div
                className="stay"
                // nếu active= true thì sẽ có boder
                style={
                  item.active === true
                    ? { border: "1px solid white", borderRadius: "12px " }
                    : {}
                }
              >
                <i className={item.icon}></i>
                <span>{item.type}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
