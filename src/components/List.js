import React, { Component } from "react";
import style from "../sass/_components.module.scss";
import { Context } from "../Context";
import ListItem from "./ListItem";
import SearchFilter from "./SearchFilter";

export default class List extends Component {
  static contextType = Context;

  render() {
    const { boxes } = this.context;

    const fixedValue = [
      { month: "FEB", day: "14", year: "", time: "Mon - 19:30" },
      { month: "FEB", day: "28", year: "2019", time: "Thu - 20:00" },
      { month: "MAR", day: "01", year: "", time: "Until Mar 03" }
    ];

    if (boxes.length === 0) {
      return <div>LOADING, PLEASE WAIT!</div>;
    }

    return (
      <div className={style.listContainer}>
        {boxes.data.slice(8, 11).map((item, id) => {
          return <ListItem key={id} item={item} fixedValue={fixedValue[id]} />;
        })}
      </div>
    );
  }
}
