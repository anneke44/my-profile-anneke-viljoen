import React from "react";
import "./Profile.css";
import Bg from "./bg.png";

export default function Profile() {
  return (
    <div className="Profile">
      <div>
        <h1>My Portfolio</h1>
      </div>
      <div className="portfolio-container container">
        <div className="row g-4">
          <div className="col-md-6">
            <img src={Bg} alt="Placeholder" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <img src={Bg} alt="Placeholder" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <img src={Bg} alt="Placeholder" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <img src={Bg} alt="Placeholder" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}
