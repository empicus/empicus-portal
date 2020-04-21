import { createAction, props } from '@ngrx/store';
import { ErrorData, ArtifactData } from 'helion-core';
import { AcademicOrderEditData } from '../../../data/academic-order-edit/academic-order-edit.data';

/**
 * These actions are dispatch when a auth event occurs
 */
export const submitAcademicOrderEditRequestAction = createAction('[AcademicOrder] AcademicOrderEdit Request', props<{data: AcademicOrderEditData}>());

export const submitAcademicOrderEditSuccessAction = createAction('[AcademicOrder] AcademicOrderEdit Request Success', props<{data: ArtifactData}>());

export const submitAcademicOrderEditFailureAction = createAction('[AcademicOrder] AcademicOrderEdit Request Error', props<{data: ErrorData}>());

