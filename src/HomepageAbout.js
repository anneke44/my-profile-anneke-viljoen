import React from "react";
import "./HomepageAbout.css";

export default function HomepageAbout() {
  return (
    <div className="HomepageAbout">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">About Me</h5>
          <p className="card-text">
            I come from a background in hospitality, where I managed busy cafés
            and learned how to create seamless, welcoming experiences for
            people. Now, I bring that same people-first approach into web
            development — building websites that are intuitive, engaging, and
            human-centered.
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

//  <div className="HomepageAbout">
//       <h2>About Me</h2>
//       <p>
//         I come from a background in hospitality, where I managed busy cafés and
//         learned how to create seamless, welcoming experiences for people. Now, I
//         bring that same people-first approach into web development — building
//         websites that are intuitive, engaging, and human-centered.
//       </p>
//       <button id="launch-button" className="btn btn-branding">
//         read more
//       </button>
//     </div>
