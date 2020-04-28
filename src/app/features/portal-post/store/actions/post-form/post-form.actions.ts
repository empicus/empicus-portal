import { createAction, props } from '@ngrx/store';
import { ErrorData, ArtifactData } from 'helion-core';
import { PostFormData } from '../../../data/post-form/post-form.data';

/**
 * These actions are dispatch when a auth event occurs
 */
export const submitPostFormRequestAction = createAction('[Post] PostForm Request', props<{data: PostFormData}>());

export const submitPostFormSuccessAction = createAction('[Post] PostForm Request Success', props<{data: ArtifactData}>());

export const submitPostFormFailureAction = createAction('[Post] PostForm Request Error', props<{data: ErrorData}>());

