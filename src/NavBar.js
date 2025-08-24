import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "./AnnekeTranLogo.png";

export default function NavBar() {
  return (
    <section>
      <nav className="NavBar">
        <div className="nav-header d-flex">
          <div className="logo">
            <NavLink to="/" title="Homepage">
              <img
                src={logo}
                alt="Logo"
                className="anneke-logo img img-fluid"
              />
            </NavLink>
          </div>
          <div className="dropDown">
            <ul>
              <li>
                <NavLink
                  to="./About"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "page-link"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="./Profile"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "page-link"
                  }
                >
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="./Contact"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "page-link"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
