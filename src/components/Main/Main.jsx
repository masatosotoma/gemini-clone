import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

function Main() {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello,Dav.</span>
          </p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Any texts</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Any texts 2</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Any texts 3</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Any texts 4</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
