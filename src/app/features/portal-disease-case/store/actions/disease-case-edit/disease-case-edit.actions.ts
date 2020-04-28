import { createAction, props } from '@ngrx/store';
import { ErrorData, ArtifactData } from 'helion-core';
import { DiseaseCaseEditData } from '../../../data/disease-case-edit/disease-case-edit.data';

/**
 * These actions are dispatch when a auth event occurs
 */
export const submitDiseaseCaseEditRequestAction = createAction('[DiseaseCase] DiseaseCaseEdit Request', props<{data: DiseaseCaseEditData}>());

export const submitDiseaseCaseEditSuccessAction = createAction('[DiseaseCase] DiseaseCaseEdit Request Success', props<{data: ArtifactData}>());

export const submitDiseaseCaseEditFailureAction = createAction('[DiseaseCase] DiseaseCaseEdit Request Error', props<{data: ErrorData}>());

