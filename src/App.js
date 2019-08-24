import React, { Component } from "react";

import Header from "./Header";
import MemeGenerator from "./MemeGenerator";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <MemeGenerator />
      </div>
    );
  }
}

export default App;
