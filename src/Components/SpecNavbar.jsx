import React from "react";
import { Link } from 'react-router-dom';

export default function SpecNavbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark shadow rounded"
        style={{ backgroundColor: "#F2EEE3" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="navbar_image.png" className="img-fluid" width="200"></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-row-reverse"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active shadow"
                  to="/patDash"
                  style={{
                    borderRadius: "12px",
                    color: "white",
                    backgroundColor: "#00ADEF",
                  }}
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active shadow mx-5"
                  to="/patAbout"
                  style={{
                    borderRadius: "12px",
                    color: "white",
                    backgroundColor: "#00ADEF",
                  }}
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <button
                    class="btn btn-primary shadow dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    style={{
                      borderRadius: "12px",
                      backgroundColor: "#00ADEF",
                      borderColor: "#00ADEF",
                    }}
                  >
                    SPECIALIST'S ID
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link class="dropdown-item" to="/patChangePass">
                        Change Password
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/patEditProfile">
                        Edit Profile
                      </Link>
                    </li>
                    <li>
                      <a class="dropdown-item" href="/">
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
