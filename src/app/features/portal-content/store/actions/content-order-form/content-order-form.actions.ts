import { createAction, props } from '@ngrx/store';
import { ErrorData, ArtifactData } from 'helion-core';
import { ContentOrderFormData } from '../../../data/content-order-form/content-order-form.data';

/**
 * These actions are dispatch when a auth event occurs
 */
export const submitContentOrderFormRequestAction = createAction('[ContentOrder] ContentOrderForm Request', props<{data: ContentOrderFormData}>());

export const submitContentOrderFormSuccessAction = createAction('[ContentOrder] ContentOrderForm Request Success', props<{data: ArtifactData}>());

export const submitContentOrderFormFailureAction = createAction('[ContentOrder] ContentOrderForm Request Error', props<{data: ErrorData}>());

