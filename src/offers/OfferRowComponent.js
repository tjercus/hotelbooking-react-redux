import React from "react";
import PropTypes from "prop-types";
import ItemRowComponent from "../item/ItemRowComponent";

const OfferRowComponent = ({ offer, addItemToCartAction }) => (
  <ItemRowComponent item={offer}>
    <button
      onClick={() => addItemToCartAction(offer)}
      className="btn waves-effect waves-light green lighten-0"
    >
      {"add to cart"}
    </button>
  </ItemRowComponent>
);

OfferRowComponent.propTypes = {
  offer: PropTypes.object.isRequired,
  addItemToCartAction: PropTypes.func.isRequired
};

export default OfferRowComponent;
