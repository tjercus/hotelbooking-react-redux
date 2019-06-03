import React from "react";
import PropTypes from "prop-types";

import CartRowComponent from "./CartRowComponent";

const CartList = ({ items, total, delItemFromCartAction }) => {
  console.log("CartList", items);
  return (
    <section id="cart" className={"cart-panel card-panel"}>
      <h2 className={"header"}>Cart</h2>

      <table id="cart-list" className="striped">
        <thead>
          <tr>
            <th>Hotel</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <CartRowComponent
              item={item}
              delItemFromCartAction={delItemFromCartAction}
              key={i}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">
              {"Total:"} {total}
            </td>
          </tr>
        </tfoot>
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
  ).isRequired,
  total: PropTypes.number.isRequired,
  delItemFromCartAction: PropTypes.func.isRequired
};

export default CartList;
