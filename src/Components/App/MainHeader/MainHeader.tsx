import React from "react";
// import "./UserMenu.module.css";
import classes from "./MainHeader.module.css";
import {Logo} from "./Logo/Logo";
import {Search} from "./Search/Search";
import {UserMenu} from "./UserMenu/UserMenu";

export function MainHeader() {
  return (
    <header className={classes.mainHeader}>
      <Logo/>
      <Search/>
      <UserMenu/>
    </header>
  )
}