import React from "react";
import PropTypes from "prop-types";
import ItemRowComponent from "../item/ItemRowComponent";

const CartRowComponent = ({ item, delItemFromCartAction }) => (
  <ItemRowComponent item={item}>
    <button
      onClick={() => delItemFromCartAction(item)}
      className="btn waves-effect waves-light red lighten-0"
    >
      {"remove from cart"}
    </button>
  </ItemRowComponent>
);

CartRowComponent.propTypes = {
  item: PropTypes.object.isRequired,
  delItemFromCartAction: PropTypes.func.isRequired
};

export default CartRowComponent;
