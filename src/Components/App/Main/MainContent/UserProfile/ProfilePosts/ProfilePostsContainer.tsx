import React from "react";
import {
  addNewPostActionCreator,
  updateNewPostTextActionCreator,
  UserPostType
} from "../../../../../../Redux/UserProfileReducer";
import {ProfilePosts} from "./ProfilePosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../../../../Redux/Store-redux";
import {Dispatch} from "redux";

type MapStatePropsType = {
  posts: Array<UserPostType>
  newPostText: string
}
type MapDispatchPropsType = {
  onUpdatePostText: (text: string)=> void
  onAddPost: ()=> void
}
export type ProfilePostsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType) : MapStatePropsType => {
  return {
    posts: state.userProfilePage.userPosts,
    newPostText: state.userProfilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    onUpdatePostText: (text: string) => {
      dispatch(updateNewPostTextActionCreator(text))
    },
    onAddPost: () => {
      dispatch(addNewPostActionCreator())
    }
  }
}


let ProfilePostsContainerRR = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts);

export default ProfilePostsContainerRR;