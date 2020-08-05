import React from "react";
import style from "../sass/_components.module.scss";

export default function Title({ name }) {
  return (
    <>
      <div className={style.title}>
        <h1>{name}</h1>
        <div className={style.line}></div>
      </div>
    </>
  );
}
