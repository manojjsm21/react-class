import React from "react";

const Greeter = props => {
  return (
    <div>
      <button onClick={props.action}>{props.lable}</button>
    </div>
  );
};

export default Greeter;
