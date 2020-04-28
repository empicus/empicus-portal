import { createAction, props } from '@ngrx/store';
import { ErrorData, ArtifactData } from 'helion-core';
import { ReportFormData } from '../../../data/report-form/report-form.data';

/**
 * These actions are dispatch when a auth event occurs
 */
export const submitReportFormRequestAction = createAction('[Report] ReportForm Request', props<{data: ReportFormData}>());

export const submitReportFormSuccessAction = createAction('[Report] ReportForm Request Success', props<{data: ArtifactData}>());

export const submitReportFormFailureAction = createAction('[Report] ReportForm Request Error', props<{data: ErrorData}>());

