import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

export default class NavBar extends Component {
  logOut(e) {
    e.Component.logOut();
    localStorage.removeItem("usertoken");
    this.props.history.push("/");
  }

  render() {
    const loginRegLink = (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            <h1>
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color-glass/48/login-rounded-right.png"
                alt="login-rounded-right"
              />
              Login
            </h1>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            <h1>
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/fluency/48/signing-a-document.png"
                alt="signing-a-document"
              />
              Register
            </h1>
          </Link>
        </li>
      </ul>
    );
    const userLink = (
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            <h1>
              <img
                width="64"
                height="64"
                src="https://img.icons8.com/wired/64/admin-settings-male.png"
                alt="admin-settings-male"
              />
              User
            </h1>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/uploads" className="nav-link">
            <h1>
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/upload--v1.png"
                alt="upload--v1"
              />
              Assignments Submission
            </h1>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/assignmentlist" className="nav-link">
            <h1>
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios-filled/50/list.png"
                alt="list"
              />
              Assignments List
            </h1>
          </Link>
        </li>

        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            <h1>
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/exit--v1.png"
                alt="exit--v1"
              />
              Logout
            </h1>
          </a>
        </li>
      </ul>
    );
    return (
      <nav className="navbar navbar-expand-lg navbar-light rounded">
        <button
          className="navbar-toggler"
          type="button"
          data-toggel="collapse"
          data-target="#navbar1"
          aria-controls="navbar1"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbar1"
        >
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#E8EAF6"
                      d="M42 39L6 39 6 23 24 6 42 23z"
                    ></path>
                    <path
                      fill="#C5CAE9"
                      d="M39 21L34 16 34 9 39 9zM6 39H42V44H6z"
                    ></path>
                    <path
                      fill="#B71C1C"
                      d="M24 4.3L4 22.9 6 25.1 24 8.4 42 25.1 44 22.9z"
                    ></path>
                    <path fill="#D84315" d="M18 28H30V44H18z"></path>
                    <path fill="#01579B" d="M21 17H27V23H21z"></path>
                    <path
                      fill="#FF8A65"
                      d="M27.5,35.5c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5S28,38.3,28,38v-2C28,35.7,27.8,35.5,27.5,35.5z"
                    ></path>
                  </svg>
                  Home
                </h1>
              </Link>
            </li>
          </ul>
          {localStorage.userToken ? userLink : loginRegLink}
        </div>
      </nav>
    );
  }
}
