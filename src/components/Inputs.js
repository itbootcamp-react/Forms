import React, { Component } from "react";

class Inputs extends Component {
  state = {
    username: "",
    age: null,
    errorMassage: "",
  };

  handleChange = (event) => {
    let name = event.target.name;
    let val = event.target.value;
    let err = "";
    if (name === "age") {
      if (val !== "" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    }
    this.setState({ [name]: val });
    this.setState({ errorMassage: err });
  };

  render() {
    return (
      <form>
        <h1>
          Hello {this.state.username} {this.state.age}
        </h1>
        <p>Enter your name</p>
        <input type="text" name="username" onChange={this.handleChange} />
        <p>Enter your age</p>
        <input type="text" name="age" onChange={this.handleChange} />
        <br />
        {this.state.errorMassage}
      </form>
    );
  }
}

export default Inputs;
