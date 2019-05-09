import React from "react";

class AddTour extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newTour: { id: 0, tourName: "", cost: 0 } };
  }
  handelSubmit = event => {
    event.preventDefault();
    console.log(this.state.newTour);
    const url = "http://localhost:4000/summerTours";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(this.state.newTour),
      headers: { "content-Type": "application/json" }
    }).then(resp => {
      this.setState({ tourList: resp });
    });
  };

  handelChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    //console.log(name + value);
    //console.log(this.state.newTour);
    this.setState(prevState => ({
      newTour: { ...prevState.newTour, [name]: value }
    }));
  };

  render() {
    return (
      <div>
        <form action="" onSubmit={this.handelSubmit}>
          <div>
            <label htmlFor="id">ID</label>
            <input
              type="text"
              name="id"
              value={this.state.newTour.id}
              onChange={this.handelChange}
            />
          </div>
          <div>
            <label htmlFor="tourName">Tour Name</label>
            <input
              type="text"
              name="tourName"
              value={this.state.newTour.tourName}
              onChange={this.handelChange}
            />
          </div>
          <div>
            <label htmlFor="cost">Cost</label>
            <input
              type="text"
              name="cost"
              value={this.state.newTour.cost}
              onChange={this.handelChange}
            />
          </div>
          <div>
            <input type="submit" value="ADD" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddTour;
