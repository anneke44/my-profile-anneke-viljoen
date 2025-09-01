import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import "./App.css";
import NavBar from "./NavBar";
import HomepageHero from "./HomepageHero";
import About from "./About";
import Profile from "./Profile";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomepageHero />} />
        <Route path="About" element={<About />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
