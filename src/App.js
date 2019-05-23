import React from "react";
import "./App.css";
import OffersContainer from "./offers/OffersContainer";

function App() {
  return (
    <div id="app">
      <header>
        <nav className={"#90caf9 blue center-align"}>
          <div className="nav-wrapper">
            <a href="#" class="brand-logo">
              Hotelbooking with redux
            </a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li>
                <a href="#">Offers</a>
              </li>
              <li>
                <a href="#">Cart</a>
              </li>
              <li>
                <a href="#">Registration</a>
              </li>
              <li>
                <a href="#">Users</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <article  className="container">
        <OffersContainer />
      </article>
    </div>
  );
}

export default App;
