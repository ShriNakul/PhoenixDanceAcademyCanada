import React from "react";
import "./styles.css";
import { Button } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Testimonies from "./components/Testimonies";
import Promo from "./components/Promo";
import Why from "./components/Why";
import Socials from "./components/Socials";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function App() {
  const [page, setPage] = React.useState("main");

  return (
    <div>
      <Header setPage={setPage} />
      {page === "main" && <Main setPage={setPage} />}
      {page === "promo" && <Promo setPage={setPage} />}
      {page === "testimonies" && <Testimonies setPage={setPage} />}
      {page === "why" && <Why setPage={setPage} />}
      {page === "socials" && <Socials setPage={setPage} />}
      <Footer />
    </div>
  );
}
