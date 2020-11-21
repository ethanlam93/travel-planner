import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";
import logo from "../logo.png";

class Navbar extends Component {
  render() {
    return (
      <div>
        {!this.props.auth.isAuthenticated ? (
          <div className="navbar-fixed">
            <nav className="z-depth-5">
              <div className="nav-wrapper">
                <Link
                  to="/"
                  style={{
                    fontFamily: "monospace",
                    display: "flex",
                  }}
                  className="col s4 brand-logo center black-text"
                >
                  Venture
                </Link>
                <Link
                  to="/register"
                  style={{
                    width: "120px",
                    marginTop: "3px",
                    letterSpacing: "1.5px",
                    background: "#e16162",
                    marginRight: "1rem",
                    paddingLeft: "21px",
                    background: "#090088",
                  }}
                  className="col s4 right btn btn-large waves-effect waves-light hoverable accent-3"
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  style={{
                    width: "120px",
                    letterSpacing: "1.5px",
                    marginTop: "3px",
                  }}
                  className="col s4 right btn btn-large btn-flat waves-effect white black-text"
                >
                  LogIn
                </Link>
              </div>
            </nav>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Navbar);
