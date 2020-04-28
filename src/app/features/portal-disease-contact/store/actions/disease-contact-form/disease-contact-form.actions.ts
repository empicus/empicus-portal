import { createAction, props } from '@ngrx/store';
import { ErrorData, ArtifactData } from 'helion-core';
import { DiseaseContactFormData } from '../../../data/disease-contact-form/disease-contact-form.data';

/**
 * These actions are dispatch when a auth event occurs
 */
export const submitDiseaseContactFormRequestAction = createAction('[DiseaseContact] DiseaseContactForm Request', props<{data: DiseaseContactFormData}>());

export const submitDiseaseContactFormSuccessAction = createAction('[DiseaseContact] DiseaseContactForm Request Success', props<{data: ArtifactData}>());

export const submitDiseaseContactFormFailureAction = createAction('[DiseaseContact] DiseaseContactForm Request Error', props<{data: ErrorData}>());

