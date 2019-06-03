import PropTypes from "prop-types";

export const UPDATE_USER_CMD = "UPDATE_USER_CMD";

export const REGISTER_USER_CMD = "REGISTER_USER_CMD";

export const userShape = {
  name: PropTypes.string,
  gender: PropTypes.string,
  province: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.number,
  creditcard: PropTypes.number,
};
