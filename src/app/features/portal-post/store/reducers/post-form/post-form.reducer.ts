import { PostFormState, initialPostFormState } from "./post-form.state";
import *  as fromPostFormReducerFunctions from './post-form.reducer.functions'
import * as fromPostFormActions from "../../actions/post-form/post-form.actions";
import { createReducer, on, Action } from "@ngrx/store";

const reducer = createReducer(
    initialPostFormState,
    on(fromPostFormActions.submitPostFormRequestAction, (state, { data }) => fromPostFormReducerFunctions.onSubmitPostFormRequestEvent(state, data)),
    on(fromPostFormActions.submitPostFormSuccessAction, (state, { data }) => fromPostFormReducerFunctions.onSubmitPostFormSuccessEvent(state, data)),
    on(fromPostFormActions.submitPostFormFailureAction, (state, { data }) => fromPostFormReducerFunctions.onSubmitPostFormFailureEvent(state, data))
);

export function postFormReducer(state: PostFormState | undefined, action: Action) {
    return reducer(state, action);
}

