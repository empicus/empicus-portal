import { DiseaseCaseEditState, initialDiseaseCaseEditState } from "./disease-case-edit.state";
import *  as fromDiseaseCaseEditReducerFunctions from './disease-case-edit.reducer.functions'
import * as fromDiseaseCaseEditActions from "../../actions/disease-case-edit/disease-case-edit.actions";
import { createReducer, on, Action } from "@ngrx/store";

const reducer = createReducer(
    initialDiseaseCaseEditState,
    on(fromDiseaseCaseEditActions.submitDiseaseCaseEditRequestAction, (state, { data }) => fromDiseaseCaseEditReducerFunctions.onSubmitDiseaseCaseEditRequestEvent(state, data)),
    on(fromDiseaseCaseEditActions.submitDiseaseCaseEditSuccessAction, (state, { data }) => fromDiseaseCaseEditReducerFunctions.onSubmitDiseaseCaseEditSuccessEvent(state, data)),
    on(fromDiseaseCaseEditActions.submitDiseaseCaseEditFailureAction, (state, { data }) => fromDiseaseCaseEditReducerFunctions.onSubmitDiseaseCaseEditFailureEvent(state, data))
);

export function diseaseCaseEditReducer(state: DiseaseCaseEditState | undefined, action: Action) {
    return reducer(state, action);
}

