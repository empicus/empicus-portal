import { ProjectEditState, initialProjectEditState } from "./project-edit.state";
import *  as fromProjectEditReducerFunctions from './project-edit.reducer.functions'
import * as fromProjectEditActions from "../../actions/project-edit/project-edit.actions";
import { createReducer, on, Action } from "@ngrx/store";

const reducer = createReducer(
    initialProjectEditState,
    on(fromProjectEditActions.submitProjectEditRequestAction, (state, { data }) => fromProjectEditReducerFunctions.onSubmitProjectEditRequestEvent(state, data)),
    on(fromProjectEditActions.submitProjectEditSuccessAction, (state, { data }) => fromProjectEditReducerFunctions.onSubmitProjectEditSuccessEvent(state, data)),
    on(fromProjectEditActions.submitProjectEditFailureAction, (state, { data }) => fromProjectEditReducerFunctions.onSubmitProjectEditFailureEvent(state, data))
);

export function projectEditReducer(state: ProjectEditState | undefined, action: Action) {
    return reducer(state, action);
}

