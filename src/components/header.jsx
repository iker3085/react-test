import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="navbar navbar-dark bd-navbar flex-row">
        <a href="#" className="navbar-brand">
          Test
        </a>
        <ul className="navbar-nav flex-row">
          <li className="nav-item">
            <a className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Link1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Link2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Link3</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Link4</a>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
