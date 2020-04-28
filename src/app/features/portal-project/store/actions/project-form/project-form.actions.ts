import { createAction, props } from '@ngrx/store';
import { ErrorData, ArtifactData } from 'helion-core';
import { ProjectFormData } from '../../../data/project-form/project-form.data';

/**
 * These actions are dispatch when a auth event occurs
 */
export const submitProjectFormRequestAction = createAction('[Project] ProjectForm Request', props<{data: ProjectFormData}>());

export const submitProjectFormSuccessAction = createAction('[Project] ProjectForm Request Success', props<{data: ArtifactData}>());

export const submitProjectFormFailureAction = createAction('[Project] ProjectForm Request Error', props<{data: ErrorData}>());

