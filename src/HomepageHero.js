import React from "react";
import "./HomepageHero.css";

export default function HomepageHero() {
  return (
    <div className="HomepageHero d-flex">
      <div>
        <div className="primary-heading">
          <ul>
            <li className="heading">Anneke Viljoen</li>
            <li className="heading">Front End Developer</li>
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
  );
}
