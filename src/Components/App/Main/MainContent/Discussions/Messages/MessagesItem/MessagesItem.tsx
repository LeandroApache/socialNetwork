import React from "react";
import classes from "./MessagesItem.module.css";

export type messagesItemType = {
  avatar: string
  name: string
  message: string
  date: Date
}

export function MessagesItem(props: messagesItemType) {
  return (
    <div className={classes.messagesItem}>
      <div className={classes.image}>
        <img src={props.avatar} alt="#"/>
      </div>
      <div className={classes.content}>
        <h3 className={classes.userName}>{props.name}</h3>
        <p className={classes.text}>{props.message}</p>
        <p className={classes.time}>{props.date.toLocaleString("en-US", {
          month: "long",
          year: "numeric",
          day: 'numeric'
        })}</p>
      </div>
    </div>
  )
}