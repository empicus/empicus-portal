
import { ErrorData, ArtifactData } from 'helion-core';
import { DiseaseCaseFormState } from './disease-case-form.state';
import { DiseaseCaseFormData } from '../../../data/disease-case-form/disease-case-form.data';

/**
 * @param state
 * @param action
 */
export const onSubmitDiseaseCaseFormRequestEvent = (state: DiseaseCaseFormState, data: DiseaseCaseFormData): DiseaseCaseFormState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitDiseaseCaseFormSuccessEvent = (state: DiseaseCaseFormState, data: ArtifactData): DiseaseCaseFormState => {
    return { ...state };
};

/**
 * @param state
 * @param action
 */
export const onSubmitDiseaseCaseFormFailureEvent = (state: DiseaseCaseFormState, data: ErrorData): DiseaseCaseFormState => {
    return { ...state };
};