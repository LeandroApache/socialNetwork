import React from "react";
import classes from "./UserMenu.module.css";

export function UserMenu() {
  return (
    <div className={classes.userMenu}>
      <div>Languages</div>
      <div>Messages</div>
      <div>Profile</div>
    </div>
  )
}