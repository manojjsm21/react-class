import React, { Component } from "react";
interface State1 {
  name: string;
  age: number;
}
interface Data {}
export default class DashBoard extends Component<Data, State1> {
  constructor(props: Data) {
    super(props);
    this.state = { name: "", age: 0 };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age}</h3>
      </div>
    );
  }
}
