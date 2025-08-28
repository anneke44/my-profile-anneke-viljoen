import React from "react";
import "./HomepageAbout.css";

export default function HomepageAbout() {
  return (
    <div className="HomepageAbout">
      <h2>About Me</h2>
      <p>
        I come from a background in hospitality, where I managed busy cafés and
        learned how to create seamless, welcoming experiences for people. Now, I
        bring that same people-first approach into web development — building
        websites that are intuitive, engaging, and human-centered.
      </p>
      <button id="launch-button" className="btn btn-branding">
        read more
      </button>
    </div>
  );
}
