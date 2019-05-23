import React from "react";
import OfferRowComponent from "./OfferRowComponent";
import PropTypes from "prop-types";

const OffersList = ({ offers }) => {
  return (
    <section id="offers" className={"offers-panel"}>
      <h2>Offers</h2>

      <table id="offers-list" className="pure-table pure-table-bordered">
        <thead>
          <tr>
            <th>Hotel</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {offers.map((offer, i) => (
            <OfferRowComponent offer={offer} key={i} />
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
