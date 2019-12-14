import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./css/main.css";

import CountButton from "./input";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, World! </h1>
        <p>some more changes</p>
        <p>even more chnages</p>
        <CountButton />
      </div>
    );
  }
}

export default hot(module)(App);
