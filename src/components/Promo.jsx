import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

export default function Promo() {
  return (
    <div className="promo-section container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 text-white promo-text">
          <h1 className="fw-bold">Passion Takes the Lead!</h1>
          <h3>In Person and Online</h3>
          <h3>Dance Classes by</h3>
          <h3>@manikandaphoenix</h3>
          <h4>Kitchener / Waterloo</h4>
        </div>

        <div className="col-lg-6 text-center">
          <div className="ratio ratio-16x9 promo-video">
            <iframe
              src="https://www.youtube.com/embed/jfQbgTpNWhk"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
