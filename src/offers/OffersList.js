import React from "react";
import PropTypes from "prop-types";

import OfferRowComponent from "./OfferRowComponent";

const OffersList = ({ offers, addItemToCartAction }) => {
  console.log("OffersList", offers);
  return (
    <section id="offers" className={"offers-panel card-panel"}>
      <h2>Offers</h2>

      <table id="offers-list" className="striped">
        <thead>
          <tr>
            <th>Hotel</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {offers.map((offer, i) => (
            <OfferRowComponent
              addItemToCartAction={addItemToCartAction}
              offer={offer}
              key={i}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default OffersList;
