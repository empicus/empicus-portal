import { DiseaseCaseFormState, initialDiseaseCaseFormState } from "./disease-case-form.state";
import *  as fromDiseaseCaseFormReducerFunctions from './disease-case-form.reducer.functions'
import * as fromDiseaseCaseFormActions from "../../actions/disease-case-form/disease-case-form.actions";
import { createReducer, on, Action } from "@ngrx/store";

const reducer = createReducer(
    initialDiseaseCaseFormState,
    on(fromDiseaseCaseFormActions.submitDiseaseCaseFormRequestAction, (state, { data }) => fromDiseaseCaseFormReducerFunctions.onSubmitDiseaseCaseFormRequestEvent(state, data)),
    on(fromDiseaseCaseFormActions.submitDiseaseCaseFormSuccessAction, (state, { data }) => fromDiseaseCaseFormReducerFunctions.onSubmitDiseaseCaseFormSuccessEvent(state, data)),
    on(fromDiseaseCaseFormActions.submitDiseaseCaseFormFailureAction, (state, { data }) => fromDiseaseCaseFormReducerFunctions.onSubmitDiseaseCaseFormFailureEvent(state, data))
);

export function diseaseCaseFormReducer(state: DiseaseCaseFormState | undefined, action: Action) {
    return reducer(state, action);
}

