import React from "react";

const OfferRowComponent = ({ offer }) => {
  return (
    <tr key={offer.id}>
      <td>{offer.name}</td>
      <td>{offer.price}</td>
      <td>add and remove</td>
    </tr>
  );
};

OfferRowComponent.propTypes = {
  offer: React.PropTypes.object.isRequired
};

export default OfferRowComponent;
