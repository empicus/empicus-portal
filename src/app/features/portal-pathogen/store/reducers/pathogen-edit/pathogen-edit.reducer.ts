import { PathogenEditState, initialPathogenEditState } from "./pathogen-edit.state";
import *  as fromPathogenEditReducerFunctions from './pathogen-edit.reducer.functions'
import * as fromPathogenEditActions from "../../actions/pathogen-edit/pathogen-edit.actions";
import { createReducer, on, Action } from "@ngrx/store";

const reducer = createReducer(
    initialPathogenEditState,
    on(fromPathogenEditActions.submitPathogenEditRequestAction, (state, { data }) => fromPathogenEditReducerFunctions.onSubmitPathogenEditRequestEvent(state, data)),
    on(fromPathogenEditActions.submitPathogenEditSuccessAction, (state, { data }) => fromPathogenEditReducerFunctions.onSubmitPathogenEditSuccessEvent(state, data)),
    on(fromPathogenEditActions.submitPathogenEditFailureAction, (state, { data }) => fromPathogenEditReducerFunctions.onSubmitPathogenEditFailureEvent(state, data))
);

export function pathogenEditReducer(state: PathogenEditState | undefined, action: Action) {
    return reducer(state, action);
}

