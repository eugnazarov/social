import {createStore} from "redux";
import {profileReducer} from "./profile/profile.reducer";

export const store = createStore(profileReducer);
