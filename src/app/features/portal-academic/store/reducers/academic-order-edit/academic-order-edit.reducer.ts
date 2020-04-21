import { AcademicOrderEditState, initialAcademicOrderEditState } from "./academic-order-edit.state";
import *  as fromAcademicOrderEditReducerFunctions from './academic-order-edit.reducer.functions'
import * as fromAcademicOrderEditActions from "../../actions/academic-order-edit/academic-order-edit.actions";
import { createReducer, on, Action } from "@ngrx/store";

const reducer = createReducer(
    initialAcademicOrderEditState,
    on(fromAcademicOrderEditActions.submitAcademicOrderEditRequestAction, (state, { data }) => fromAcademicOrderEditReducerFunctions.onSubmitAcademicOrderEditRequestEvent(state, data)),
    on(fromAcademicOrderEditActions.submitAcademicOrderEditSuccessAction, (state, { data }) => fromAcademicOrderEditReducerFunctions.onSubmitAcademicOrderEditSuccessEvent(state, data)),
    on(fromAcademicOrderEditActions.submitAcademicOrderEditFailureAction, (state, { data }) => fromAcademicOrderEditReducerFunctions.onSubmitAcademicOrderEditFailureEvent(state, data))
);

export function academicOrderEditReducer(state: AcademicOrderEditState | undefined, action: Action) {
    return reducer(state, action);
}

