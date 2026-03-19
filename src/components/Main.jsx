import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles.css";
import { Button } from "react-bootstrap";

export default function Main() {
  return (
    <div className="container col-xxl-8 px-4 py-3">
      <div className="row align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6 text-center">
          <img
            src="../public/logo.png"
            className="d-block mx-auto img-fluid"
            alt="Phoenix Dance Academy Logo"
            width="350"
            height="350"
            loading="lazy"
          />
          <div className="mt-5">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe_GeKauWkr21cL-k5dLYWoEJYsG-gJTnS8HYBVWfo398yTFA/viewform">
              <button className="registerBig-btn">REGISTER</button>
            </a>
          </div>
        </div>

        <div className="col-lg-6 position-relative text-center">
          <img
            src="/headerimg.png"
            className="d-block mx-auto img-fluid"
            alt="Phoenix Dance Academy Logo"
            width="450"
            height="450"
            loading="lazy"
          />

          <h2
            className="kalam-heavy  mt-3 mb-3 overlay-box"
            style={{ color: "white" }}
          >
            In Person and Online Dance Classes
          </h2>
        </div>
      </div>
    </div>
  );
}
