import { createAction, props } from '@ngrx/store';
import { ErrorData, ArtifactData } from 'helion-core';
import { ContentOrderEditData } from '../../../data/content-order-edit/content-order-edit.data';

/**
 * These actions are dispatch when a auth event occurs
 */
export const submitContentOrderEditRequestAction = createAction('[ContentOrder] ContentOrderEdit Request', props<{data: ContentOrderEditData}>());

export const submitContentOrderEditSuccessAction = createAction('[ContentOrder] ContentOrderEdit Request Success', props<{data: ArtifactData}>());

export const submitContentOrderEditFailureAction = createAction('[ContentOrder] ContentOrderEdit Request Error', props<{data: ErrorData}>());

