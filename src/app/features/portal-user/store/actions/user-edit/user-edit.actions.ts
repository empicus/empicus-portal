import { createAction, props } from '@ngrx/store';
import { ErrorData, ArtifactData } from 'helion-core';
import { UserEditData } from '../../../data/user-edit/user-edit.data';

/**
 * These actions are dispatch when a auth event occurs
 */
export const submitUserEditRequestAction = createAction('[User] UserEdit Request', props<{data: UserEditData}>());

export const submitUserEditSuccessAction = createAction('[User] UserEdit Request Success', props<{data: ArtifactData}>());

export const submitUserEditFailureAction = createAction('[User] UserEdit Request Error', props<{data: ErrorData}>());

