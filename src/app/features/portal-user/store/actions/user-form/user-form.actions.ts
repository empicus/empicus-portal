import { createAction, props } from '@ngrx/store';
import { ErrorData, ArtifactData } from 'helion-core';
import { UserFormData } from '../../../data/user-form/user-form.data';

/**
 * These actions are dispatch when a auth event occurs
 */
export const submitUserFormRequestAction = createAction('[User] UserForm Request', props<{data: UserFormData}>());

export const submitUserFormSuccessAction = createAction('[User] UserForm Request Success', props<{data: ArtifactData}>());

export const submitUserFormFailureAction = createAction('[User] UserForm Request Error', props<{data: ErrorData}>());

