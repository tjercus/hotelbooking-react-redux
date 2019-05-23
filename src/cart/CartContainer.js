import { connect } from 'react-redux'
import CartList from './CartList'
import {delItemAction} from "./cartActions";

const mapStateToProps = state => {
  console.log("mapStateToProps", state);
  return {
    items: state.cartReducer.items
  }
};

const mapDispatchToProps = dispatch => ({
  delItemAction: dispatch(delItemAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartList)
