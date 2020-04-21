import { AcademicOrderFormState, initialAcademicOrderFormState } from "./academic-order-form.state";
import *  as fromAcademicOrderFormReducerFunctions from './academic-order-form.reducer.functions'
import * as fromAcademicOrderFormActions from "../../actions/academic-order-form/academic-order-form.actions";
import { createReducer, on, Action } from "@ngrx/store";

const reducer = createReducer(
    initialAcademicOrderFormState,
    on(fromAcademicOrderFormActions.submitAcademicOrderFormRequestAction, (state, { data }) => fromAcademicOrderFormReducerFunctions.onSubmitAcademicOrderFormRequestEvent(state, data)),
    on(fromAcademicOrderFormActions.submitAcademicOrderFormSuccessAction, (state, { data }) => fromAcademicOrderFormReducerFunctions.onSubmitAcademicOrderFormSuccessEvent(state, data)),
    on(fromAcademicOrderFormActions.submitAcademicOrderFormFailureAction, (state, { data }) => fromAcademicOrderFormReducerFunctions.onSubmitAcademicOrderFormFailureEvent(state, data))
);

export function academicOrderFormReducer(state: AcademicOrderFormState | undefined, action: Action) {
    return reducer(state, action);
}

