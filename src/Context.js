import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();
const StateConsumer = Context.Consumer;

export default class StateProvider extends Component {
  state = {
    boxes: [],
    sortedName: false,
    sortedYear: false,
  };

  findMovie = (name, year) => {
    axios
      .get(
        `http://www.omdbapi.com/?s=${name}&y=${year}&type=movie&apikey=a60b1ab8`
      )
      .then((res) => {
        this.setState({
          boxes: res.data.Search,
        });
      });
  };

  clearInputs = () => {
    this.setState({
      boxes: [],
    });
  };

  sortByName = (data) => {
    if (!this.state.sortedName) {
      const newArray = data.sort((a, b) => (a.Title > b.Title ? 1 : -1));
      this.setState({
        boxes: newArray,
        sortedName: true,
      });
    } else {
      const newArray = data.sort((a, b) => (b.Title > a.Title ? 1 : -1));
      this.setState({
        boxes: newArray,
        sortedName: false,
      });
    }
  };

  sortByYear = (data) => {
    if (!this.state.sortedYear) {
      const newArray = data.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));

      this.setState({
        boxes: newArray,
        sortedYear: true,
      });
    } else {
      const newArray = data.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));

      this.setState({
        boxes: newArray,
        sortedYear: false,
      });
    }
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          findMovie: this.findMovie,
          clearInputs: this.clearInputs,
          sortByName: this.sortByName,
          sortByYear: this.sortByYear,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export { StateProvider, StateConsumer, Context };
