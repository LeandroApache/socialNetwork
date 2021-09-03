import React from "react";
import classes from "./ProfileName.module.css";


export function ProfileName() {
  return (
    <div className={classes.profileName}>
      <h3 className={classes.title}>Alexander Ivulin</h3>
      <p className={classes.email}>alexanderIvulinTop@gmail.com</p>
    </div>
  )
}