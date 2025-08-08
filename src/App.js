import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import logo from "./AnnekeLogo.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <section>
          <nav>
            <div className="navHeader d-flex">
              <div className="logo">LogoImg</div>
              <div>Some Text</div>
              <div className="dropDown">
                <ul>
                  <li>About</li>
                  <li>Profile</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
      </div>
    </div>
  );
}

export default App;
