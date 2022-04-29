import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/behance.png";
import "../App.css";

const Navbar = () => {
  const [userBtn, setGoBackBtn] = useState(true);
  return (
    <div className="container bar">
      <nav className="navbar navbar-expand-lg border-r" style={{background: "hsl(250, 30%, 8%)"}}>
        <div className="container-fluid">
          <Link
            to="/"
            className=" navbar-brand fw-bold text-decoration-none text-success"
          >
            <img
              src={logo}
              className="img-fluid logo-height"
              style={{height: "100px"}}
              alt="Loading...."
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                {userBtn ? (
                  <Link
                    className="btn text-light fw-bold"
                    aria-current="page"
                    to="users"
                    style={{background: "#6E57E0"}}
                    onClick={() => setGoBackBtn(false)}
                  >
                    Get Users
                  </Link>
                ) : (
                  <Link
                    className="btn fw-bold"
                    aria-current="page"
                    to="/"
                    style={{background: "#6E57E0", color: "white"}}
                    onClick={() => setGoBackBtn(true)}
                  >
                    Home
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
