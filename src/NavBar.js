import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "./AnnekeLogo.png";

export default function NavBar() {
  return (
    <section>
      <nav className="NavBar">
        <div className="nav-header d-flex">
          <div className="logo">
            <Link to="/" title="Homepage">
              <img
                src={logo}
                alt="Logo"
                className="anneke-logo img img-fluid"
              />
            </Link>
          </div>
          <div>Anneke Viljoen</div>
          <div className="dropDown">
            <ul>
              <li>
                <Link to="./About">About</Link>
              </li>
              <li>
                <Link to="./Profile">Profile</Link>
              </li>
              <li>
                <Link to="./Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
