//Core
import { List, fromJS } from "immutable";

//Reducer
import { usersReducer } from "../reducer";

//Actions
import { usersActions } from "../actions";

const initialState = List();

describe("users reducer:", () => {
    test("should return initial state by default", () => {
        expect(usersReducer(void 0, {})).toEqual(initialState);
    });

    test("should handle FILL_USERS action", () => {
        expect(
            usersReducer(initialState, usersActions.fillUsers(__.users))
        ).toEqual(fromJS(__.users));
    });

    test("should handle CLEAR_USERS action", () => {
        expect(usersReducer(initialState, usersActions.clearUsers())).toEqual(
            initialState
        );
    });
});
