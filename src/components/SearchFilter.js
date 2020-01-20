import React, { Component } from "react";

export default class SearchFilter extends Component {
  state = {
    tempValue: ""
  };

  onChange = e => {
    this.setState({
      tempValue: e.target.value
    });
  };

  render() {
    return (
      <>
        <input
          type="text"
          placeholder="Search for artist, event or venue"
          onChange={this.onChange}
        />
        <button>Go</button>
      </>
    );
  }
}
