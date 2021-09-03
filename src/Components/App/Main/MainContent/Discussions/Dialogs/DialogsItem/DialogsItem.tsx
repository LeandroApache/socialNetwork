import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./DialogsItem.module.css";

type dialogsItemType = {
  name: string,
  id: number
}

export function DialogsItem(props: dialogsItemType) {
  let path = `/discussions/${props.id}`;
  return (
    <div className={classes.dialogsItem}>
      <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
    </div>
)
}