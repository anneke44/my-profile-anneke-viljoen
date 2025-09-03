import React from "react";
import { NavLink } from "react-router-dom";
import "@fontsource/zeyada";
import "./NavBar.css";
import logo from "../assets/logos/AnnekeTranLogo.png";

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
            </NavLink>{" "}
            <span className="signature">AnnekeViljoen</span>
          </div>
          <div className="dropDown">
            <ul>
              <li>
                <NavLink
                  to="/about"
                  title="About"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "page-link"
                  }
                >
                  about
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/profile"
                  title="Portfolio"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "page-link"
                  }
                >
                  portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  title="Contact"
                  className={({ isActive }) =>
                    isActive ? "active-link" : "page-link"
                  }
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
