import React from "react";
import style from "../sass/_components.module.scss";
import SearchFilter from "./SearchFilter";

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.searchBox_container}>
        <SearchFilter></SearchFilter>
      </div>
    </div>
  );
}
