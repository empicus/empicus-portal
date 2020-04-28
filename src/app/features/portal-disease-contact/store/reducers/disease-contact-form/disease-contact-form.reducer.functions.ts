
import { ErrorData, ArtifactData } from 'helion-core';
import { DiseaseContactFormState } from './disease-contact-form.state';
import { DiseaseContactFormData } from '../../../data/disease-contact-form/disease-contact-form.data';

/**
 * @param state
 * @param action
 */
export const onSubmitDiseaseContactFormRequestEvent = (state: DiseaseContactFormState, data: DiseaseContactFormData): DiseaseContactFormState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitDiseaseContactFormSuccessEvent = (state: DiseaseContactFormState, data: ArtifactData): DiseaseContactFormState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitDiseaseContactFormFailureEvent = (state: DiseaseContactFormState, data: ErrorData): DiseaseContactFormState => {
    return { ...state };
};