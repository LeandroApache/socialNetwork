import React from "react";
import classes from "./ProfileInfo.module.css";
import {ProfileAvatar} from "./ProfileAvatar/ProfileAvatar";
import {ProfileName} from "./ProfileName/ProfileName";

export function ProfileInfo() {
  return (
    <div className={classes.profileInfo}>
      <ProfileAvatar/>
      <ProfileName/>
    </div>
  )
}