import React from "react";
import Tour from "../Tour/Tour.react";
import Agent from "../Agent/Agent.react";
import AddTour from "../AddTour/AddTour.react";

class TourMgr extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tourList: [], agents: [] };
  }

  componentDidMount() {
    const urls = [
      "http://localhost:4000/summerTours",
      "http://localhost:4000/agents"
    ];
    urls.map((url, key) => {
      fetch(url)
        .then(resp => resp.json())
        .then(data =>
          key == 0
            ? this.setState({ tourList: data })
            : this.setState({ agents: data })
        );
    });
  }

  render() {
    return (
      <div>
        <h1>Tours</h1>
        <div className="row">
          {this.state.tourList.map(eachTour => {
            return (
              <Tour
                id={eachTour.id}
                key={eachTour.id}
                tourName={eachTour.tourName}
                cost={eachTour.cost}
              />
            );
          })}
        </div>
        <h1>Agents</h1>
        <div className="row">
          {this.state.agents.map(eachTour => {
            return (
              <Agent
                id={eachTour.id}
                key={eachTour.id}
                Name={eachTour.Name}
                Contact={eachTour.Contact}
              />
            );
          })}
        </div>
        <AddTour />
      </div>
    );
  }
}

export default TourMgr;
