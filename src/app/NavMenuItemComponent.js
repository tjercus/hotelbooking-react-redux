import React from "react";
import PropTypes from "prop-types";

const NavMenuItemComponent = ({activeScene, itemName, clickHandler}) => {
  return <li className={activeScene === itemName ? "active" : ""}>
    <a href="#" onClick={() => clickHandler(itemName)}>{itemName}</a>
  </li>;
};

NavMenuItemComponent.propTypes = {
  activateScene: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default NavMenuItemComponent;
