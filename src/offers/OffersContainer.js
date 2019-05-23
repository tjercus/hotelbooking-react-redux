import { connect } from 'react-redux'
// import { addOfferAction } from './offersActions'
import OffersList from './OffersList'
import {addOfferAction} from "./offersActions";

const mapStateToProps = state => ({
  offers: state.offers
});

const mapDispatchToProps = dispatch => ({
  addOfferAction: dispatch(addOfferAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OffersList)
