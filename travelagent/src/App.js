import React from "react";

import "./App.css";
import Header from "./Header/Header.react";
import Footer from "./Footer/Footer.react";
import logo1 from "./images/640.jpg";
import TourMgr from "./TourMgr/TourMgr.react";
import MyRoutes from "./MyRoutes/MyRoutes.react";

const handelClick = event => {
  console.log(event);
  console.log("clicked !!!");
};
function App() {
  return (
    <div className="App">
      <Header majHead={"Manoj Travel"} logo={logo1} />
      <MyRoutes />
      <Footer action={handelClick} nameofOwner={"manoj"}>
        <p>
          <a href="mailTo:asd@asd.com">contact me</a>
        </p>
      </Footer>
    </div>
  );
}

export default App;
