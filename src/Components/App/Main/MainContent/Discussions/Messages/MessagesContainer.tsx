import React from "react";
import {Messages} from "./Messages";
import {
  addNewMessageActionCreator, MessageType,
  updateNewMessageTextActionCreator
} from "../../../../../../Redux/DiscussionsReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../../../../Redux/Store-redux";
import {Dispatch} from "redux";

type MapStatePropsType = {
  messages: Array<MessageType>
  newMessageText: string
}
type MapDispatchPropsType = {
  onUpdateMessageText: (text: string) => void
  onAddNewMessage: () => void
}
export type MessagesPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    messages: state.discussionPage.messages,
    newMessageText: state.discussionPage.newMessageText
  }
}
const mapDispatchToProps = (dispatch: Dispatch) : MapDispatchPropsType => {
  return {
    onUpdateMessageText: (text: string) => {
      dispatch(updateNewMessageTextActionCreator(text))
    },
    onAddNewMessage: () => {
      dispatch(addNewMessageActionCreator())
    }
  }
}

let MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;