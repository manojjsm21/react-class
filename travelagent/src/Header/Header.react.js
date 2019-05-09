import React from "react";
import Menu from "../Menu/Menu.react";

const links = ["AddTour", "TourMgr", "contactUs"];
const Header = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="cal-md-2">
          <img src="pics/logo1.jpg" alt="logo" />
        </div>
        <div className="cal-md-2">
          <img src={props.logo} alt="logo" />
        </div>
      </div>
      <div className="row text-center">
        <h2 className="text-center">{props.majHead}</h2>
      </div>
      <div className="row">
        <div className="nav">
          <Menu linkItems={links} />
        </div>
      </div>
    </div>
  );
};

export default Header;
