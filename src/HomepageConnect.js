import React from "react";

import "./HomepageConnect.css";

export default function HomepageConnect() {
  return (
    <div className="HomepageConnect">
      <h2>Let's Connect</h2>
      <p>
        Let’s build something meaningful together — I’d love to hear from you
      </p>
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
      <a
        id="button-link"
        href="/contact"
        title="Contact Anneke"
        className="text-decoration-none"
      >
        <button id="launch-button" className="btn btn-branding">
          reach out
        </button>
      </a>
    </div>
  );
}
