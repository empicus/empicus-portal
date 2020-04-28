import { DiseaseEditState, initialDiseaseEditState } from "./disease-edit.state";
import *  as fromDiseaseEditReducerFunctions from './disease-edit.reducer.functions'
import * as fromDiseaseEditActions from "../../actions/disease-edit/disease-edit.actions";
import { createReducer, on, Action } from "@ngrx/store";

const reducer = createReducer(
    initialDiseaseEditState,
    on(fromDiseaseEditActions.submitDiseaseEditRequestAction, (state, { data }) => fromDiseaseEditReducerFunctions.onSubmitDiseaseEditRequestEvent(state, data)),
    on(fromDiseaseEditActions.submitDiseaseEditSuccessAction, (state, { data }) => fromDiseaseEditReducerFunctions.onSubmitDiseaseEditSuccessEvent(state, data)),
    on(fromDiseaseEditActions.submitDiseaseEditFailureAction, (state, { data }) => fromDiseaseEditReducerFunctions.onSubmitDiseaseEditFailureEvent(state, data))
);

export function diseaseEditReducer(state: DiseaseEditState | undefined, action: Action) {
    return reducer(state, action);
}

