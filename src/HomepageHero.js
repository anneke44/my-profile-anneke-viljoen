import React from "react";
import "./HomepageHero.css";
import HomepageAbout from "./HomepageAbout";
import HomepageProject from "./HomepageProject";
import HomepageConnect from "./HomepageConnect";

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
      <div className="container container-fluid">
        <div className="row">
          <div className="homepage-about col-6">
            <HomepageAbout />
          </div>
          <div className="homepage-project col-6">
            <HomepageProject />
          </div>
          <div className="homepage-connect col-12 text-center">
            <HomepageConnect />
          </div>
        </div>
      </div>
    </div>
  );
}
