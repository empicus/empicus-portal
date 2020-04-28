import { createAction, props } from '@ngrx/store';
import { ErrorData, ArtifactData } from 'helion-core';
import { ReportEditData } from '../../../data/report-edit/report-edit.data';

/**
 * These actions are dispatch when a auth event occurs
 */
export const submitReportEditRequestAction = createAction('[Report] ReportEdit Request', props<{data: ReportEditData}>());

export const submitReportEditSuccessAction = createAction('[Report] ReportEdit Request Success', props<{data: ArtifactData}>());

export const submitReportEditFailureAction = createAction('[Report] ReportEdit Request Error', props<{data: ErrorData}>());

