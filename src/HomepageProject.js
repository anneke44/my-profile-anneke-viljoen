import React from "react";

import "./HomepageProject.css";

export default function HomepageProject() {
  return (
    <div className="HomepageProject">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">Projects</h5>
          <div className="card-text ">
            <ul>
              <li>
                Dictionary App – A responsive website showcasing Search Engine &
                API integration.
              </li>
              <li>
                Weather App – A web app built with React, Bootstrap and Axios.
              </li>
              <li>
                World Clock – A design experiment exploring JS Timing Events, JS
                Date Formats, JS Time Zones.
              </li>
            </ul>
          </div>
          <a
            id="button-link"
            href="/Profile"
            title="Anneke Portfolio"
            className="text-decoration-none"
          >
            <button id="launch-button" className="btn btn-branding">
              read more
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
