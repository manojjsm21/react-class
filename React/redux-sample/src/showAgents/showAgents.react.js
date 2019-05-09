import React from "react";
import { connect } from "react-redux";
import { getAllAgents } from "../restStore";

class showAgents extends React.Component {
  render() {
    return (
      <div>
        {this.props.agentList.map(eachTour => {
          return (
            <div>
              id= {eachTour.id}
              key={eachTour.id}
              Name={eachTour.Name}
              Contact={eachTour.Contact}
            </div>
          );
        })}
        <button onClick={this.props.getAll}>Show Agents</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    agentList: state.agentList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAll: () => {
      dispatch(getAllAgents());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(showAgents);
