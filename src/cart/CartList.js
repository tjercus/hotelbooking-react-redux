import React from "react";
import OfferRowComponent from "../offers/OfferRowComponent";
import PropTypes from "prop-types";

const CartList = ({ items }) => {
  console.log("CartList", items);
  return (
    <section id="cart" className={"cart-panel"}>
      <h2>Cart</h2>

      <table id="cart-list" className="striped">
        <thead>
        <tr>
          <th>Hotel</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {items.map((offer, i) => (
          <OfferRowComponent offer={offer} key={i} />
        ))}
        </tbody>
      </table>
    </section>
  );
};

CartList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default CartList;
