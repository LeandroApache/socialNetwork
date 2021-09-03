import React from "react";
import classes from "./MainMenu.module.css";
import {Title} from "./Title/Title";
import {Menu} from "./Menu/Menu";

export function MainMenu(){
  return (
    <section className={classes.menu}>
      <Title value="Menu"/>
      <Menu />
    </section>
  )
}