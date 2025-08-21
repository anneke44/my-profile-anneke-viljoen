import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavBar from "./NavBar";
import HomepageHero from "./HomepageHero";

function App() {
  return (
    <div className="App">
      <div className="container">
        <NavBar />
        <HomepageHero />
      </div>
    </div>
  );
}

export default App;
