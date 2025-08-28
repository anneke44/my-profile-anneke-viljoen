import React from "react";

import "./HomepageProject.css";

export default function HomepageProject() {
  return (
    <div className="HomepageProject">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">Projects</h5>
          <p class="card-text ">
            <ul>
              <li>Project One – A responsive website showcasing [X].</li>
              <li>Project Two – A web app built with [Y].</li>
              <li>Project Three – A design experiment exploring [Z].</li>
            </ul>
          </p>
          <button id="launch-button" className="btn btn-branding">
            read more
          </button>
        </div>
      </div>
    </div>
  );
}

//   <h2>Projects</h2>
//       <ul>
//         <li>Project One – A responsive website showcasing [X].</li>
//         <li>Project Two – A web app built with [Y].</li>
//         <li>Project Three – A design experiment exploring [Z].</li>
//       </ul>
//       <button id="launch-button" className="btn btn-branding">
//         see more
//       </button>
