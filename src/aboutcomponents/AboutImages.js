import React from "react";
import "./AboutImages.css";
import image1 from "../assets/scroll-images/img1.jpg";
import image2 from "../assets/scroll-images/img2.jpg";
import image3 from "../assets/scroll-images/img3.jpg";
import image4 from "../assets/scroll-images/img4.jpg";
import image5 from "../assets/scroll-images/img5.jpg";
import image7 from "../assets/scroll-images/img7.jpg";
import image8 from "../assets/scroll-images/img8.jpg";
import image9 from "../assets/scroll-images/img9.jpg";

export default function AboutImages() {
  return (
    <div className="AboutImages">
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={image1} alt="tba" className="about-image" />
          </div>
          <div className="col">
            <img src={image2} alt="tba" className="about-image" />
          </div>
          <div className="col">
            <img src={image3} alt="tba" className="about-image" />
          </div>
          <div className="col">
            <img src={image4} alt="tba" className="about-image" />
          </div>
          <div className="col">
            <img src={image5} alt="tba" className="about-image" />
          </div>
          <div className="col">
            <img src={image7} alt="tba" className="about-image" />
          </div>
          <div className="col">
            <img src={image8} alt="tba" className="about-image" />
          </div>
          <div className="col">
            <img src={image9} alt="tba" className="about-image" />
          </div>
        </div>
      </div>
    </div>
  );
}
