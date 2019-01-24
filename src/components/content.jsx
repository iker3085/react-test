import React, { Component } from "react";

import Item from "./item";

class Content extends Component {
  state = {
    items: [
      {
        id: 1,
        img: "https://picsum.photos/200/125",
        title: "Item 1",
        description: 0
      },
      {
        id: 2,
        img: "https://picsum.photos/200/100",
        title: "Item 2",
        description: 0
      },
      {
        id: 3,
        img: "https://picsum.photos/200/175",
        title: "Item 3",
        description: 0
      },
      {
        id: 4,
        img: "https://picsum.photos/200/200",
        title: "Item 4",
        description: 0
      }
    ]
  };

  constructor() {
    super();
    this.updateCurrentState = this.updateCurrentState.bind(this);
  }

  updateCurrentState(childcomponentid) {
    let idx = 0;
    for (let i = 0; i < this.state.items.length; i++) {
      if (this.state.items[i].id === parseInt(childcomponentid)) {
        // id ist eine INT und chilid ist ein string, daher muss childid mit parseint in eine INT umgewandelt werden
        idx = i;
        break;
      }
    }

    let items = this.state.items;
    items[idx].img = "";
    this.setState({
      items: items
    });
  }

  render() {
    return (
      <div className="col-9">
        {this.state.items.map(item => {
          console.log(item);
          return (
            <Item
              key={item.id}
              currentState={item}
              updateCurrentState={this.updateCurrentState}
            />
          );
        })}
      </div>
    );
  }
}

export default Content;
