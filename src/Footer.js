import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

library.add(fab);

export default function Footer() {
  return (
    <div className="Footer">
      Built by Anneke Viljoen. Open sourced on GitHub
      <a
        href="https://github.com/anneke44"
        target="_blank"
        rel="noreferrer"
        className="link-icon"
      >
        <FontAwesomeIcon icon="fa-brands fa-github" />
      </a>
      , and hosted on Netlify. Check out my LinkedIn
      <a
        href="https://github.com/anneke44"
        target="_blank"
        rel="noreferrer"
        className="link-icon"
      >
        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
      </a>
    </div>
  );
}
