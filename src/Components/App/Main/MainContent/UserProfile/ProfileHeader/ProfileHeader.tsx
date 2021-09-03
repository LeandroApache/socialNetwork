import React from "react";
import classes from "./ProfileHeader.module.css";
import {ProfileBg} from "./ProfileBg/ProfileBg";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


export function ProfileHeader() {
  return (
    <div className={classes.profileHeader}>
      <ProfileBg/>
      <ProfileInfo/>
    </div>
  )
}