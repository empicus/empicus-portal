
import { ErrorData, ArtifactData } from 'helion-core';
import { ReportFormState } from './report-form.state';
import { ReportFormData } from '../../../data/report-form/report-form.data';

/**
 * @param state
 * @param action
 */
export const onSubmitReportFormRequestEvent = (state: ReportFormState, data: ReportFormData): ReportFormState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitReportFormSuccessEvent = (state: ReportFormState, data: ArtifactData): ReportFormState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitReportFormFailureEvent = (state: ReportFormState, data: ErrorData): ReportFormState => {
    return { ...state };
};