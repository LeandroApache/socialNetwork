import React from "react";
import classes from "./UserProfile.module.css";
import {ProfileHeader} from "./ProfileHeader/ProfileHeader";
import ProfilePostsContainer from "./ProfilePosts/ProfilePostsContainer";

export function UserProfile() {
  return (
    <div className={classes.userProfile}>
        <h2 className={classes.title}>Profile</h2>
        <div className={classes.container}>
          <div className={classes.row}>
              <ProfileHeader />
              <ProfilePostsContainer />
          </div>
      </div>
    </div>
  )
}