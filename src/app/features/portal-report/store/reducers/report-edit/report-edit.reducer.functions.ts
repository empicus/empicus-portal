
import { ErrorData, ArtifactData } from 'helion-core';
import { ReportEditState } from './report-edit.state';
import { ReportEditData } from '../../../data/report-edit/report-edit.data';

/**
 * @param state
 * @param action
 */
export const onSubmitReportEditRequestEvent = (state: ReportEditState, data: ReportEditData): ReportEditState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitReportEditSuccessEvent = (state: ReportEditState, data: ArtifactData): ReportEditState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitReportEditFailureEvent = (state: ReportEditState, data: ErrorData): ReportEditState => {
    return { ...state };
};