import React, { Component } from "react";
import style from "../sass/_components.module.scss";
import { Context } from "../Context";
import ListItem from "./ListItem";

export default class List extends Component {
  static contextType = Context;

  render() {
    const { boxes } = this.context;
    const { tempValue } = this.context;

    const filteredBoxes =
      boxes.data != null
        ? boxes.data.filter(
            contact => contact.author.toLowerCase().indexOf(tempValue) !== -1
          )
        : null;

    const fixedValue = [
      { month: "FEB", day: "14", year: "2019", time: "Mon - 19:30" },
      { month: "FEB", day: "28", year: "2019", time: "Thu - 20:00" },
      { month: "MAR", day: "01", year: "2019", time: "Until Mar 03" },
      { month: "APR", day: "07", year: "2019", time: "Until Jun 14" },
      { month: "SEP", day: "13", year: "2019", time: "Until Mar 09" },
      { month: "JAN", day: "24", year: "2019", time: "Until Avg 03" },
      { month: "FEB", day: "11", year: "2019", time: "Until Mar 14" },
      { month: "JUN", day: "27", year: "2019", time: "Thu - 20:00" },
      { month: "FEB", day: "11", year: "2019", time: "Until Sep 03" },
      { month: "JUL", day: "14", year: "2019", time: "Until Mar 08" },
      { month: "SEP", day: "05", year: "2019", time: "Until Feb 03" },
      { month: "MAR", day: "03", year: "2020", time: "Until Mar 03" },
      { month: "NOV", day: "19", year: "2020", time: "Thu - 20:00" },
      { month: "FEB", day: "21", year: "2018", time: "Until Mar 03" },
      { month: "FEB", day: "21", year: "2018", time: "Until Mar 15" },
      { month: "JUL", day: "04", year: "2020", time: "Until Mar 03" },
      { month: "AUG", day: "07", year: "2021", time: "Thu - 20:00" },
      { month: "JUL", day: "15", year: "2019", time: "Until Mar 03" },
      { month: "JAN", day: "19", year: "2017", time: "Until Jun 04" },
      { month: "MAR", day: "12", year: "2020", time: "Thu - 20:00" },
      { month: "FEB", day: "06", year: "2019", time: "Until Mar 03" },
      { month: "SEP", day: "15", year: "2018", time: "Until Mar 03" },
      { month: "DEC", day: "08", year: "2019", time: "Until Mar 03" },
      { month: "FEB", day: "06", year: "2020", time: "Until Mar 03" },
      { month: "MAR", day: "15", year: "2021", time: "Thu - 20:00" },
      { month: "JUN", day: "11", year: "2020", time: "Until Mar 03" },
      { month: "OCT", day: "21", year: "2019", time: "Until Mar 03" },
      { month: "NOV", day: "23", year: "2019", time: "Until Mar 03" },
      { month: "DEC", day: "07", year: "2018", time: "Thu - 20:00" },
      { month: "MAR", day: "09", year: "2020", time: "Until Mar 03" },
      { month: "JUL", day: "10", year: "2019", time: "Until Mar 03" }
    ];

    if (boxes.length === 0) {
      return <div>LOADING, PLEASE WAIT!</div>;
    }

    if (tempValue !== "") {
      return (
        <div className={style.listContainer}>
          {filteredBoxes.map((item, id) => {
            return (
              <ListItem key={id} item={item} fixedValue={fixedValue[id]} />
            );
          })}
        </div>
      );
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
