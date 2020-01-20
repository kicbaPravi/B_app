import React from "react";
import style from "../sass/_components.module.scss";
import { FaCalculator } from "react-icons/fa";
import { FaGoogleDrive } from "react-icons/fa";

export default function GridItem({ item }) {
  const { author, width, height, url, download_url } = item;

  return (
    <div className={style.box}>
      <h2>{author}</h2>
      <a href={url}>
        <img src={download_url} alt={author} />
      </a>

      <div>
        <p>
          <FaCalculator className={style.icons} />
          Height: {height}
        </p>
        <p>
          <FaGoogleDrive className={style.icons} />
          Width: {width}
        </p>
      </div>
    </div>
  );
}
