import React from "react";
import "devicon/devicon.min.css";
import "./HomepageTech.css";

export default function HomepageTech() {
  return (
    <div className="HomepageTech">
      <div className="card">
        <div className="card-header">
          <h5>Tech Stack</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="stack-category">
              <p>Languages</p>
              <div className="icons">
                <i className="devicon-html5-plain colored" title="HTML5"></i>
                <i className="devicon-css3-plain colored" title="CSS3"></i>
                <i
                  className="devicon-javascript-plain colored"
                  title="JavaScript"
                ></i>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="stack-category">
              <p>Frameworks & Libraries</p>
              <div className="icons">
                <i className="devicon-react-original colored" title="React"></i>
                <i className="devicon-nodejs-plain colored" title="Node.js"></i>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="stack-category">
              <p>Tools</p>
              <div className="icons">
                <i className="devicon-git-plain colored" title="Git"></i>
                <i className="devicon-github-original" title="GitHub"></i>
                <i className="devicon-vscode-plain colored" title="VS Code"></i>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
