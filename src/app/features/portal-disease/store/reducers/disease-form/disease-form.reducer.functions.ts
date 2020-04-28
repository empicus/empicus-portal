
import { ErrorData, ArtifactData } from 'helion-core';
import { DiseaseFormState } from './disease-form.state';
import { DiseaseFormData } from '../../../data/disease-form/disease-form.data';

/**
 * @param state
 * @param action
 */
export const onSubmitDiseaseFormRequestEvent = (state: DiseaseFormState, data: DiseaseFormData): DiseaseFormState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitDiseaseFormSuccessEvent = (state: DiseaseFormState, data: ArtifactData): DiseaseFormState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitDiseaseFormFailureEvent = (state: DiseaseFormState, data: ErrorData): DiseaseFormState => {
    return { ...state };
};