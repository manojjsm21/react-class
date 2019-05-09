import React from "react";
import PropTypes from "prop-types";
const Footer = props => {
  return (
    <div>
      <h6>Tiger travel 2019 by {props.nameofOwner}</h6>
      <button onClick={props.action}>mail</button>
      {props.children}
    </div>
  );
};
Footer.propTypes = {
  action: PropTypes.func,
  nameofOwner: PropTypes.string.isRequired
};

export default Footer;
