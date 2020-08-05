import React from "react";
import style from "../sass/_components.module.scss";
import { StateConsumer } from "../Context";
import GridItem from "./GridItem";

export default () => {
  return (
    <StateConsumer>
      {(value) => {
        const { boxes } = value;

        if (boxes.length === 0) {
          return <div>PLEASE USE A SEARCH TO FIND A MOVIE</div>;
        }

        return (
          <div className={style.boxContainer}>
            {boxes.map((x) => {
              return <GridItem value={x} key={x.imdbID}></GridItem>;
            })}
          </div>
        );
      }}
    </StateConsumer>
  );
};
