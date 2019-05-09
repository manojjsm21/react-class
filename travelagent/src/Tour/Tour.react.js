import React from "react";

const Tour = props => {
  return (
    <div>
      <div className="card border-primary mb-3" style={{ maxWidth: "18rem" }}>
        <div className="card-header">{props.tourName}</div>
        <div className="card-body text-primary">
          <h5 className="card-title">
            Id: {props.id} | |Cost: {props.cost}
          </h5>
          <p className="card-text"> </p>
        </div>
      </div>
    </div>
  );
};

export default Tour;
