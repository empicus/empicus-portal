import { ActionReducerMap } from "@ngrx/store";
import { ReportFormState } from './reducers/report-form/report-form.state';
import { ReportEditState } from './reducers/report-edit/report-edit.state';
import * as fromReportFormReducer from "./reducers/report-form/report-form.reducer";
import * as fromReportEditReducer from "./reducers/report-edit/report-edit.reducer";


/**
 * State of application
 */
export interface PortalReportModuleState {
    reportFormState: ReportFormState,
    reportEditState: ReportEditState,
}

/**
 * The reducers within the system
 */
export const reducers: ActionReducerMap<PortalReportModuleState> = {
    reportFormState: fromReportFormReducer.reportFormReducer,
    reportEditState: fromReportEditReducer.reportEditReducer,
};



