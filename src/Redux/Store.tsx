import React from "react";
// import userProfileReducer, {UserProfileReducerAT} from "./UserProfileReducer";
// import discussionsReducer, {DiscussionsReducerAT} from "./DiscussionsReducer";
//
//  type dialogsDataType = {
//   id: number
//   name: string
// }
//  type messagesDataType = {
//   id: number
//   avatar: string
//   name: string
//   message: string
//   date: Date
// }
//  type discussionPageType = {
//   dialogs: Array<dialogsDataType>
//   messages: Array<messagesDataType>
//   newMessageText: string
// }
//  type storeDispatchType = {
//   type: string
//   newMessageText?: string
//   newPostText?: string
// }
// type userPostsType = {
//   id: number
//   text: string
//   date: Date
// }
//  type userProfilePageType = {
//   userPosts: Array<userPostsType>
//   newPostText: string
// }
//  type stateType = {
//   discussionPage: discussionPageType
//   userProfilePage: userProfilePageType
// }
//  type storeDataType = {
//   _state: stateType
//   _callSubscriber: () => void
//   subscribe: (observer: () => void) => void
//   getState: () => stateType
//   dispatch: (action: UserProfileReducerAT | DiscussionsReducerAT) => void
// }
//
// export const store: storeDataType = {
//   _state: {
//     discussionPage: {
//       dialogs: [
//         {id: 1, name: "Kirill Nesterovich"},
//         {id: 2, name: "Nastya Sherementseva"},
//         {id: 3, name: "Gena Gusovskiy"},
//         {id: 4, name: "Mr. Colobakskiy"},
//         {id: 5, name: "Ramil (Boss)"}
//       ],
//       messages: [
//         {
//           id: 1,
//           avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
//           name: 'Some Name',
//           message: 'Hello',
//           date: new Date(2021, 7, 15)
//         },
//         {
//           id: 2,
//           avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
//           name: 'Some Name',
//           message: 'How are you?',
//           date: new Date(2020, 15, 30)
//         },
//         {
//           id: 3,
//           avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
//           name: 'Some Name',
//           message: 'I am fine, and you?',
//           date: new Date(2021, 1, 3)
//         },
//         {
//           id: 4,
//           avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
//           name: 'Some Name',
//           message: 'Some dummy text',
//           date: new Date(2021, 1, 3)
//         },
//       ],
//       newMessageText: ""
//     },
//     userProfilePage: {
//       userPosts: [
//         {id: Math.random(), text: "Really great concert", date: new Date(2021, 7, 15)},
//         {id: Math.random(), text: "Welcome to my page", date: new Date(2020, 1, 22)},
//         {id: Math.random(), text: "lets go Krumkachi", date: new Date(2020, 2, 27)},
//         {id: Math.random(), text: "I love Bazanov", date: new Date(2019, 4, 5)},
//         {id: Math.random(), text: "Ramil best friend of all Tatars", date: new Date(2021, 9, 16)},
//       ],
//       newPostText: "",
//     }
//   },
//   _callSubscriber() {
//     console.log("No subscribers in this object...")
//   },
//
//   getState() {
//     return this._state;
//   },
//   subscribe(observer: () => void) {
//     this._callSubscriber = observer;
//   },
//
//   dispatch(action: UserProfileReducerAT | DiscussionsReducerAT) {
//     this._state.userProfilePage = userProfileReducer(this._state.userProfilePage, action);
//     this._state.discussionPage = discussionsReducer(this._state.discussionPage, action);
//     this._callSubscriber();
//   }
// }