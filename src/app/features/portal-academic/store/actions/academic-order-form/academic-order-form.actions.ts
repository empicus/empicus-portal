import { createAction, props } from '@ngrx/store';
import { ErrorData, ArtifactData } from 'helion-core';
import { AcademicOrderFormData } from '../../../data/academic-order-form/academic-order-form.data';

/**
 * These actions are dispatch when a auth event occurs
 */
export const submitAcademicOrderFormRequestAction = createAction('[AcademicOrder] AcademicOrderForm Request', props<{data: AcademicOrderFormData}>());

export const submitAcademicOrderFormSuccessAction = createAction('[AcademicOrder] AcademicOrderForm Request Success', props<{data: ArtifactData}>());

export const submitAcademicOrderFormFailureAction = createAction('[AcademicOrder] AcademicOrderForm Request Error', props<{data: ErrorData}>());

