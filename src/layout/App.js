import "bootstrap/dist/css/bootstrap.css";
import { Routes, Route } from "react-router-dom";
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
      <NavBar />
      <Routes>
        <Route path="../layout/HomepageHero" element={<HomepageHero />} />
        <Route path="../layout/About" element={<About />} />
        <Route path="../layout/Profile" element={<Profile />} />
        <Route path="../layout/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
