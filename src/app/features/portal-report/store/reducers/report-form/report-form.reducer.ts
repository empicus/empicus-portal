import { ReportFormState, initialReportFormState } from "./report-form.state";
import *  as fromReportFormReducerFunctions from './report-form.reducer.functions'
import * as fromReportFormActions from "../../actions/report-form/report-form.actions";
import { createReducer, on, Action } from "@ngrx/store";

const reducer = createReducer(
    initialReportFormState,
    on(fromReportFormActions.submitReportFormRequestAction, (state, { data }) => fromReportFormReducerFunctions.onSubmitReportFormRequestEvent(state, data)),
    on(fromReportFormActions.submitReportFormSuccessAction, (state, { data }) => fromReportFormReducerFunctions.onSubmitReportFormSuccessEvent(state, data)),
    on(fromReportFormActions.submitReportFormFailureAction, (state, { data }) => fromReportFormReducerFunctions.onSubmitReportFormFailureEvent(state, data))
);

export function reportFormReducer(state: ReportFormState | undefined, action: Action) {
    return reducer(state, action);
}

