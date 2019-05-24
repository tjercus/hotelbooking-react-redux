import { connect } from "react-redux";
import CartList from "./CartList";
import { delItemFromCartActionCreator } from "./cartActions";

const mapStateToProps = state => {
  console.log("mapStateToProps", state);
  return {
    items: state.cartReducer.items,
    total: state.cartReducer.total
  };
};

const mapDispatchToProps = dispatch => ({
  delItemFromCartAction: item => dispatch(delItemFromCartActionCreator(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartList);
