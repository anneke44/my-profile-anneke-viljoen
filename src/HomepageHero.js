import React from "react";
import "./HomepageHero.css";
import HomepageAbout from "./HomepageAbout";
import HomepageProject from "./HomepageProject";
import HomepageConnect from "./HomepageConnect";
import HomepageTech from "./HomepageTech";
import AnnekeSideProfile from "./assets/anneke-nb-side.png";

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
        <div className="image-container">
          <img
            src={AnnekeSideProfile}
            alt="anneke side profile"
            className="anneke-side-profile"
          />
          <div className="fade-overlay"></div>
        </div>
      </div>
      <div className="container container-fluid">
        <div className="row">
          <div className="homepage-about col-8">
            <HomepageAbout />
          </div>
          <div className="homepage-project col-8">
            <HomepageProject />
          </div>
          <div className="homepage-tech col-12 text-center">
            <HomepageTech />
          </div>
          <div className="homepage-connect col-12 text-center">
            <HomepageConnect />
          </div>
        </div>
      </div>
    </div>
  );
}
