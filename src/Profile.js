import React from "react";
import "./Profile.css";
import CapeTown from "./capetown.png";
import DictionaryApp from "./dictionaryapp.png";
import WeatherApp from "./weatherapp.png";
import WorldClock from "./worldclock.png";
import ShortStory from "./shortstory.png";

export default function Profile() {
  return (
    <div className="Profile">
      <div>
        <h1>portfolio.</h1>
      </div>
      <div className="portfolio-container container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <a
                href="https://keen-youtiao-9d3126.netlify.app/"
                target="_blanl"
                rel="noreferrer"
                title="Launch Cape Town App"
              >
                <img
                  src={CapeTown}
                  className="card-img-top img-fluid"
                  alt="Cape Town App"
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">Welcome to Cape Town</h5>
                <p className="card-text">Responsive web-page.</p>
                <i className="devicon-html5-plain colored" title="HTML5"></i>
                <i className="devicon-css3-plain colored" title="CSS3"></i>
                <i
                  className="devicon-javascript-plain colored"
                  title="JavaScript"
                ></i>
                <i className="devicon-react-original colored" title="React"></i>
                <i className="devicon-bootstrap-plain"></i>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <a
                href="https://annekedictionary.netlify.app/"
                target="_blank"
                rel="noreferrer"
                title="Launch Dictionary App"
              >
                <img
                  src={DictionaryApp}
                  className="card-img-top img-fluid"
                  alt="Dictionary App"
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">Dictionary App</h5>
                <p className="card-text">Search engine & API integration.</p>
                <i className="devicon-html5-plain colored" title="HTML5"></i>
                <i className="devicon-css3-plain colored" title="CSS3"></i>
                <i
                  className="devicon-javascript-plain colored"
                  title="JavaScript"
                ></i>
                <i className="devicon-react-original colored" title="React"></i>
                <i className="devicon-axios-plain"></i>
                <i className="devicon-bootstrap-plain"></i>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <a
                href="https://annekeweather.netlify.app/"
                target="_blank"
                rel="noreferrer"
                title="Launch Weather App"
              >
                <img
                  src={WeatherApp}
                  className="card-img-top img-fluid"
                  alt="Weather App"
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">Weather App</h5>
                <p className="card-text">Search Engine & API integration</p>
                <i className="devicon-html5-plain colored" title="HTML5"></i>
                <i className="devicon-css3-plain colored" title="CSS3"></i>
                <i
                  className="devicon-javascript-plain colored"
                  title="JavaScript"
                ></i>
                <i className="devicon-react-original colored" title="React"></i>
                <i className="devicon-axios-plain"></i>
                <i className="devicon-bootstrap-plain"></i>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <a
                href="https://anneke-world-clock.netlify.app/"
                target="_blank"
                rel="noreferrer"
                title="Launch World Clock"
              >
                <img
                  src={WorldClock}
                  className="card-img-top img-fluid"
                  alt="World Clock App"
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">World Clock</h5>
                <p className="card-text">
                  JS Timing Events, JS Date Formats, JS Time Zones
                </p>
                <i className="devicon-html5-plain colored" title="HTML5"></i>
                <i className="devicon-css3-plain colored" title="CSS3"></i>
                <i
                  className="devicon-javascript-plain colored"
                  title="JavaScript"
                ></i>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <a
                href="https://short-story-generator.netlify.app/"
                target="_blank"
                rel="noreferrer"
                title="Launch Short Story Generator"
              >
                <img
                  src={ShortStory}
                  className="card-img-top img-fluid"
                  alt="Short Story Generator"
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">Short Story Generator</h5>
                <p className="card-text">AI API Text Generator</p>
                <i className="devicon-html5-plain colored" title="HTML5"></i>
                <i className="devicon-css3-plain colored" title="CSS3"></i>
                <i
                  className="devicon-javascript-plain colored"
                  title="JavaScript"
                ></i>
                <i className="devicon-axios-plain"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
