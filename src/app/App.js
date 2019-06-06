import React from "react";
import PropTypes from "prop-types";

import "./App.css";
import OffersContainer from "../offers/OffersContainer";
import CartContainer from "../cart/CartContainer";
import RegistrationContainer from "../registration/RegistrationContainer";

// TODO: activeScene stuff as Constants/ENUM items
const App = ({activeScene, activateSceneAction}) => {
  return (
    <div id="app">
      <header>
        <nav className={"#90caf9 blue center-align"}>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">
              {"Hotelbooking with redux -"} {activeScene}
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="#" onClick={() => activateSceneAction("offers")}>{"Offers"}</a>
              </li>
              <li>
                <a href="#" onClick={() => activateSceneAction("cart")}>{"Cart"}</a>
              </li>
              <li>
                <a href="#" onClick={() => activateSceneAction("registration")}>{"Registration"}</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <article className="container">
        <OffersContainer />
        <CartContainer />
        <RegistrationContainer />
      </article>
    </div>
  );
};

App.propTypes = {
  activeScene: PropTypes.string.isRequired,
  activateSceneAction: PropTypes.func.isRequired
};

export default App;
