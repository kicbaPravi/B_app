import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();
const StateConsumer = Context.Consumer;

export default class StateProvider extends Component {
  state = {
    boxes: [],
    filteredBoxes: []
  };

  componentDidMount() {
    axios.get("https://picsum.photos/v2/list").then(res => {
      this.setState({
        boxes: res
      });
    });
  }

  filteredBoxes() {}

  render() {
    return (
      <Context.Provider value={{ ...this.state }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { StateProvider, StateConsumer, Context };
