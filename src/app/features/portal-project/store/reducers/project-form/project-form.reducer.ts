import { ProjectFormState, initialProjectFormState } from "./project-form.state";
import *  as fromProjectFormReducerFunctions from './project-form.reducer.functions'
import * as fromProjectFormActions from "../../actions/project-form/project-form.actions";
import { createReducer, on, Action } from "@ngrx/store";

const reducer = createReducer(
    initialProjectFormState,
    on(fromProjectFormActions.submitProjectFormRequestAction, (state, { data }) => fromProjectFormReducerFunctions.onSubmitProjectFormRequestEvent(state, data)),
    on(fromProjectFormActions.submitProjectFormSuccessAction, (state, { data }) => fromProjectFormReducerFunctions.onSubmitProjectFormSuccessEvent(state, data)),
    on(fromProjectFormActions.submitProjectFormFailureAction, (state, { data }) => fromProjectFormReducerFunctions.onSubmitProjectFormFailureEvent(state, data))
);

export function projectFormReducer(state: ProjectFormState | undefined, action: Action) {
    return reducer(state, action);
}

