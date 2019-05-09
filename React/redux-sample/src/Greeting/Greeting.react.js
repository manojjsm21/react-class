import React from "react";
import Greeter from "../Greeter/Greeter.react";
import store from "../Store";
import { showBirthDay, showWeddingDay } from "../action";
import { connect } from "react-redux";
class Greeting extends React.Component {
  birthDayGreet = () => {
    store.dispatch(showBirthDay("happy Birthday"));
  };

  weddingDayGreet = () => {
    store.dispatch(showWeddingDay("Happy Anniversary"));
  };

  render() {
    return (
      <div>
        <h2>{this.props.text}</h2>
        <Greeter action={this.birthDayGreet} lable={"birthDay "} />
        <Greeter action={this.weddingDayGreet} lable={"weddingDay"} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { text: state.text };
};

export default connect(mapStateToProps)(Greeting);
