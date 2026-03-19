import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

export default function Socials() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="promo-section container py-5">
      <div className="row text-white justify-content-center align-items-start">
        <div className="col-lg-6 text-center mb-5">
          <h2 className="mb-3">Instagram</h2>

          <div className="insta-wrapper">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/p/DU3n0Htj3Ao/"
              data-instgrm-version="14"
            ></blockquote>
          </div>

          <a
            href="https://www.instagram.com/phoenixdanceacademycanada/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            Visit Instagram →
          </a>
        </div>
        <div className="col-lg-6 text-center">
          <h2 className="mb-3">YouTube</h2>

          <div className="yt-short-wrapper">
            <iframe
              src="https://www.youtube.com/embed/cWTe9cA7v5Y"
              title="YouTube Short"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <a
            href="https://www.youtube.com/@phoenixdanceacademy2906/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            Visit YouTube →
          </a>
        </div>
      </div>
    </div>
  );
}
