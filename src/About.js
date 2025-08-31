import React from "react";
import MyPDF from "./Anneke Viljoen CV 2025.pdf";
import "./About.css";
import AnnekeSide from "./assets/anneke-nb-side3.png";
import AboutImages from "./AboutImages";

export default function About() {
  return (
    <div className="About">
      <div className="about-container">
        <div className="about-desription flex-item">
          <h3 className="about-me mb-2">about.</h3>
          <p className="fw-bold">
            Front End Developer based in Cape Town, South Africa.
          </p>
          <p>
            Hi, I'm Anneke. Before I started writing code, I managed bustling
            cafés — places where every detail mattered, from the flow of service
            to how welcome people felt when they walked in the door. That
            experience taught me how to stay adaptable in fast-paced
            environments, solve problems quickly, and most importantly, put
            people at the center of everything I do.
          </p>
          <p>
            Now, I’m bringing that same mindset into web development. To me,
            websites are like digital spaces: they should be intuitive,
            engaging, and easy to navigate, just like a well-run café. My goal
            is to build projects that don’t just work, but feel welcoming and
            meaningful for the people using them.
          </p>
          <p>I’m especially excited about:</p>
          <ul>
            <li>
              Front-end development — bringing designs to life with clean,
              responsive code.
            </li>
            <li>
              User experience — crafting interfaces that prioritize usability
              and accessibility.
            </li>
            <li>
              Blending creativity and logic — using both design sense and
              technical skills to build projects that connect with people.
            </li>
          </ul>
        </div>
        <div className="about-image flex-item">
          <div className="image-container">
            <img
              src={AnnekeSide}
              alt="anneke profile"
              className="anneke-profile"
            />
          </div>
        </div>
      </div>
      <AboutImages />
      <a href={MyPDF} download={MyPDF}>
        Download CV
      </a>
    </div>
  );
}
