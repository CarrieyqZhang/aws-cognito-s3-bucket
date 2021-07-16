import React, { Component } from "react";
import { Link } from "react-router-dom";
class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-light fixed-top">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">
            Home
          </Link>

          <ul className=" navbar-nav mx-5">
            <li className="nav-item">
              <Link to={"/signup"} className="nav-link">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
