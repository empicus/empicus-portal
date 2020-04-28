import { createAction, props } from '@ngrx/store';
import { ErrorData, ArtifactData } from 'helion-core';
import { DiseaseFormData } from '../../../data/disease-form/disease-form.data';

/**
 * These actions are dispatch when a auth event occurs
 */
export const submitDiseaseFormRequestAction = createAction('[Disease] DiseaseForm Request', props<{data: DiseaseFormData}>());

export const submitDiseaseFormSuccessAction = createAction('[Disease] DiseaseForm Request Success', props<{data: ArtifactData}>());

export const submitDiseaseFormFailureAction = createAction('[Disease] DiseaseForm Request Error', props<{data: ErrorData}>());

