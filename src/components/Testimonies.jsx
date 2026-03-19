import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles.css";
import { Button } from "react-bootstrap";

export default function Testimonies() {
  function TestimonyCard({ name, p }) {
    return (
      <div className="testimony-card text-center p-4">
        <h4 className="testimony-name">{name}</h4>
        <p>{p}</p>
      </div>
    );
  }

  return (
    <div className="container col-xxl-8 px-4 py-5">
      <h1 className="text-center yellowText my-5" style={{ color: "white" }}>
        TESTIMONIES
      </h1>

      <div className="row justify-content-center g-4 my-5">
        <div className="col-12 col-md-4">
          <TestimonyCard name="Veera" p='"Really fun community!"' />
        </div>

        <div className="col-12 col-md-4">
          <TestimonyCard name="Shri" p='"Mr. Manikandan teaches well."' />
        </div>

        <div className="col-12 col-md-4">
          <TestimonyCard name="Ryan" p='"I had a lot of fun!"' />
        </div>
      </div>
    </div>
  );
}
