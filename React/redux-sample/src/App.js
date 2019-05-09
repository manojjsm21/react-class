import React, { useState } from "react";
import "./App.css";
import Greeting from "./Greeting/Greeting.react";
import ShowAgents from "./showAgents/showAgents.react";
import AddAgentsReact from "./AddAgents/AddAgents.react";
import axios from "axios";

function App() {
  const [status, setStatus] = useState("waiting...");
  const showResilts = value => {
    console.log("submitted");
    console.log(value);
    const url = "http://localhost:4000/agents";

    axios.post(url, value).then(resp => {
      console.log("done");
      setStatus("One Agent Added");
    });
  };
  return (
    <div className="App">
      <h1> Redux Sample</h1>
      {/*<ShowAgents />*/}
      <p>{status}</p>
      <AddAgentsReact onSubmit={showResilts} />
    </div>
  );
}

export default App;
