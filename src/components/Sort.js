import React from "react";
import style from "../sass/_components.module.scss";
import { StateConsumer } from "../Context";

export default () => {
  return (
    <StateConsumer>
      {({ boxes, sortByName, sortByYear }) => {
        if (boxes.length === 0) {
          return null;
        }

        return (
          <div className={style.title}>
            <button
              className={style.sortButton}
              onClick={() => sortByYear(boxes)}
            >
              Sort by year
            </button>
            <button
              className={style.sortButton}
              onClick={() => sortByName(boxes)}
            >
              Sort by name
            </button>
          </div>
        );
      }}
    </StateConsumer>
  );
};
