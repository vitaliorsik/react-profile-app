import {combineReducers} from "redux";
import sidebarReducer from "./sidebarReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
    sidebar: sidebarReducer,
    profile: profileReducer
});
