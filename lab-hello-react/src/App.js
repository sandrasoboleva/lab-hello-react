import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import ironhacklogoxs from "./images/ironhack-logo-xs.png";
import menutopxs from "./images/menu-top-xs.png";
import "./App.css";


function App() {
  return (
    <div className="App">
      <div className="main-container">
        <nav className="navbar">
          <div>
            <img src={ironhacklogoxs} className="ironhack-logo" alt="logo" />
          </div>
          <div>
            <img src={menutopxs} className="menu-icon" alt="menu icon" />
          </div>
        </nav>
        <div className="main-title">
          <h1 className="title">Say hello to ReactJS</h1>
        </div>
        <div>
          <p className="main-desc">
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer.
          </p>
          <div className="fake-button">
            <h4>Awesome!</h4>
          </div>
        </div>
      </div>
      <div className="icon-container">
        <div className="icon-container-single">
          <img src={icon1} className="single-icons" alt="delarative-icon"/>
          <h5>Declarative</h5>
          <p>React makes it painless to create interactive UIs</p>
        </div>
        <div className="icon-container-single">
          <img src={icon2} className="single-icons" alt="component-icon"/>
          <h5>Components</h5>
          <p>Build enacapsulated components that manage their state.</p>
        </div>
        <div className="icon-container-single">
          <img src={icon3} className="single-icons" alt="single-way-icon"/>
          <h5>Single-Way</h5>
          <p>A set of immutable values are passed to the component's</p>
        </div>
        <div className="icon-container-single">
          <img src={icon4} className="single-icons" alt="jsx-icon"/>
          <h5>JSX</h5>
          <p>Statically-typed, designed to run on modern browsers</p>
        </div>
      </div>
    </div>
  );
}

export default App;

