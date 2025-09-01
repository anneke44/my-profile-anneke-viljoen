import React from "react";
import MyPDF from "./Anneke Viljoen CV.pdf";
import "./AboutCV.css";

export default function AboutCV() {
  return (
    <div className="AboutCV">
      <h2>Find out More</h2>
      <p>Download my CV and get in touch!</p>
      <div>
        📧 Email me: anneke.viljoen4@gmail.com <em>or</em> find me on LinkedIn
        <a
          href="https://www.linkedin.com/in/anneke-viljoen4/"
          target="_blank"
          rel="noreferrer"
          className="link-icon"
        >
          <i className="devicon-linkedin-plain"></i>
        </a>
      </div>
      <a href={MyPDF} download={MyPDF} title="Download CV">
        <button id="launch-button" className="btn btn-branding">
          Download my CV
        </button>
      </a>
    </div>
  );
}
