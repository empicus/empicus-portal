import { createAction, props } from '@ngrx/store';
import { ErrorData, ArtifactData } from 'helion-core';
import { DiseaseCaseFormData } from '../../../data/disease-case-form/disease-case-form.data';

/**
 * These actions are dispatch when a auth event occurs
 */
export const submitDiseaseCaseFormRequestAction = createAction('[DiseaseCase] DiseaseCaseForm Request', props<{data: DiseaseCaseFormData}>());

export const submitDiseaseCaseFormSuccessAction = createAction('[DiseaseCase] DiseaseCaseForm Request Success', props<{data: ArtifactData}>());

export const submitDiseaseCaseFormFailureAction = createAction('[DiseaseCase] DiseaseCaseForm Request Error', props<{data: ErrorData}>());

