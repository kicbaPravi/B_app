import React from "react";
import style from "../sass/_components.module.scss";

export default function List_Item({ value }) {
  const { Poster, Title, Year, Genre } = value;

  return (
    <div className={style.list_item}>
      <div className={style.list_item_container}>
        <div className={style.listImage}>
          <img src={Poster} />
        </div>
        <div className={style.date}>
          <p>{Year}</p>
          <p className={style.day}>{Year}</p>
          <p>{Title}</p>
        </div>
        <div className={style.details}>
          <p className={style.time}>{Year}</p>
          <p>{Year}</p>
          <p className={style.widthHeight}>
            Width: {Year}, Height: {Year}
          </p>
        </div>
        <div className={style.find}>
          <a href={Poster}>
            <div className={style.button}>Find pics</div>
          </a>
        </div>
      </div>
    </div>
  );
}
