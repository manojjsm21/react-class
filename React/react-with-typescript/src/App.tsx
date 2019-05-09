import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/Banner";

const App: React.FC = () => {
  return (
    <div className="App">
      <Banner name={"Manoj"} age={12123} />
      <h1>TypeScript</h1>
    </div>
  );
};

export default App;
