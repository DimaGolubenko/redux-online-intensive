//Core
import { fromJS, List } from "immutable";

//Instruments
import { FILL_POSTS, PUSH_POST } from "./types";

const initialState = List();

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILL_POSTS:
            return fromJS(action.payload);
        case PUSH_POST:
            return fromJS([action.payload, ...state]);
        default:
            return state;
    }
};
