import React from "react";
import classes from "./Title.module.css";

type titleType = {
  value: string
}
export function Title(props: titleType){
  return (
      <h2 className={classes.title}>{props.value}</h2>
  )
}