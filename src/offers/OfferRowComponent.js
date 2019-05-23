import React from "react";
import PropTypes from "prop-types";

import { addItemAction } from "../cart/cartActions";

const OfferRowComponent = ({ offer }) =>
  offer ? (
    <tr key={offer.id}>
      <td>{offer.name}</td>
      <td>{offer.price}</td>
      <td><button onClick={addItemAction}>add to cart</button></td>
    </tr>
  ) : null;


OfferRowComponent.propTypes = {
  offer: PropTypes.object.isRequired
};

export default OfferRowComponent;
