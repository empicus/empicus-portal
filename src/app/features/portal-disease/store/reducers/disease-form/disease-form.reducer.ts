import { DiseaseFormState, initialDiseaseFormState } from "./disease-form.state";
import *  as fromDiseaseFormReducerFunctions from './disease-form.reducer.functions'
import * as fromDiseaseFormActions from "../../actions/disease-form/disease-form.actions";
import { createReducer, on, Action } from "@ngrx/store";

const reducer = createReducer(
    initialDiseaseFormState,
    on(fromDiseaseFormActions.submitDiseaseFormRequestAction, (state, { data }) => fromDiseaseFormReducerFunctions.onSubmitDiseaseFormRequestEvent(state, data)),
    on(fromDiseaseFormActions.submitDiseaseFormSuccessAction, (state, { data }) => fromDiseaseFormReducerFunctions.onSubmitDiseaseFormSuccessEvent(state, data)),
    on(fromDiseaseFormActions.submitDiseaseFormFailureAction, (state, { data }) => fromDiseaseFormReducerFunctions.onSubmitDiseaseFormFailureEvent(state, data))
);

export function diseaseFormReducer(state: DiseaseFormState | undefined, action: Action) {
    return reducer(state, action);
}

