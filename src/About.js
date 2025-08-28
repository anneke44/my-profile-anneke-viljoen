import React from "react";
import MyPDF from "./Anneke Viljoen CV 2025.pdf";
import "./About.css";

export default function About() {
  return (
    <div className="About">
      <h3 className="about-me mb-5">ABOUT ME</h3>
      <h1 className="mb-4">Anneke Viljoen</h1>
      <p className="fw-bold">
        Front End Developer based in Cape Town, South Africa.
      </p>
      <p>
        Hi, I'm Anneke. Before I started writing code, I managed bustling cafés
        — places where every detail mattered, from the flow of service to how
        welcome people felt when they walked in the door. That experience taught
        me how to stay adaptable in fast-paced environments, solve problems
        quickly, and most importantly, put people at the center of everything I
        do.
      </p>
      <p>
        Now, I’m bringing that same mindset into web development. To me,
        websites are like digital spaces: they should be intuitive, engaging,
        and easy to navigate, just like a well-run café. My goal is to build
        projects that don’t just work, but feel welcoming and meaningful for the
        people using them.
      </p>
      <p>I’m especially excited about:</p>
      <ul>
        <li>
          Front-end development — bringing designs to life with clean,
          responsive code.
        </li>
        <li>
          User experience — crafting interfaces that prioritize usability and
          accessibility.
        </li>
        <li>
          Blending creativity and logic — using both design sense and technical
          skills to build projects that connect with people.
        </li>
      </ul>
      <p>
        For me, it’s all about translating human connection into pixels —
        building digital experiences that are functional, thoughtful, and a
        little bit personal. When I’m not coding, you’ll probably find me
        reading a Stephen King novel or hiking around the georgeous Cape
        Peninsula.
      </p>
      <a href={MyPDF} download={MyPDF}>
        Download CV
      </a>
    </div>
  );
}
