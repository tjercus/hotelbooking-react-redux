import { connect } from 'react-redux'
import OffersList from './OffersList'
import {addItemToCartActionCreator} from "../cart/cartActions";

const mapStateToProps = state => {
  console.log("OffersContainer.mapStateToProps", state);
  return {
    offers: state.offersReducer.offers
  }
};

const mapDispatchToProps = dispatch => ({
  addItemToCartAction: offer => dispatch(addItemToCartActionCreator(offer))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OffersList)
