import React from "react";
import PropTypes from "prop-types";

/**
 *
 * @param {Item} item - in the context of offersList or cartList
 * @param {Object<Array<Element>>} children - react construct for element composition
 * @returns {Element|null}
 * @constructor
 */
const ItemRowComponent = ({ item, children }) =>
  item ? (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>
        {children}
      </td>
    </tr>
  ) : null;

ItemRowComponent.propTypes = {
  item: PropTypes.object.isRequired,
  buttonComponents: PropTypes.element
};

export default ItemRowComponent;
