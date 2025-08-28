import React from "react";

import "./HomepageProject.css";

export default function HomepageProject() {
  return (
    <div className="HomepageProject">
      <h2>Projects</h2>
      <ul>
        <li>Project One – A responsive website showcasing [X].</li>
        <li>Project Two – A web app built with [Y].</li>
        <li>Project Three – A design experiment exploring [Z].</li>
      </ul>
      <button id="launch-button" className="btn btn-branding">
        see more
      </button>
    </div>
  );
}
