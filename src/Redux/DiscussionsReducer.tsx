const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

export type DiscussionPageType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
  newMessageText: string
}
export type DialogType = {
  id: number
  name: string
}
export type MessageType = {
  id: number
  avatar: string
  name: string
  message: string
  date: Date
}

type AddNewMessageAT = {
  type: "ADD-NEW-MESSAGE"
}
type UpdateNewMessageTextAT = {
  type: "UPDATE-MESSAGE-TEXT"
  newMessageText: string
}
export type DiscussionsReducerAT = AddNewMessageAT | UpdateNewMessageTextAT;

const initialState : DiscussionPageType = {
  dialogs: [
    {id: 1, name: "Kirill Nesterovich"},
    {id: 2, name: "Nastya Sherementseva"},
    {id: 3, name: "Gena Gusovskiy"},
    {id: 4, name: "Mr. Colobakskiy"},
    {id: 5, name: "Ramil (Boss)"}
  ],
  messages: [
    {
      id: 1,
      avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
      name: 'Some Name',
      message: 'Hello',
      date: new Date(2021, 7, 15)
    },
    {
      id: 2,
      avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
      name: 'Some Name',
      message: 'How are you?',
      date: new Date(2020, 15, 30)
    },
    {
      id: 3,
      avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
      name: 'Some Name',
      message: 'I am fine, and you?',
      date: new Date(2021, 1, 3)
    },
    {
      id: 4,
      avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
      name: 'Some Name',
      message: 'Some dummy text',
      date: new Date(2021, 1, 3)
    },
  ],
  newMessageText: ""
}

export const addNewMessageActionCreator = () => {
  return {type: ADD_NEW_MESSAGE};
}
export const updateNewMessageTextActionCreator = (newMessageText: string) => {
  return {type: UPDATE_MESSAGE_TEXT, newMessageText};
}

const discussionsReducer = (state: DiscussionPageType = initialState, action: DiscussionsReducerAT) : DiscussionPageType => {
  switch (action.type) {
    case "UPDATE-MESSAGE-TEXT":
      return {
        ...state,
        newMessageText: action.newMessageText
      }
    case "ADD-NEW-MESSAGE":
      let text = state.newMessageText;
      return  {
        ...state,
        messages: [...state.messages,
          {
            id: Math.random(),
            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
            name: 'New Name',
            message: text,
            date: new Date(2021, 7, 15)
          }
        ],
        newMessageText: ""
      };
    default:
      return state;
  }
}
export default discussionsReducer;



