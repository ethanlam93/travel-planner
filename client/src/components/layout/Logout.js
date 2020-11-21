import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import logo from "../logo.png";
class Logout extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    return (
      <>
      <div className="row">
          <button
            style={{
              width: "150px",
              borderRadius: "3px",
              letterSpacing: "1.5px",
              marginTop: "1rem",
              float: "right",
              marginRight: "10px",
              background: "#090088",
            }}
            onClick={this.onLogoutClick}
            className="btn btn-large waves-effect waves-light hoverable accent-3"
          >
            Logout
          </button>
        </div>
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
        
      </>
    );
  }
}

Logout.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Logout);
