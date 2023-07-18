import React from "react";
import "./FormInput.css";

function Form() {
  return (
    <div className="form">
      <p className="save-time">Save time, save money!</p>
      <p>Sign up and we'll send the best deals to you</p>
      <div className="mail-sub">
        <input className="in-mail" type="mail" value="your Email"></input>
        <button className="subscribe">Subscribe</button>
      </div>
    </div>
  );
}

export default Form;
