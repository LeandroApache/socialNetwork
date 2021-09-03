import React from "react";
import classes from "./Search.module.css";

export function Search() {
  return (
    <div className={classes.search}>
      <form action="#">
        <input type="search" placeholder="Search..."/>
      </form>
    </div>
  )
}