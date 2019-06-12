import React from "react";
import PropTypes from "prop-types";

import "./App.css";
import OffersContainer from "../offers/OffersContainer";
import CartContainer from "../cart/CartContainer";
import RegistrationContainer from "../registration/RegistrationContainer";
import NavMenuItemComponent from "./NavMenuItemComponent";

import { MENU_ITEMS } from "./appConstants";

const App = ({activeScene, activateSceneAction}) => {
  return (
    <div id="app">
      <header>
        <nav className={"#90caf9 blue center-align"}>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">
              {"Redux Hotelbooking -"} {activeScene}
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {MENU_ITEMS.map(itemName => <NavMenuItemComponent activeScene={activeScene}
                                                                clickHandler={activateSceneAction}
                                                                itemName={itemName}/>)}

            </ul>
          </div>
        </nav>
      </header>
      <article className="container">
        <OffersContainer/>
        <CartContainer/>
        <RegistrationContainer/>
      </article>
    </div>
  );
};

App.propTypes = {
  activeScene: PropTypes.string.isRequired,
  activateSceneAction: PropTypes.func.isRequired
};

export default App;
