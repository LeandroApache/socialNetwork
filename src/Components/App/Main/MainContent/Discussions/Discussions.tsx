import React from "react";
import classes from "./Discussions.module.css";
import DialogsContainer from "./Dialogs/DialogsContainer";
import MessagesContainer from "./Messages/MessagesContainer";

export function Discussions() {
  return (
    <div className={classes.discussions}>
      {/*<h2 className={classes.title}>Discussions</h2>*/}
      <div className={classes.container}>
        <div className={classes.row}>
          <DialogsContainer />
          <MessagesContainer />
        </div>
      </div>
    </div>
  )
}