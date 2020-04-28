import { createAction, props } from '@ngrx/store';
import { ErrorData, ArtifactData } from 'helion-core';
import { PathogenEditData } from '../../../data/pathogen-edit/pathogen-edit.data';

/**
 * These actions are dispatch when a auth event occurs
 */
export const submitPathogenEditRequestAction = createAction('[Pathogen] PathogenEdit Request', props<{data: PathogenEditData}>());

export const submitPathogenEditSuccessAction = createAction('[Pathogen] PathogenEdit Request Success', props<{data: ArtifactData}>());

export const submitPathogenEditFailureAction = createAction('[Pathogen] PathogenEdit Request Error', props<{data: ErrorData}>());

