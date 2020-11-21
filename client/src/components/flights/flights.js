import React from "react";
import SearchFlight from "../Search/SearchFlight.js";
import Logout2 from "../layout/Logout2";
import Navbar from "../layout/Navbar"
import logo from "../logo.png";

const Flights = () => {
  return (
    <div>
      <Logout2 />
      <Navbar />
      <br></br>
      <br></br>
      
      <div className="container">
          <div className="center-align">
            <img
              src={logo}
              style={{
                fontFamily: "monospace",
                width: "200px",
                height: "200px",
                borderRadius: "80% 20% 81% 19% / 26% 64% 36% 74% ",
              }}
              className="col s2 brand-logo black-text"
            ></img>
        </div>
        <div className="row">
          <div className="col s12 center-align">
            <h4>Ready for your next adventure?</h4>
            <p className="flow-text white-text text-lighten-1">
              Sign-up or Login to unlock all the features.
            </p>
            <br />
          </div>
          <SearchFlight />
        </div>
      </div>
    </div>
  );
};

export default Flights;
