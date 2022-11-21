import React, { Component } from "react";

export default class App extends Component {
  c = "nikhil";
  render() {
    return (
      <div>
        <h3>Hello world {this.c}</h3>
      </div>
    );
  }
}
