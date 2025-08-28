import React from "react";
import "./HomepageHero.css";
import HomepageAbout from "./HomepageAbout";

export default function HomepageHero() {
  return (
    <div className="HomepageHero">
      <div className="hero-heading d-flex">
        <div>
          <div className="primary-heading">
            <ul>
              <li className="heading">Anneke Viljoen</li>
              <li className="heading">Front End Developer</li>
              <li className="slogan">
                “Turning customer experience into user experience — one pixel at
                a time.”
              </li>
            </ul>
          </div>
        </div>
        <div>
          <a
            id="button-link"
            href="/contact.html"
            title="Contact Anneke"
            className="text-decoration-none"
          >
            <button id="launch-button" className="btn btn-branding">
              Contact
            </button>
          </a>
        </div>
      </div>
      <HomepageAbout />
    </div>
  );
}
