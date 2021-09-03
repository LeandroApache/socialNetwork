import React from "react";
import classes from "./Dialogs.module.css";
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {DialogsPropsType} from "./DialogsContainer";

export function Dialogs(props:DialogsPropsType) {
  return (
    <section className={classes.dialogs}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div className={classes.dialogsList}>
            {props.dialogs.map(dialog => <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id}/>)}
          </div>
          {/*{dialogsElements}*/}
          {/*<DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>*/}
          {/*<DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>*/}
          {/*<DialogsItem name={dialogsData[2].name} id={dialogsData[2].id}/>*/}
          {/*<DialogsItem name={dialogsData[3].name} id={dialogsData[3].id}/>*/}
          {/*<DialogsItem name={dialogsData[4].name} id={dialogsData[4].id}/>*/}
        </div>
      </div>
    </section>
  )
}