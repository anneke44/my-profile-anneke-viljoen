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
      <div className="homepage-components container container-fluid">
        <div className="row align-items-stretch" style={{ minHeight: "300px" }}>
          <div className="homepage-about col d-flexw-100">
            <HomepageAbout className="flex-fill" />
          </div>
          <div className="homepage-project col d-flexw-100">
            <HomepageProject className="flex-fill" />
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
