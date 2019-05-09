import React from "react";
import { Route, Switch } from "react-router-dom";
import TourMgr from "../TourMgr/TourMgr.react";
import AddTour from "../AddTour/AddTour.react";

const MyRoutes = () => {
  return (
    <div>
      <Route path="/AddTour" component={AddTour} />
      <Route path="/TourMgr" component={TourMgr} />
    </div>
  );
};

export default MyRoutes;
