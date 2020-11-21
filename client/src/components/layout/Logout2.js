import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import logo from "../logo.png";

class Logout2 extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    return (
      <>
        {this.props.auth.isAuthenticated ? (
          <div>
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
              <Link
                to="/dashboard"
                className="btn btn-large hoverable accent-3"
                style={{
                  marginRight: 10,
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem",
                  float: "right",
                  paddingLeft: "23px",
                  paddingTop: "3px",
                  background: "#87dfd6",
                  color: "black",
                }}
              >
                Dashboard
              </Link>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </>
    );
  }
}

Logout2.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Logout2);
