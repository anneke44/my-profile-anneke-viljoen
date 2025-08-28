import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="Contact">
      <h1 className="mb-4">Get in touch!</h1>
      <h3>Email</h3>
      <p>📧 anneke.viljoen4@gmail.com</p>
      <h3>LinkedIn</h3>
      <a
        href="https://www.linkedin.com/in/anneke-viljoen4/"
        target="_blank"
        rel="noreferrer"
        className="link-icon"
      >
        <i class="devicon-linkedin-plain"></i>
      </a>
      <h3>Phone</h3>
      <p>+27 71 786 0727</p>
    </div>
  );
}
