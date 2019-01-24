import React, { Component } from "react";

class Item extends Component {
  state = {
    disabled: true
  };

  constructor() {
    super();
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleUpdateCurrentState = this.handleUpdateCurrentState.bind(this);

    //this muss gebindet werden, wenn die unteren funktionen keine arrow-funktionen sind
    //andernfalls kann man sich das binden sparen
  }

  handleUpdateCurrentState(e) {
    this.props.updateCurrentState(e.target.dataset.childcomponentid);
  }

  handleButtonClick() {
    this.setState({
      disabled: !this.state.disabled
    });
  }

  render() {
    return (
      <div className="item my-5">
        <div className="row">
          <div className="col-auto">
            <img src={this.props.currentState.img} className="item-image" />
          </div>
          <div className="col-auto">
            <div className="item-info">
              <h3>{this.props.currentState.title}</h3>
              <p>{this.props.currentState.description}</p>
              <div className="item-navigation">
                <button
                  className="btn btn-primary"
                  onClick={this.handleButtonClick}
                >
                  Add
                </button>
                <button
                  className="btn btn-secondary"
                  disabled={this.state.disabled}
                  onClick={this.handleUpdateCurrentState}
                  data-childcomponentid={this.props.currentState.id}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
