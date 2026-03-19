import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";

export default function Footer() {
  return (
    <footer>
      <p>
        This website is not intended for commercial use, it is simply a mockup
        for a website to be published. Developer: https://github.com/ShriNakul.
        ©{new Date().getFullYear()} PDA — All Rights Reserved
      </p>
    </footer>
  );
}
