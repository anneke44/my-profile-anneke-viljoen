import React from "react";
import "./NavBar.css";
import logo from "./AnnekeLogo.png";

export default function NavBar() {
  return (
    <section>
      <nav className="NavBar">
        <div className="nav-header d-flex">
          <div className="logo">
            <a href="/" title="homepage">
              <img
                src={logo}
                alt="Logo"
                className="anneke-logo img img-fluid"
              />
            </a>
          </div>
          <div>Anneke Viljoen</div>
          <div className="dropDown">
            <ul>
              <li>About</li>
              <li>Profile</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
