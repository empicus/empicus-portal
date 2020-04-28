import { createAction, props } from '@ngrx/store';
import { ErrorData, ArtifactData } from 'helion-core';
import { ProjectEditData } from '../../../data/project-edit/project-edit.data';

/**
 * These actions are dispatch when a auth event occurs
 */
export const submitProjectEditRequestAction = createAction('[Project] ProjectEdit Request', props<{data: ProjectEditData}>());

export const submitProjectEditSuccessAction = createAction('[Project] ProjectEdit Request Success', props<{data: ArtifactData}>());

export const submitProjectEditFailureAction = createAction('[Project] ProjectEdit Request Error', props<{data: ErrorData}>());

