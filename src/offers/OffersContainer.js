import { connect } from 'react-redux'
// import { addOfferAction } from './offersActions'
import OffersList from './OffersList'
import {addOfferAction} from "./offersActions";

const mapStateToProps = state => {
  console.log("mapStateToProps", state);
  return {
    offers: state.offers // state.offersReducer.offers
  }
};

const mapDispatchToProps = dispatch => ({
  addOfferAction: dispatch(addOfferAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OffersList)
