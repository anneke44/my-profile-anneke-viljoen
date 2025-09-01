import React from "react";
import "./HomepageAbout.css";

export default function HomepageAbout() {
  return (
    <div className="HomepageAbout">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">About Me</h5>
          <p className="card-text">
            I’m Anneke, a former hospitality manager turned web developer. After
            ten years leading teams and solving problems in fast-paced coffee
            shops, I discovered coding and found a passion for logic,
            problem-solving, and building digital experiences. I bring strong
            people skills, adaptability, and a customer-first mindset into my
            tech journey.
          </p>
          <a
            id="button-link"
            href="/about"
            title="About Anneke"
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
