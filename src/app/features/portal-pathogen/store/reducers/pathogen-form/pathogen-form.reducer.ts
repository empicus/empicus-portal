import { PathogenFormState, initialPathogenFormState } from "./pathogen-form.state";
import *  as fromPathogenFormReducerFunctions from './pathogen-form.reducer.functions'
import * as fromPathogenFormActions from "../../actions/pathogen-form/pathogen-form.actions";
import { createReducer, on, Action } from "@ngrx/store";

const reducer = createReducer(
    initialPathogenFormState,
    on(fromPathogenFormActions.submitPathogenFormRequestAction, (state, { data }) => fromPathogenFormReducerFunctions.onSubmitPathogenFormRequestEvent(state, data)),
    on(fromPathogenFormActions.submitPathogenFormSuccessAction, (state, { data }) => fromPathogenFormReducerFunctions.onSubmitPathogenFormSuccessEvent(state, data)),
    on(fromPathogenFormActions.submitPathogenFormFailureAction, (state, { data }) => fromPathogenFormReducerFunctions.onSubmitPathogenFormFailureEvent(state, data))
);

export function pathogenFormReducer(state: PathogenFormState | undefined, action: Action) {
    return reducer(state, action);
}

