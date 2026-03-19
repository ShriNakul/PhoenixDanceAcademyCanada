import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

export default function Why() {
  return (
    <div className="whyus-section container py-4">
      <div className="text-center my-5">
        <h1 className="whyus-title">We specialize in:</h1>
      </div>
      <div
        id="whyusCarousel"
        className="carousel slide my-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-box text-center">
              <h2 className="whyus-sub">Contemporary</h2>
            </div>
          </div>

          <div className="carousel-item">
            <div className="carousel-box text-center">
              <h2 className="whyus-sub">Salsa</h2>
            </div>
          </div>

          <div className="carousel-item">
            <div className="carousel-box text-center">
              <h2 className="whyus-sub">Hip‑Hop</h2>
            </div>
          </div>

          <div className="carousel-item">
            <div className="carousel-box text-center">
              <h2 className="whyus-sub">Freestyle</h2>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#whyusCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#whyusCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
}
