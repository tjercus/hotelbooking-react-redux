import { connect } from "react-redux";
import OffersList from "./OffersList";
import { addItemToCartActionCreator } from "../cart/cartActions";

const mapStateToProps = state => {
  console.log("OffersContainer.mapStateToProps", state);
  return {
    offers: state.offersReducer.offers,
    activeScene: state.appReducer.activeScene
  };
};

const mapDispatchToProps = dispatch => ({
  addItemToCartAction: offer =>
    setTimeout(() => {
      dispatch(addItemToCartActionCreator(offer))
    }, 5000)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OffersList);
