import { UserEditState, initialUserEditState } from "./user-edit.state";
import *  as fromUserEditReducerFunctions from './user-edit.reducer.functions'
import * as fromUserEditActions from "../../actions/user-edit/user-edit.actions";
import { createReducer, on, Action } from "@ngrx/store";

const reducer = createReducer(
    initialUserEditState,
    on(fromUserEditActions.submitUserEditRequestAction, (state, { data }) => fromUserEditReducerFunctions.onSubmitUserEditRequestEvent(state, data)),
    on(fromUserEditActions.submitUserEditSuccessAction, (state, { data }) => fromUserEditReducerFunctions.onSubmitUserEditSuccessEvent(state, data)),
    on(fromUserEditActions.submitUserEditFailureAction, (state, { data }) => fromUserEditReducerFunctions.onSubmitUserEditFailureEvent(state, data))
);

export function userEditReducer(state: UserEditState | undefined, action: Action) {
    return reducer(state, action);
}

