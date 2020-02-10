import React, { Component, useState } from "react";
import axios from "axios";

const Context = React.createContext();
const StateConsumer = Context.Consumer;

export default class StateProvider extends Component {
  state = {
    boxes: [],
    tempValue: ""
  };

  componentDidMount() {
    axios.get("https://picsum.photos/v2/list").then(res => {
      this.setState({
        boxes: res
      });
    });
  }

  updateValue = value => {
    this.setState({ tempValue: value });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, updateValue: this.updateValue }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { StateProvider, StateConsumer, Context };
