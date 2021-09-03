import React, {ChangeEvent} from "react";
import classes from "./Messages.module.css";
import {MessagesItem} from "./MessagesItem/MessagesItem";
import {MessagesPropsType} from "./MessagesContainer";

export function Messages(props: MessagesPropsType) {

  const addNewMessageHandler = () => {
    props.onAddNewMessage()
  }
  const messageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let text = e.currentTarget.value;
    props.onUpdateMessageText(text);
  }

  return (
    <section className={classes.messages}>
      <div className={classes.messagesList}>
        {props.messages.map((message) =>
          <MessagesItem key={message.id}
                        avatar={message.avatar}
                        name={message.name}
                        message={message.message}
                        date={message.date}
                        />)}
      </div>
      <div className={classes.messagesCreate}>
        <form>
          <div className={classes.messagesRow}>
            <button className={classes.messagesVoice}>Voice message</button>
            <textarea value={props.newMessageText}
                      onChange={messageChangeHandler}
                      name="textarea"
                      id="textarea"/>
            <button
              onClick={addNewMessageHandler}
              className={classes.messagesSubmit}
              type="button">
              Create message
            </button>
          </div>
        </form>
      </div>
      {/*//переделать на сабмит вместо онклик*/}
    </section>
  )
}