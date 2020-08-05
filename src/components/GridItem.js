import React from "react";
import style from "../sass/_components.module.scss";
import { FaCalculator } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";

export default function GridItem({ value }) {
  const { Poster, Title, Year, Type } = value;

  return (
    <div className={style.box}>
      <a href={Poster}>
        <img src={Poster} alt={Type} />
      </a>

      <div>
        <h1>{Title}</h1>
        <p>
          <FaCalculator className={style.icons} />
          Year: {Year}
        </p>
        <p>
          <FaGoogleDrive className={style.icons} />
          Type: {Type}
        </p>
      </div>
    </div>
  );
}
