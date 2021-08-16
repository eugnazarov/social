import {TOGGLE_SHOW_NAME} from "./profile.actions";

const INITIAL_STATE = {
    showName: true,
    name: "Alex"
}


export const profileReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case TOGGLE_SHOW_NAME: {
            return {
                ...state,
                showName: !state.showName
            }
        }

        default: {
            return state
        }
    }
}
