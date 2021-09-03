import React from 'react';

type PhotosType = {
  small: string
  large: string
}
export type FriendType ={
  followed: boolean
  id: number
  name: string
  photos: PhotosType
  status: string
}

let initialState : FriendsPageType = {
  friends: []
}

type FriendsPageType = {
  friends: Array<FriendType>
};

type AddToFriendsAT = {
  type: "ADD-TO-FRIENDS",
  id: number
}
type RemoveFromFriendsAT = {
  type: 'REMOVE-FROM-FRIENDS',
  id: number
}
type SetFriendsAT = {
  type: "SET-FRIENDS"
  friends: Array<FriendType>
}
type FriendsReducerAT = AddToFriendsAT | RemoveFromFriendsAT | SetFriendsAT;

export const friendsReducer = (state: FriendsPageType = initialState, action: FriendsReducerAT): FriendsPageType => {
  switch (action.type) {
    case "ADD-TO-FRIENDS":
      if (state.friends.length > 0) {}
      return {
        ...state,
        friends: state.friends.map(el => el.id === action.id ? {...el, followed: true} : el)
      }
    case "REMOVE-FROM-FRIENDS":
      return {
        ...state,
        friends: state.friends.map(el => el.id === action.id ? {...el, followed: false} : el)
      }
    case "SET-FRIENDS":
      return{
        ...state,
        friends: [...action.friends]
        //убрал ...state.friends от дублирования
      }
    default:
      return state;
  }
}

export const addToFriendsAC = (id: number): AddToFriendsAT => {
  return {
    type: "ADD-TO-FRIENDS",
    id
  }
}
export const removeFromFriendsAC = (id: number): RemoveFromFriendsAT => {
  return {
    type: "REMOVE-FROM-FRIENDS",
    id
  }
}
export const setFriendsAC = (friends: Array<FriendType>) : SetFriendsAT => {
  return {
    type: "SET-FRIENDS",
    friends
  }
}
