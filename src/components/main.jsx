import React, { Component } from "react";

import Content from "./content";
import Sidebar from "./sidebar";

class Main extends Component {
  render() {
    return (
      <main className="my-5">
        <div className="container">
          <div className="row">
            <Sidebar />
            <Content />
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
