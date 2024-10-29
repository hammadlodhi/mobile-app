import { email, phone } from "<@>/util/images";
import "./Background.css";
import React from "react";

const Background = () => {
  return (
    <div className="header">
      <div className="header__first-half">
        <h4>
          <img src={email} alt="Email icon" />
          info@abc.com
        </h4>
        <h4>
          <img src={phone} alt="Phone icon" />
          +123 456 789
        </h4>
      </div>
      <div className="header__second-half">
        <h4 className="header__privacy">Privacy Policy</h4>
        <h4 className="header__terms">Terms and Conditions</h4>
      </div>
    </div>
  );
};

export default Background;
