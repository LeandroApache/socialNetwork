import React from "react";
import classes from "./Menu.module.css";
import {NavigationItem} from "./Item/NavigationItem";

export function Menu() {
  return (
    <nav>
      <ul className={classes.list}>
        <NavigationItem title={"Profile"} path={"profile"}/>
        <NavigationItem title={"Discussions"} path={"discussions"}/>
        <NavigationItem title={"Friends"} path={"friends"}/>
        <NavigationItem title={"Events"} path={"events"}/>
        <NavigationItem title={"Videos"} path={"videos"}/>
        <NavigationItem title={"Photos"} path={"photos"}/>
        <NavigationItem title={"Files"} path={"files"}/>
      </ul>
    </nav>
  )
}