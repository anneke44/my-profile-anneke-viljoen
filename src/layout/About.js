import React from "react";
import "./About.css";
import AnnekeSide from "../assets/annekephotos/anneke-nb-side3.png";
import AboutImages from "../aboutcomponents/AboutImages";
import AboutFacts from "../aboutcomponents/AboutFacts";
import AboutCV from "../aboutcomponents/AboutCV";

export default function About() {
  return (
    <div className="About">
      <div className="about-container d-flex flex-column flex-md-row">
        <div className="about-desription">
          <h3 className="about-me mb-2">about.</h3>
          <p className="about-phrase">Hospitality Roots, Tech Future.</p>
          <p>
            Hi, I’m Anneke. I come from a hospitality background, where I spent
            the past ten years managing busy coffee shops. My career started in
            Dubai as a server, and I quickly worked my way up into management.
            While I thrived in the fast-paced hospitality environment—solving
            problems on the spot, leading teams, and delivering excellent
            customer experiences—I eventually realized that as an introvert, I
            wasn’t feeling truly fulfilled.
          </p>
          <p>
            That’s when I stumbled upon a free coding course, and everything
            changed. For the first time in my life, I found something I
            genuinely enjoy: writing code. I love the focus, the
            problem-solving, and the logical challenges behind development.
            Since completing a bootcamp, I’ve been building projects, sharpening
            my skills, and investing in my growth as a developer.
          </p>
          <p>
            I bring with me a unique perspective: years of people-focused
            experience, critical thinking under pressure, and the ability to
            adapt quickly. Now, I’m channeling those strengths into tech, where
            my goal is to grow into a full-stack developer—and eventually
            explore the world of AI development.
          </p>
        </div>
        <div className="about-pic">
          <div className="image-container">
            <img
              src={AnnekeSide}
              alt="anneke profile"
              className="anneke-profile img-fluid"
            />
          </div>
        </div>
      </div>
      <AboutImages />
      <div className="about-section-CV d-flex flex-column flex-md-row">
        <AboutFacts />
        <AboutCV />
      </div>
    </div>
  );
}
