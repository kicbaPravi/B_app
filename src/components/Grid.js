import React from "react";
import style from "../sass/_components.module.scss";
import { StateConsumer } from "../Context";
import GridItem from "./GridItem";

export default () => {
  return (
    <StateConsumer>
      {value => {
        const { boxes, tempValue } = value;
        const filteredBoxes =
          boxes.data != null
            ? boxes.data.filter(
                contact =>
                  contact.author.toLowerCase().indexOf(tempValue) !== -1
              )
            : null;

        if (boxes.length === 0) {
          return <div>LOADING, PLEASE WAIT!</div>;
        }

        if (tempValue !== "") {
          return (
            <div className={style.boxContainer}>
              {filteredBoxes.map((item, id) => {
                return <GridItem key={id} item={item}></GridItem>;
              })}
            </div>
          );
        }

        // namerno stavljam slice od 1 do 7, a ne od 0 do 6, zato sto se ponavljaju prve dve slike

        return (
          <div className={style.boxContainer}>
            {boxes.data.slice(1, 7).map((item, id) => {
              return <GridItem key={id} item={item} />;
            })}
          </div>
        );
      }}
    </StateConsumer>
  );
};
