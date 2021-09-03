import React from "react";
import classes from "./NavigationBar.module.css";
import {MainMenu} from "./MainMenu/MainMenu";

export function NavigationBar() {
  return (
    <div className={classes.navigationBar}>
      <MainMenu/>
      <section className="favorites">
        <h2></h2>
        <nav>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </section>
    </div>
  )
}
