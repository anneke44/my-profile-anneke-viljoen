import React from "react";
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
        title="GitHub Profile"
      >
        <i className="devicon-github-original"></i>
      </a>
      , and is hosted on Netlify
      <a
        href="https://github.com/anneke44"
        target="_blank"
        rel="noreferrer"
        className="link-icon"
        title="Netlify"
      >
        <i className="devicon-netlify-plain"></i>
      </a>
    </div>
  );
}
