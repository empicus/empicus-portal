import { DiseaseContactEditState, initialDiseaseContactEditState } from "./disease-contact-edit.state";
import *  as fromDiseaseContactEditReducerFunctions from './disease-contact-edit.reducer.functions'
import * as fromDiseaseContactEditActions from "../../actions/disease-contact-edit/disease-contact-edit.actions";
import { createReducer, on, Action } from "@ngrx/store";

const reducer = createReducer(
    initialDiseaseContactEditState,
    on(fromDiseaseContactEditActions.submitDiseaseContactEditRequestAction, (state, { data }) => fromDiseaseContactEditReducerFunctions.onSubmitDiseaseContactEditRequestEvent(state, data)),
    on(fromDiseaseContactEditActions.submitDiseaseContactEditSuccessAction, (state, { data }) => fromDiseaseContactEditReducerFunctions.onSubmitDiseaseContactEditSuccessEvent(state, data)),
    on(fromDiseaseContactEditActions.submitDiseaseContactEditFailureAction, (state, { data }) => fromDiseaseContactEditReducerFunctions.onSubmitDiseaseContactEditFailureEvent(state, data))
);

export function diseaseContactEditReducer(state: DiseaseContactEditState | undefined, action: Action) {
    return reducer(state, action);
}

