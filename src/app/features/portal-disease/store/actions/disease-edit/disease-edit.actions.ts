import { createAction, props } from '@ngrx/store';
import { ErrorData, ArtifactData } from 'helion-core';
import { DiseaseEditData } from '../../../data/disease-edit/disease-edit.data';

/**
 * These actions are dispatch when a auth event occurs
 */
export const submitDiseaseEditRequestAction = createAction('[Disease] DiseaseEdit Request', props<{data: DiseaseEditData}>());

export const submitDiseaseEditSuccessAction = createAction('[Disease] DiseaseEdit Request Success', props<{data: ArtifactData}>());

export const submitDiseaseEditFailureAction = createAction('[Disease] DiseaseEdit Request Error', props<{data: ErrorData}>());

