import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src="/logo.png" alt="Logo" className="logo-img" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav mx-auto nav-links">
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => props.setPage("main")}
                style={{ cursor: "pointer" }}
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => props.setPage("promo")}
                style={{ cursor: "pointer" }}
              >
                About us
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => props.setPage("why")}
                style={{ cursor: "pointer" }}
              >
                Why us?
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => props.setPage("testimonies")}
                style={{ cursor: "pointer" }}
              >
                Testimonies
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => props.setPage("socials")}
                style={{ cursor: "pointer" }}
              >
                Socials
              </a>
            </li>
          </ul>

          <div className="register-btn">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe_GeKauWkr21cL-k5dLYWoEJYsG-gJTnS8HYBVWfo398yTFA/viewform">
              <button>REGISTER</button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
