import { PostEditState, initialPostEditState } from "./post-edit.state";
import *  as fromPostEditReducerFunctions from './post-edit.reducer.functions'
import * as fromPostEditActions from "../../actions/post-edit/post-edit.actions";
import { createReducer, on, Action } from "@ngrx/store";

const reducer = createReducer(
    initialPostEditState,
    on(fromPostEditActions.submitPostEditRequestAction, (state, { data }) => fromPostEditReducerFunctions.onSubmitPostEditRequestEvent(state, data)),
    on(fromPostEditActions.submitPostEditSuccessAction, (state, { data }) => fromPostEditReducerFunctions.onSubmitPostEditSuccessEvent(state, data)),
    on(fromPostEditActions.submitPostEditFailureAction, (state, { data }) => fromPostEditReducerFunctions.onSubmitPostEditFailureEvent(state, data))
);

export function postEditReducer(state: PostEditState | undefined, action: Action) {
    return reducer(state, action);
}

