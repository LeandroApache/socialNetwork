import React from "react";
import {Friends} from "./Friends";
import {connect} from "react-redux";
import {AppStateType} from "../../../../../Redux/Store-redux";
import {Dispatch} from "redux";
import {addToFriendsAC, FriendType, removeFromFriendsAC, setFriendsAC} from "../../../../../Redux/FriendsReducer";

type MapStatePropsType = {
  friends: Array<FriendType>
}
type MapDispatchPropsType = {
  addToFriends: (id: number) => void
  removeFromFriends: (id: number) => void
  setFriends: (friends: Array<FriendType>) => void
}
export type FriendsPropsType = MapStatePropsType & MapDispatchPropsType;

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    friends: state.friendsPage.friends
  }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
    addToFriends: (id: number) => {
      dispatch(addToFriendsAC(id))
    },
    removeFromFriends: (id: number) => {
      dispatch(removeFromFriendsAC(id))
    },
    setFriends: (friends: Array<FriendType>) => {
      dispatch(setFriendsAC(friends));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Friends);
