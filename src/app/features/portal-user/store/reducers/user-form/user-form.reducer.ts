import { UserFormState, initialUserFormState } from "./user-form.state";
import *  as fromUserFormReducerFunctions from './user-form.reducer.functions'
import * as fromUserFormActions from "../../actions/user-form/user-form.actions";
import { createReducer, on, Action } from "@ngrx/store";

const reducer = createReducer(
    initialUserFormState,
    on(fromUserFormActions.submitUserFormRequestAction, (state, { data }) => fromUserFormReducerFunctions.onSubmitUserFormRequestEvent(state, data)),
    on(fromUserFormActions.submitUserFormSuccessAction, (state, { data }) => fromUserFormReducerFunctions.onSubmitUserFormSuccessEvent(state, data)),
    on(fromUserFormActions.submitUserFormFailureAction, (state, { data }) => fromUserFormReducerFunctions.onSubmitUserFormFailureEvent(state, data))
);

export function userFormReducer(state: UserFormState | undefined, action: Action) {
    return reducer(state, action);
}

