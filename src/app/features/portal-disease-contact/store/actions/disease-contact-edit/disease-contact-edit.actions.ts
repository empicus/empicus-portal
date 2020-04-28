import { createAction, props } from '@ngrx/store';
import { ErrorData, ArtifactData } from 'helion-core';
import { DiseaseContactEditData } from '../../../data/disease-contact-edit/disease-contact-edit.data';

/**
 * These actions are dispatch when a auth event occurs
 */
export const submitDiseaseContactEditRequestAction = createAction('[DiseaseContact] DiseaseContactEdit Request', props<{data: DiseaseContactEditData}>());

export const submitDiseaseContactEditSuccessAction = createAction('[DiseaseContact] DiseaseContactEdit Request Success', props<{data: ArtifactData}>());

export const submitDiseaseContactEditFailureAction = createAction('[DiseaseContact] DiseaseContactEdit Request Error', props<{data: ErrorData}>());

