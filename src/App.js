import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route, Router } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import HomepageHero from "./HomepageHero";
import About from "./About";
import Profile from "./Profile";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomepageHero />} />
            <Route exact path="About" element={<About />} />
            <Route exact path="Profile" element={<Profile />} />
            <Route exact path="Contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
