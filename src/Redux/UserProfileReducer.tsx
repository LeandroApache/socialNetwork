import React from "react";

export type UserPostType = {
  id: number
  text: string
  date: Date
}

const initialState = {
  userPosts: [
    {id: Math.random(), text: "Really great concert", date: new Date(2021, 7, 15)},
    {id: Math.random(), text: "Welcome to my page", date: new Date(2020, 1, 22)},
    {id: Math.random(), text: "lets go Krumkachi", date: new Date(2020, 2, 27)},
    {id: Math.random(), text: "I love Bazanov", date: new Date(2019, 4, 5)},
    {id: Math.random(), text: "Ramil best friend of all Tatars", date: new Date(2021, 9, 16)},
  ] as Array<UserPostType>,
  newPostText: "",
}
type UserProfilePageType = typeof initialState;
type UpdateNewPostTextAT = {
  type: "UPDATE-NEW-POST-TEXT"
  newPostText: string
}
type AddNewPostAT = {
  type: "ADD-NEW-POST"
}
export type UserProfileReducerAT = UpdateNewPostTextAT | AddNewPostAT;

const userProfileReducer = (state: UserProfilePageType = initialState, action: UserProfileReducerAT): UserProfilePageType => {
  switch (action.type) {
    case "UPDATE-NEW-POST-TEXT": {
      return {
        ...state,
        newPostText: action.newPostText
      };
    }
    case "ADD-NEW-POST": {
      let text = state.newPostText;
      return {
        ...state,
        userPosts: [...state.userPosts,
          {id: Math.random(), text, date: new Date(2021, 7, 15)}],
        newPostText: ""
      };
    }
    default:
      return state;
  }
}

export default userProfileReducer;

export const addNewPostActionCreator = () => {
  return {type: "ADD-NEW-POST"};
}
export const updateNewPostTextActionCreator = (newPostText: string) => {
  return {type: "UPDATE-NEW-POST-TEXT", newPostText};
}