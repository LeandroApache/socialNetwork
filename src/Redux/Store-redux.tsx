import {combineReducers, createStore} from "redux";
import discussionsReducer from "./DiscussionsReducer";
import userProfileReducer from "./UserProfileReducer";
import {friendsReducer} from "./FriendsReducer";

let rootReducer= combineReducers({
  discussionPage: discussionsReducer,
  userProfilePage: userProfileReducer,
  friendsPage: friendsReducer
})

export type AppStateType = ReturnType<typeof rootReducer>;

export let store = createStore(rootReducer);

// автоматически createStore создает внутри себя стейт, в котором есть два свойтва объекта reducers
