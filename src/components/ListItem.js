import React from "react";
import style from "../sass/_components.module.scss";

export default function List_Item({ item, fixedValue }) {
  const { author, width, height, url, download_url } = item;

  const { month, day, year, time } = fixedValue;

  return (
    <div className={style.list_item}>
      <div className={style.list_item_container}>
        <div className={style.listImage}>
          <img src={download_url} alt={author} />
        </div>
        <div className={style.date}>
          <p>{month}</p>
          <p className={style.day}>{day}</p>
          <p>{year}</p>
        </div>
        <div className={style.details}>
          <p className={style.time}>{time}</p>
          <p>{author}</p>
          <p className={style.widthHeight}>
            Width: {width}, Height: {height}
          </p>
        </div>
        <div className={style.find}>
          <a href={url}>
            <div className={style.button}>Find pics</div>
          </a>
        </div>
      </div>
    </div>
  );
}
