import React from "react";
import PropTypes from "prop-types";

const OfferRowComponent = ({ offer }) =>
  offer ? (
    <tr key={offer.id}>
      <td>{offer.name}</td>
      <td>{offer.price}</td>
      <td>add and remove</td>
    </tr>
  ) : null;


OfferRowComponent.propTypes = {
  offer: PropTypes.object.isRequired
};

export default OfferRowComponent;
