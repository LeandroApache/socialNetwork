import React from "react";
import classes from "./Main.module.css";
import {NavigationBar} from "./NavigationBar/NavigationBar";
import {MainContent} from "./MainContent/MainContent";

export function Main() {
  return (
    <main className={classes.main}>
      <NavigationBar/>
      <MainContent />
    </main>
  )
}