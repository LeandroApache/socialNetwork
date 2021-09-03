import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.module.css";

type navigationItemType = {
  title: string
  path: string
}

export function NavigationItem(props: navigationItemType) {
  return (
    <li className={classes.item}>
      <NavLink to={`/${props.path}`} activeClassName={classes.active}>{props.title}</NavLink>
    </li>
  )
}