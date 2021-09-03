import React from "react";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../../../../../Redux/Store-redux";
import {DialogType} from "../../../../../../Redux/DiscussionsReducer";

type MapStatePropsType = {
  dialogs: Array<DialogType>
}
type MapDispatchPropsType = {

}
export type DialogsPropsType =  MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType) : MapStatePropsType => {
  return {
    dialogs: state.discussionPage.dialogs
  }
}
const mapDispatchToProps = () : MapDispatchPropsType => {
  return {}
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;