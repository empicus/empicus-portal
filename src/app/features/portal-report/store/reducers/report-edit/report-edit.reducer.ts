import { ReportEditState, initialReportEditState } from "./report-edit.state";
import *  as fromReportEditReducerFunctions from './report-edit.reducer.functions'
import * as fromReportEditActions from "../../actions/report-edit/report-edit.actions";
import { createReducer, on, Action } from "@ngrx/store";

const reducer = createReducer(
    initialReportEditState,
    on(fromReportEditActions.submitReportEditRequestAction, (state, { data }) => fromReportEditReducerFunctions.onSubmitReportEditRequestEvent(state, data)),
    on(fromReportEditActions.submitReportEditSuccessAction, (state, { data }) => fromReportEditReducerFunctions.onSubmitReportEditSuccessEvent(state, data)),
    on(fromReportEditActions.submitReportEditFailureAction, (state, { data }) => fromReportEditReducerFunctions.onSubmitReportEditFailureEvent(state, data))
);

export function reportEditReducer(state: ReportEditState | undefined, action: Action) {
    return reducer(state, action);
}

