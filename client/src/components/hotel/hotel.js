import React from "react";
import SearchHotel from "../Search/SearchHotel.js";
import Logout2 from "../layout/Logout2"
import Navbar from "../layout/Navbar"

const Hotel = () => {
    return (
        <div>
            <Navbar />
            <Logout2 />
            <div className="container valign-wrapper">
                <div className="row">
                    <div className="row">
                        <div className="col s12 center-align">
                            <h4>
                                Ready for your next adventure?
              </h4>
                            <p className="flow-text white-text text-lighten-1">
                                Book your next hotel around the area of your next travel spot!
              </p>
                            <br />
                        </div>
                    </div>
                    <SearchHotel />
                </div>
            </div>
        </div>


    );
};

export default Hotel;
