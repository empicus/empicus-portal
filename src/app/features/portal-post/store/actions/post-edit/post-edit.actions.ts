import { createAction, props } from '@ngrx/store';
import { ErrorData, ArtifactData } from 'helion-core';
import { PostEditData } from '../../../data/post-edit/post-edit.data';

/**
 * These actions are dispatch when a auth event occurs
 */
export const submitPostEditRequestAction = createAction('[Post] PostEdit Request', props<{data: PostEditData}>());

export const submitPostEditSuccessAction = createAction('[Post] PostEdit Request Success', props<{data: ArtifactData}>());

export const submitPostEditFailureAction = createAction('[Post] PostEdit Request Error', props<{data: ErrorData}>());

