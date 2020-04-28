import { DiseaseContactFormState, initialDiseaseContactFormState } from "./disease-contact-form.state";
import *  as fromDiseaseContactFormReducerFunctions from './disease-contact-form.reducer.functions'
import * as fromDiseaseContactFormActions from "../../actions/disease-contact-form/disease-contact-form.actions";
import { createReducer, on, Action } from "@ngrx/store";

const reducer = createReducer(
    initialDiseaseContactFormState,
    on(fromDiseaseContactFormActions.submitDiseaseContactFormRequestAction, (state, { data }) => fromDiseaseContactFormReducerFunctions.onSubmitDiseaseContactFormRequestEvent(state, data)),
    on(fromDiseaseContactFormActions.submitDiseaseContactFormSuccessAction, (state, { data }) => fromDiseaseContactFormReducerFunctions.onSubmitDiseaseContactFormSuccessEvent(state, data)),
    on(fromDiseaseContactFormActions.submitDiseaseContactFormFailureAction, (state, { data }) => fromDiseaseContactFormReducerFunctions.onSubmitDiseaseContactFormFailureEvent(state, data))
);

export function diseaseContactFormReducer(state: DiseaseContactFormState | undefined, action: Action) {
    return reducer(state, action);
}

