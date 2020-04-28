import { createAction, props } from '@ngrx/store';
import { ErrorData, ArtifactData } from 'helion-core';
import { PathogenFormData } from '../../../data/pathogen-form/pathogen-form.data';

/**
 * These actions are dispatch when a auth event occurs
 */
export const submitPathogenFormRequestAction = createAction('[Pathogen] PathogenForm Request', props<{data: PathogenFormData}>());

export const submitPathogenFormSuccessAction = createAction('[Pathogen] PathogenForm Request Success', props<{data: ArtifactData}>());

export const submitPathogenFormFailureAction = createAction('[Pathogen] PathogenForm Request Error', props<{data: ErrorData}>());

